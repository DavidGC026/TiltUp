import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { PDFViewer } from "@/components/PDFViewer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function PDFViewPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const pdfPath = searchParams.get("url");
  const title = searchParams.get("title") || "Documento PDF";
  const moduleId = searchParams.get("moduleId");
  const { toast } = useToast();

  const updateProgressMutation = useMutation({
    mutationFn: async (progress: number) => {
      if (!moduleId) return;
      return apiRequest("PATCH", `/api/modules/${moduleId}/progress`, { progress });
    },
    onSuccess: () => {
      if (moduleId) {
        queryClient.invalidateQueries({ queryKey: ["/api/modules"] });
        queryClient.invalidateQueries({ queryKey: ["/api/modules", moduleId] });
      }
    },
  });

  const handleFinish = () => {
    if (moduleId) {
      // Update progress to 60% when finishing the PDF
      // Only if current progress is less than 60%
      // But we can just set it to 60 as per requirement "al llegar a la ultima diapositiva del pdf se llene al 60%"
      // User requirement implies setting it to 60.
      console.log(`Marking PDF as finished for module ${moduleId}, setting progress to 60%`);
      updateProgressMutation.mutate(60);

      toast({
        title: "¡Lectura completada!",
        description: "Has completado la lectura de este documento. Tu progreso ha avanzado al 60%.",
      });
    }
  };

  if (!pdfPath) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <p className="text-muted-foreground">PDF no encontrado</p>
        </main>
      </div>
    );
  }

  // Construir URL absoluta para react-pdf
  // Si pdfPath ya empieza con '/', no agregamos otro.
  const pdfUrl = pdfPath?.startsWith('/') ? pdfPath : `/${pdfPath}`;

  console.log('PDFViewPage - pdfPath:', pdfPath);
  console.log('PDFViewPage - pdfUrl:', pdfUrl);
  console.log('PDFViewPage - title:', title);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="w-full px-2 sm:px-4 py-4 sm:py-6">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
        </Link>

        <PDFViewer pdfUrl={pdfUrl} title={title} onFinish={handleFinish} />
      </main>
    </div>
  );
}
