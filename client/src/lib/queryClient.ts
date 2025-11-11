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
    
    let url = `http://localhost/TiltUp${path}.php`;
    
    // Si es GET /api/modules/modulo-1 -> /api/modules.php?id=modulo-1
    if (path.includes("/api/modules/") && !path.includes("/sections")) {
      const id = parts[parts.length - 1];
      url = `http://localhost/TiltUp/api/modules.php?id=${id}`;
    } 
    // Si es GET /api/modules/modulo-1/sections -> /api/sections.php?module_id=modulo-1
    else if (path.includes("/sections")) {
      const moduleId = parts[parts.indexOf("modules") + 1];
      url = `http://localhost/TiltUp/api/sections.php?module_id=${moduleId}`;
    }
    
    const res = await fetch(url, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    const data = await res.json();
    
    // Reescribir URLs de imágenes y PDFs para que apunten a /TiltUp/
    if (data) {
      if (Array.isArray(data)) {
        data.forEach(item => {
          if (item.imageUrl && !item.imageUrl.includes("/TiltUp")) {
            item.imageUrl = `/TiltUp${item.imageUrl}`;
          }
          if (item.pdfUrl && !item.pdfUrl.includes("/TiltUp")) {
            // Si empieza con /pdfs/, convertir a /uploads/pdfs/
            if (item.pdfUrl.startsWith("/pdfs/")) {
              item.pdfUrl = `/TiltUp/uploads${item.pdfUrl}`;
            } else {
              item.pdfUrl = `/TiltUp${item.pdfUrl}`;
            }
          }
        });
      } else if (typeof data === "object") {
        if (data.imageUrl && !data.imageUrl.includes("/TiltUp")) {
          data.imageUrl = `/TiltUp${data.imageUrl}`;
        }
        if (data.pdfUrl && !data.pdfUrl.includes("/TiltUp")) {
          // Si empieza con /pdfs/, convertir a /uploads/pdfs/
          if (data.pdfUrl.startsWith("/pdfs/")) {
            data.pdfUrl = `/TiltUp/uploads${data.pdfUrl}`;
          } else {
            data.pdfUrl = `/TiltUp${data.pdfUrl}`;
          }
        }
      }
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
