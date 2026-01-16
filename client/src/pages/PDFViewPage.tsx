import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { PDFViewer } from "@/components/PDFViewer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PDFViewPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const pdfPath = searchParams.get("url");
  const title = searchParams.get("title") || "Documento PDF";

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
  // pdfPath viene como: uploads/pdfs/modulo1/presentacionejecutiva.pdf
  const pdfUrl = `/TiltUp/${pdfPath}`;

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

        <PDFViewer pdfUrl={pdfUrl} title={title} />
      </main>
    </div>
  );
}
