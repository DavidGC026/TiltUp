import { QueryClient, QueryFunction } from "@tanstack/react-query";

// Helper to rewrite URLs from /api/... to /api/... needed for PHP backend
// (The backend api files are in /api/ relative to the root)
function rewriteUrl(path: string): string {
  // If already absolute, return
  if (path.startsWith("http")) return path;

  // Get base path from Vite env, ensure it doesn't have trailing slash for joining
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

  // Normalize path to ensure it starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // If path already starts with basePath, don't prepend it again (in case we called this twice)
  // But we need to be careful: if basePath is empty string (root), this check is trivial.
  let fullPath = normalizedPath;
  if (basePath && !normalizedPath.startsWith(basePath)) {
    fullPath = `${basePath}${normalizedPath}`;
  }

  // Rewrite logic for PHP backend
  // We need to map "frontend routes" to "backend php files" if they don't end in .php
  // But we must preserve the query params if they exist.

  // Split path and query params
  const [pathname, search] = fullPath.split('?');

  let newPathname = pathname;

  // Basic rule: if it looks like an API call and doesn't end in .php, append .php
  // However, we need to handle specific REST-like routes

  // If we are just pointing to a file, leave it.
  if (pathname.endsWith(".php")) {
    return fullPath;
  }

  // Routes logic (based on the original code but simplified for dynamic base)
  // The original code had specific case handling. Let's adapt it.
  // Note: The original code logic was a bit specific to /TiltUp prefix removal. 
  // Now we want to Keep the prefix if it's the base path.

  // Let's strip the base path to analyze the "api route" part
  let apiRoute = pathname;
  if (basePath && apiRoute.startsWith(basePath)) {
    apiRoute = apiRoute.substring(basePath.length);
  }

  // Now apiRoute is like "/api/modules" or "/api/modules/123"

  let targetPhp = apiRoute;
  let textQueryParams = "";

  const parts = apiRoute.split('/').filter(p => p);
  // parts[0] should be 'api' usually

  if (apiRoute === "/api/modules" || apiRoute === "/api/modules/") {
    targetPhp = "/api/modules.php";
  }
  // GET /api/modules/123 -> /api/modules.php?id=123
  else if (apiRoute.startsWith("/api/modules/") && !apiRoute.includes("/sections") && !apiRoute.includes("/progress") && !apiRoute.includes("/complete")) {
    const id = parts[parts.length - 1]; // last part is id
    targetPhp = "/api/modules.php";
    textQueryParams = `id=${id}`;
  }
  // PATCH /api/modules/123/progress -> /api/modules.php?id=123
  else if (apiRoute.startsWith("/api/modules/") && (apiRoute.endsWith("/progress") || apiRoute.endsWith("/complete"))) {
    // Structure: /api/modules/{id}/progress
    const id = parts[2]; // api, modules, id, progress
    targetPhp = "/api/modules.php";
    textQueryParams = `id=${id}`;
  }
  // GET /api/modules/123/sections -> /api/sections.php?module_id=123
  else if (apiRoute.includes("/sections") && !apiRoute.includes("exam")) {
    if (apiRoute.includes("/modules/")) {
      // /api/modules/{id}/sections
      const id = parts[2];
      targetPhp = "/api/sections.php";
      textQueryParams = `module_id=${id}`;
    } else if (apiRoute.includes("/complete")) {
      // /api/sections/{id}/complete -> /api/sections.php/complete ?? 
      // Original: url = `/api/sections.php${suffix}`; where suffix was /nothing
      // Actually original was: const suffix = normalizedPath.replace("/api/sections", ""); -> /id/complete
      // This seems to rely on how sections.php handles extra path info or query params?
      // Looking at original: 
      // else if (normalizedPath.includes("/complete")) {
      //   const suffix = normalizedPath.replace("/api/sections", "");
      //   url = `/api/sections.php${suffix}`;
      // }
      // Let's stick to the pattern: /api/sections/{id}/complete
      const id = parts[2];
      targetPhp = "/api/sections.php";
      // We probably need to pass action=complete or similar, but the backend likely checks the method (POST) and id?
      // Wait, the original code for sections completion was:
      // url = `/api/sections.php/${sectionId}/complete` effectively? 
      // Let's look closely at original lines 46-48:
      // const suffix = normalizedPath.replace("/api/sections", ""); 
      // url = `/api/sections.php${suffix}`;
      // If path is /api/sections/123/complete, suffix is /123/complete. Result: /api/sections.php/123/complete.
      // PHP might use PATH_INFO.
      const suffix = apiRoute.replace("/api/sections", "");
      targetPhp = `/api/sections.php${suffix}`;
    }
  }
  // GET /api/sections/sec-1-1/exam -> /api/exam.php?section_id=sec-1-1
  else if (apiRoute.includes("/sections") && apiRoute.includes("/exam")) {
    // /api/sections/{id}/exam
    const id = parts[2]; // sections is index 1 (api=0). id=2.
    targetPhp = "/api/exam.php";
    textQueryParams = `section_id=${id}`;
  }
  // Exam submit: /api/exams/exam-1/submit -> /api/exam.php?action=submit&exam_id=exam-1
  else if (apiRoute.includes("/api/exams/") && apiRoute.endsWith("/submit")) {
    // /api/exams/{id}/submit
    const id = parts[2];
    targetPhp = "/api/exam.php";
    textQueryParams = `action=submit&exam_id=${id}`;
  }
  // Payments: /api/payments -> /api/payments.php
  else if (apiRoute.startsWith("/api/payments")) {
    targetPhp = "/api/payments.php";
  }
  else {
    // Fallback: append .php if missing
    if (!targetPhp.endsWith(".php")) {
      targetPhp = `${targetPhp}.php`;
    }
  }

  // Reconstruct full URL
  // Base + targetPhp + Params

  // Combine extracted params with existing search params
  const combinedParams = new URLSearchParams(search);
  if (textQueryParams) {
    new URLSearchParams(textQueryParams).forEach((value, key) => {
      combinedParams.append(key, value);
    });
  }

  const queryString = combinedParams.toString();
  const finalPath = `${basePath}${targetPhp}${queryString ? '?' + queryString : ''}`;

  console.log(`[QueryClient] Rewriting ${path} -> ${finalPath}`);
  return finalPath;
}

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const finalUrl = rewriteUrl(url);
  // Simple check to append query params if they were lost during rewrite but passed in url string?
  // rewriteUrl logic above doesn't strip query params if we construct it carefully, 
  // but for GET /api/payments?module_id=X, let's verify.
  // The current rewriteUrl doesn't strictly preserve '?' if it reconstructs the string.
  // Let's rely on standard fetch to handle params if they are part of 'url' argument and we didn't destroy them.
  // Actually rewriteUrl parses 'path' which might imply just the pathname.
  // If url contains ?, we should preserve it.

  let queryString = "";
  if (url.includes("?")) {
    queryString = url.split("?")[1];
  }

  let fetchUrl = finalUrl;
  if (queryString && !finalUrl.includes("?")) {
    fetchUrl += `?${queryString}`;
  } else if (queryString && finalUrl.includes("?")) {
    // already has params, append? assume rewriteUrl handled it mostly or we just concat
    // If rewrite added ?id=X, and we have &foo=Y...
    fetchUrl += `&${queryString}`;
  }

  const res = await fetch(fetchUrl, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
    async ({ queryKey }) => {
      const path = queryKey.join("/") as string;
      const url = rewriteUrl(path);

      const res = await fetch(url, {
        credentials: "include",
      });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      const data = await res.json();

      // Reescribir URLs y normalizar tipos
      const toTiltUpUrl = (raw: unknown) => {
        if (typeof raw !== "string" || raw.length === 0) return raw;
        if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
        // No prefix needed if serving from root
        if (raw.startsWith("/")) return raw;
        return `/${raw}`;
      };

      const normalizeItem = (item: any) => {
        if (!item || typeof item !== "object") return;
        // Map snake_case -> camelCase where needed
        if (item.image_url && !item.imageUrl) item.imageUrl = item.image_url;
        if (item.pdf_url && !item.pdfUrl) item.pdfUrl = item.pdf_url;
        if (item.question_text && !item.questionText) item.questionText = item.question_text;
        if (item.question_number && !item.questionNumber) item.questionNumber = item.question_number;
        if (item.option_text && !item.optionText) item.optionText = item.option_text;
        if (item.option_label && !item.optionLabel) item.optionLabel = item.option_label;
        if (item.is_correct !== undefined && item.isCorrect === undefined) item.isCorrect = item.is_correct;

        // Normalize types from MySQL
        if ("progress" in item && typeof item.progress !== "number") {
          const n = Number(item.progress);
          item.progress = Number.isFinite(n) ? n : 0;
        }
        if ("number" in item && typeof item.number !== "number") {
          const n = Number(item.number);
          item.number = Number.isFinite(n) ? n : item.number;
        }
        if ("order" in item && typeof item.order !== "number") {
          const n = Number(item.order);
          item.order = Number.isFinite(n) ? n : item.order;
        }
        if ("completed" in item && typeof item.completed !== "boolean") {
          item.completed = item.completed === true || item.completed === 1 || item.completed === "1" || item.completed === "true";
        }

        // Rewrite image/PDF URLs
        if (item.imageUrl) {
          item.imageUrl = toTiltUpUrl(item.imageUrl);
          item.image_url = item.imageUrl;
        }
        if (item.pdfUrl) {
          if (typeof item.pdfUrl === "string" && item.pdfUrl.startsWith("/pdfs/")) {
            item.pdfUrl = `/uploads${item.pdfUrl}`;
          }
          item.pdfUrl = toTiltUpUrl(item.pdfUrl);
          item.pdf_url = item.pdfUrl;
        }
      };

      const normalizeRecursive = (obj: any) => {
        if (!obj) return;
        if (Array.isArray(obj)) {
          obj.forEach(normalizeRecursive);
        } else if (typeof obj === "object") {
          normalizeItem(obj);
          if (obj.questions && Array.isArray(obj.questions)) {
            obj.questions.forEach((q: any) => {
              normalizeItem(q);
              if (q.options && Array.isArray(q.options)) {
                q.options.forEach(normalizeItem);
              }
            });
          }
        }
      };

      if (data) {
        normalizeRecursive(data);
      }

      return data;
    };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: true,
      staleTime: 0,
      retry: 1,
    },
    mutations: {
      retry: false,
    },
  },
});
