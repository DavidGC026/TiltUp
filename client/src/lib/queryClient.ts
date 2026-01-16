import { QueryClient, QueryFunction } from "@tanstack/react-query";

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
  const res = await fetch(url, {
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
      const parts = path.split("/").filter(p => p); // Filtrar vacíos

      let url = `/TiltUp${path}.php`;

      // Si es GET /api/modules/modulo-1 -> /api/modules.php?id=modulo-1
      if (path.includes("/api/modules/") && !path.includes("/sections")) {
        const id = parts[parts.length - 1];
        url = `/TiltUp/api/modules.php?id=${id}`;
      }
      // Si es GET /api/modules/modulo-1/sections -> /api/sections.php?module_id=modulo-1
      else if (path.includes("/sections") && path.includes("exam")) {
        // /api/sections/sec-1-1/exam -> /api/exam.php?section_id=sec-1-1
        const sectionId = parts[parts.indexOf("sections") + 1];
        url = `/TiltUp/api/exam.php?section_id=${sectionId}`;
      }
      else if (path.includes("/sections")) {
        const moduleId = parts[parts.indexOf("modules") + 1];
        url = `/TiltUp/api/sections.php?module_id=${moduleId}`;
      }

      const res = await fetch(url, {
        credentials: "include",
      });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      const data = await res.json();

      // Reescribir URLs (backend PHP devuelve snake_case) y normalizar tipos
      const toTiltUpUrl = (raw: unknown) => {
        if (typeof raw !== "string" || raw.length === 0) return raw;
        if (raw.includes("/TiltUp") || raw.startsWith("http://") || raw.startsWith("https://")) return raw;
        if (raw.startsWith("/")) return `/TiltUp${raw}`;
        return `/TiltUp/${raw}`;
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

        // Normalize types from MySQL (often returned as strings)
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

        // Rewrite image/PDF URLs so they resolve under /TiltUp/
        if (item.imageUrl) {
          const rewritten = toTiltUpUrl(item.imageUrl);
          item.imageUrl = rewritten;
          item.image_url = rewritten;
        }
        if (item.pdfUrl) {
          // Back-compat: older DB values used /pdfs/... but files live under /uploads/pdfs/...
          if (typeof item.pdfUrl === "string" && item.pdfUrl.startsWith("/pdfs/")) {
            item.pdfUrl = `/uploads${item.pdfUrl}`;
          }
          const rewritten = toTiltUpUrl(item.pdfUrl);
          item.pdfUrl = rewritten;
          item.pdf_url = rewritten;
        }
      };

      const normalizeRecursive = (obj: any) => {
        if (!obj) return;
        
        if (Array.isArray(obj)) {
          obj.forEach(normalizeRecursive);
        } else if (typeof obj === "object") {
          normalizeItem(obj);
          // Normalizar arrays anidados
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
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
