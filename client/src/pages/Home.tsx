import { useQuery } from "@tanstack/react-query";
import { ModuleCard } from "@/components/ModuleCard";
import { Header } from "@/components/Header";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import type { Module } from "@shared/schema";

export default function Home() {
  const { data: modules, isLoading } = useQuery<Module[]>({
    queryKey: ["/api/modules"],
  });

  return (
    <div className="min-h-screen bg-transparent">
      {/* Content wrapper */}
      <div className="relative z-10">
        <Header />

        <main className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 drop-shadow-md" data-testid="text-page-title">
              CONSTRUCCIÓN DE TILT-UP
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto drop-shadow-sm font-medium">
              Aprende las técnicas profesionales de construcción Tilt-Up a través de nuestros módulos educativos interactivos.
              Desde la planificación hasta el acabado final.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden bg-white/95 backdrop-blur-sm border-white/20" data-testid={`card-skeleton-${i}`}>
                  <Skeleton className="aspect-video w-full" />
                  <div className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-2 w-full mt-4" />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              data-testid="grid-modules"
            >
              {modules?.map((module) => (
                <div key={module.id} className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/20 h-full">
                  <ModuleCard module={module} />
                </div>
              ))}
            </div>
          )}

          {!isLoading && (!modules || modules.length === 0) && (
            <div className="text-center py-16 bg-white/10 rounded-xl backdrop-blur-md border border-white/20">
              <p className="text-white text-lg font-medium">
                No hay módulos disponibles en este momento.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
