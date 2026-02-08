import { useState, useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
// Set up worker with local asset (copied to public/pdf.worker.min.js)
// Using standard JS worker instead of MJS to avoid MIME type issues
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";


interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
  onFinish?: () => void;
}

export function PDFViewer({ pdfUrl, title, onFinish }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(window.innerWidth < 640 ? 0.6 : 1.5);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { user } = useAuth();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pdfDocRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load and render PDF
  useEffect(() => {
    setLoading(true);
    setError(null);
    setPageNumber(1);

    const loadPdf = async () => {
      try {
        console.log('Cargando PDF desde:', pdfUrl);
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        pdfDocRef.current = pdf;
        setNumPages(pdf.numPages);
        console.log('PDF cargado exitosamente. Páginas:', pdf.numPages);
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Error desconocido';
        console.error('Error cargando PDF:', errorMsg);
        setError(`No se pudo cargar el PDF: ${errorMsg}`);
      } finally {
        setLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  // Render current page
  useEffect(() => {
    const renderPage = async () => {
      if (!pdfDocRef.current || !canvasRef.current || !numPages) return;

      try {
        const page = await pdfDocRef.current.getPage(pageNumber);
        const viewport = page.getViewport({ scale });

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        console.log(`Página ${pageNumber} renderizada`);
      } catch (err) {
        console.error('Error renderizando página:', err);
      }
    };

    renderPage();
  }, [pageNumber, scale, numPages]);

  // Handle fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen();
        // Increase scale slightly for fullscreen if desired, or let user zoom
        setScale(1.5);
      } else {
        await document.exitFullscreen();
        setScale(window.innerWidth < 640 ? 0.6 : 1.5);
      }
    } catch (err) {
      console.error("Error toggling fullscreen:", err);
    }
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (numPages && pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
      if (pageNumber + 1 === numPages) {
        onFinish?.();
      }
    }
  };

  const zoomIn = () => {
    setScale(Math.min(scale + 0.25, 3));
  };

  const zoomOut = () => {
    setScale(Math.max(scale - 0.25, 0.5));
  };

  return (
    <Card className={`p-6 bg-white dark:bg-slate-950 transition-all duration-300 ${isFullscreen ? 'fixed inset-0 z-50 rounded-none h-screen w-screen overflow-hidden flex flex-col' : ''}`} ref={containerRef}>
      {title && !isFullscreen && (
        <h3 className="text-lg font-semibold text-foreground mb-4">{title}</h3>
      )}

      <div className={`flex flex-col sm:flex-row flex-wrap gap-2 justify-between items-center bg-muted/30 p-2 rounded-lg ${isFullscreen ? 'mb-2' : 'mb-4'}`}>
        <div className="flex gap-1 sm:gap-2 items-center w-full sm:w-auto justify-center sm:justify-start">
          {user?.role === 'admin' && (
            <Button
              variant="default"
              size="sm"
              onClick={() => {
                if (numPages) {
                  setPageNumber(numPages);
                  onFinish?.();
                }
              }}
              className="bg-yellow-600 hover:bg-yellow-700 text-white mr-2"
            >
              Saltar al final
            </Button>
          )}
          <Button
            onClick={goToPreviousPage}
            disabled={pageNumber === 1}
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 bg-white dark:bg-slate-900"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="px-2 py-1 text-xs sm:text-sm whitespace-nowrap min-w-[80px] text-center font-medium">
            {pageNumber} / {numPages || '-'}
          </span>
          <Button
            onClick={goToNextPage}
            disabled={!numPages || pageNumber >= numPages}
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 bg-white dark:bg-slate-900"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex gap-1 sm:gap-2 items-center w-full sm:w-auto justify-center sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 mt-1 sm:mt-0">
          <Button onClick={zoomOut} variant="outline" size="sm" className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 bg-white dark:bg-slate-900" title="Alejar">
            −
          </Button>
          <span className="px-2 py-1 text-xs sm:text-sm min-w-[50px] text-center font-medium">{Math.round(scale * 100)}%</span>
          <Button onClick={zoomIn} variant="outline" size="sm" className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 bg-white dark:bg-slate-900" title="Acercar">
            +
          </Button>

          <div className="w-px h-6 bg-border mx-1 hidden sm:block"></div>

          <Button
            onClick={toggleFullscreen}
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3 bg-white dark:bg-slate-900"
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </Button>


        </div>
      </div>

      <div
        className={`border rounded-lg overflow-auto bg-gray-50 dark:bg-slate-900 flex items-start justify-center p-2 sm:p-4 transition-all ${isFullscreen ? 'flex-1 h-full border-0 rounded-none' : ''}`}
        style={!isFullscreen ? { height: "calc(100vh - 200px)", minHeight: "400px" } : {}}
      >
        {error ? (
          <div className="p-8 text-red-600 max-w-md text-center self-center">
            <p className="font-semibold mb-2">Error al cargar el PDF</p>
            <p className="text-sm mb-4">{error}</p>
            <p className="text-xs text-gray-500">URL: {pdfUrl}</p>
          </div>
        ) : loading ? (
          <div className="p-8 text-gray-600 dark:text-gray-400 text-center self-center">
            <p className="mb-2">Cargando PDF...</p>
            <div className="animate-pulse">Espere por favor</div>
          </div>
        ) : (
          <canvas ref={canvasRef} className="block max-w-none max-h-none shadow-lg " />
        )}
      </div>
    </Card>
  );
}
