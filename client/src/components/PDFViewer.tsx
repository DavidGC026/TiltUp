import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const cmapsUrl = "https://unpkg.com/pdfjs-dist@5.4.296/cmaps/";


interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [pdfData, setPdfData] = useState<Blob | null>(null);
  const [loading, setLoading] = useState(true);

  // Cargar el PDF como blob para evitar problemas de CORS
  useEffect(() => {
    setLoading(true);
    setError(null);
    setPdfData(null);
    
    const fetchPdf = async () => {
      try {
        console.log('Iniciando carga de PDF desde:', pdfUrl);
        const response = await fetch(pdfUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const blob = await response.blob();
        console.log('PDF descargado correctamente, tamaño:', blob.size, 'bytes');
        setPdfData(blob);
        setError(null);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Error desconocido';
        console.error('Error al descargar PDF:', errorMsg);
        setError(`No se pudo cargar el PDF: ${errorMsg}`);
        setPdfData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPdf();
  }, [pdfUrl]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setError(null);
    console.log('PDF renderizado exitosamente:', pdfUrl, 'Páginas:', numPages);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error renderizando PDF:', error);
    setError(`Error al renderizar PDF: ${error.message}`);
  }

  const goToPreviousPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, numPages || 1));
  };

  const zoomIn = () => {
    setScale(Math.min(scale + 0.25, 2));
  };

  const zoomOut = () => {
    setScale(Math.max(scale - 0.25, 0.5));
  };

  return (
    <Card className="p-6 bg-white dark:bg-slate-950">
      {title && (
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      )}

      <div className="mb-4 flex flex-wrap gap-2 justify-between items-center">
        <div className="flex gap-2">
          <Button
            onClick={goToPreviousPage}
            disabled={pageNumber === 1}
            variant="outline"
            size="sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="px-3 py-2 text-sm">
            Página {pageNumber} {numPages && `de ${numPages}`}
          </span>
          <Button
            onClick={goToNextPage}
            disabled={pageNumber === numPages}
            variant="outline"
            size="sm"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex gap-2">
          <Button onClick={zoomOut} variant="outline" size="sm">
            −
          </Button>
          <span className="px-3 py-2 text-sm">{Math.round(scale * 100)}%</span>
          <Button onClick={zoomIn} variant="outline" size="sm">
            +
          </Button>
          <a href={pdfUrl} download className="inline-block">
            <Button variant="default" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Descargar
            </Button>
          </a>
        </div>
      </div>

      <div className="border rounded-lg overflow-auto bg-gray-50 dark:bg-slate-900 flex justify-center" style={{ height: "600px" }}>
        {error ? (
          <div className="p-8 text-red-600 max-w-md text-center">
            <p className="font-semibold mb-2">Error al cargar el PDF</p>
            <p className="text-sm mb-4">{error}</p>
            <p className="text-xs text-gray-500">URL: {pdfUrl}</p>
          </div>
        ) : loading ? (
          <div className="p-8 text-gray-600 dark:text-gray-400 text-center">
            <p className="mb-2">Descargando PDF...</p>
            <div className="animate-pulse">Espere por favor</div>
          </div>
        ) : pdfData ? (
          <Document
            file={pdfData}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="p-8">Renderizando PDF...</div>}
            options={{
              cMapUrl: cmapsUrl,
              cMapPacked: true,
            }}
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        ) : (
          <div className="p-8 text-gray-400">No hay datos de PDF</div>
        )}
      </div>
    </Card>
  );
}
