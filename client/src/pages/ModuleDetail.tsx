import { useQuery, useMutation } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, CheckCircle2, BookOpen } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Module } from "@shared/schema";

export default function ModuleDetail() {
  const [, params] = useRoute("/modulo/:id");
  const moduleId = params?.id;
  const { toast } = useToast();

  const { data: module, isLoading } = useQuery<Module>({
    queryKey: ["/api/modules", moduleId],
    enabled: !!moduleId,
  });

  const updateProgressMutation = useMutation({
    mutationFn: async (progress: number) => {
      return apiRequest("PATCH", `/api/modules/${moduleId}/progress`, { progress });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/modules"] });
      queryClient.invalidateQueries({ queryKey: ["/api/modules", moduleId] });
      toast({
        title: "Progreso actualizado",
        description: "Tu progreso ha sido guardado exitosamente.",
      });
    },
  });

  const markCompleteMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", `/api/modules/${moduleId}/complete`, { completed: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/modules"] });
      queryClient.invalidateQueries({ queryKey: ["/api/modules", moduleId] });
      toast({
        title: "¡Módulo completado!",
        description: "Has completado este módulo exitosamente.",
      });
    },
  });

  const handleProgressUpdate = (progress: number) => {
    updateProgressMutation.mutate(progress);
  };

  const handleMarkComplete = () => {
    markCompleteMutation.mutate();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-64 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
            <div className="space-y-6">
              <Skeleton className="h-48 w-full" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Módulo no encontrado</p>
            <Link href="/">
              <Button variant="outline" className="mt-4" data-testid="button-back-home">
                Volver al inicio
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/">
          <Button 
            variant="ghost" 
            className="mb-8 hover-elevate active-elevate-2"
            data-testid="button-back"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a módulos
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={module.imageUrl}
                alt={module.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <Badge 
                  variant="secondary" 
                  className="bg-primary text-primary-foreground font-bold px-3 py-1.5 mb-3"
                  data-testid="badge-module-number"
                >
                  MÓDULO {module.number}
                </Badge>
                <h1 
                  className="text-3xl sm:text-4xl font-bold text-white"
                  data-testid="text-module-title"
                >
                  {module.title}
                </h1>
              </div>
            </div>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-primary/10 text-primary p-2 rounded-md">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    Descripción del módulo
                  </h2>
                  <p className="text-muted-foreground">{module.description}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Contenido del módulo
              </h2>
              <div 
                className="prose prose-sm max-w-none text-foreground"
                data-testid="text-module-content"
              >
                <div className="whitespace-pre-wrap">{module.content}</div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Tu Progreso
              </h3>
              <ProgressBar progress={module.progress} className="mb-6" />
              
              <div className="space-y-3">
                {!module.completed && module.progress < 100 && (
                  <>
                    <Button
                      onClick={() => handleProgressUpdate(Math.min(module.progress + 25, 100))}
                      disabled={updateProgressMutation.isPending}
                      className="w-full"
                      variant="outline"
                      data-testid="button-update-progress"
                    >
                      Avanzar 25%
                    </Button>
                    {module.progress >= 75 && (
                      <Button
                        onClick={() => handleProgressUpdate(100)}
                        disabled={updateProgressMutation.isPending}
                        className="w-full"
                        variant="default"
                        data-testid="button-complete-progress"
                      >
                        Completar al 100%
                      </Button>
                    )}
                  </>
                )}
                
                {module.progress === 100 && !module.completed && (
                  <Button
                    onClick={handleMarkComplete}
                    disabled={markCompleteMutation.isPending}
                    className="w-full"
                    variant="default"
                    data-testid="button-mark-complete"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Marcar como completado
                  </Button>
                )}

                {module.completed && (
                  <div 
                    className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-md text-green-700 dark:text-green-300"
                    data-testid="status-completed"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">Módulo completado</span>
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Información
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estado:</span>
                  <span className="font-medium text-foreground">
                    {module.completed ? 'Completado' : 'En progreso'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Progreso:</span>
                  <span className="font-medium text-foreground">{module.progress}%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
