import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, CheckCircle2, XCircle, Award } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { ExamWithQuestions, ExamResult, ExamSubmission } from "@shared/schema";

import { useAuth } from "@/context/AuthContext";

export default function ExamPage() {
  const [, params] = useRoute("/examen/:sectionId");
  const sectionId = params?.sectionId;
  const { toast } = useToast();
  const { user } = useAuth();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds



  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const { data: exam, isLoading } = useQuery<ExamWithQuestions>({
    queryKey: ["/api/sections", sectionId, "exam"],
    enabled: !!sectionId,
    // Queremos un set aleatorio cada vez que se abre el examen
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: "always",
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const submitMutation = useMutation<ExamResult, Error, ExamSubmission>({
    mutationFn: async (submission: ExamSubmission) => {
      // Use generic path, queryClient's rewriteUrl will handle BASE_URL
      const response = await apiRequest("POST", `/api/exam.php`, submission);
      return await response.json() as ExamResult;
    },
    onSuccess: (data) => {
      setResult(data);
      setSubmitted(true);

      // Si aprobó, el backend marca la sección como completada. Refrescar datos.
      if (data.passed) {
        queryClient.invalidateQueries();
      }

      // Update module progress based on exam type user query params
      const searchParams = new URLSearchParams(window.location.search);
      const moduleId = searchParams.get("moduleId");
      const type = searchParams.get("type");

      if (moduleId) {
        let newProgress = 0;
        if (type === "diagnostic") {
          newProgress = 20;
        } else if (type === "evaluation") {
          newProgress = 100;
        }

        if (newProgress > 0) {
          // Trigger progress update
          apiRequest("PATCH", `/api/modules/${moduleId}/progress`, { progress: newProgress })
            .then(() => {
              queryClient.invalidateQueries({ queryKey: ["/api/modules"] });
              queryClient.invalidateQueries({ queryKey: ["/api/modules", moduleId] });
            })
            .catch(err => console.error("Error updating progress:", err));
        }
      }

      if (user?.role === 'admin') {
        toast({
          title: data.passed ? "¡Examen aprobado!" : "Examen no aprobado",
          description: data.passed
            ? `Obtuviste ${data.score.toFixed(0)}% de calificación.`
            : `Obtuviste ${data.score.toFixed(0)}%. Necesitas al menos 70% para aprobar.`,
          variant: data.passed ? "default" : "destructive",
        });
      } else {
        toast({
          title: "¡Examen Finalizado!",
          description: "Tus respuestas han sido registradas. Espera a que el evaluador brinde tus resultados.",
          variant: "default",
        });
      }
    },
  });

  const handleAnswerChange = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = () => {
    if (!exam) return;

    // Verificar que todas las preguntas estén respondidas
    const unanswered = exam.questions.filter(q => !answers[q.id]);
    if (unanswered.length > 0) {
      toast({
        title: "Preguntas sin responder",
        description: `Por favor responde todas las preguntas (${unanswered.length} pendientes).`,
        variant: "destructive",
      });
      return;
    }

    if (!exam.attemptId) {
      toast({
        title: "Error",
        description: "No se pudo iniciar el intento del examen. Recarga la página e inténtalo de nuevo.",
        variant: "destructive",
      });
      return;
    }

    const submission: ExamSubmission = {
      examId: exam.id,
      attemptId: exam.attemptId,
      answers,
    };

    submitMutation.mutate(submission);
  };

  useEffect(() => {
    if (submitted || !exam) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(); // Auto-submit when time runs out
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, exam]);

  useEffect(() => {
    if (submitted) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Estás a punto de perder el progreso. No se guarda.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [submitted]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Skeleton className="h-8 w-32 mb-8" />
          <Skeleton className="h-64 w-full" />
        </main>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Examen no encontrado</p>
            <Link href="/">
              <Button variant="outline" className="mt-4">
                Volver al inicio
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative text-foreground">
      {/* Background Grade (Gray to Black Gradient) */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-800 to-black" />

      <div className="relative z-10">
        <Header />

        <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button
            variant="ghost"
            className="mb-8 hover-elevate active-elevate-2 text-white hover:text-white/80 hover:bg-white/10"
            onClick={() => {
              if (submitted) {
                window.history.back();
              } else {
                if (confirm("Estás a punto de perder el progreso. No se guarda. ¿Seguro que quieres salir?")) {
                  window.history.back();
                }
              }
            }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>

          <Card className="p-8 mb-6 bg-white/95 backdrop-blur shadow-xl border-white/10">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-3">
                {exam.questions.length} Preguntas
              </Badge>

              {!submitted && (
                <div className="fixed top-20 right-4 z-50 animate-in fade-in slide-in-from-top-5">
                  <Card className={`px-4 py-2 border-2 shadow-lg flex items-center gap-2 ${timeLeft < 300
                    ? "bg-red-50 border-red-200 text-red-700 animate-pulse dark:bg-red-950 dark:border-red-900 dark:text-red-100"
                    : "bg-white border-primary/20 text-primary dark:bg-slate-900 dark:border-slate-800"
                    }`}>
                    <span className="text-xl font-mono font-bold">
                      {formatTime(timeLeft)}
                    </span>
                    <span className="text-xs uppercase font-semibold opacity-70">restante</span>
                  </Card>
                </div>
              )}
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {exam.title}
              </h1>
              {exam.description && (
                <p className="text-muted-foreground">{exam.description}</p>
              )}
            </div>

            {!submitted ? (
              <div className="space-y-8">
                {exam.questions.map((question, idx) => (
                  <div key={question.id} className="border-b pb-6 last:border-b-0">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {idx + 1}. {question.questionText}
                    </h3>

                    <div className="space-y-2">
                      {question.options.map((option) => (
                        <label
                          key={option.id}
                          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${answers[question.id] === option.id
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                            }`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={option.id}
                            checked={answers[question.id] === option.id}
                            onChange={() => handleAnswerChange(question.id, option.id)}
                            className="w-4 h-4 text-primary mr-3"
                          />
                          <span className="text-sm text-foreground">
                            {option.optionLabel}. {option.optionText}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex justify-end pt-6">
                  <Button
                    onClick={handleSubmit}
                    disabled={submitMutation.isPending}
                    size="lg"
                    className="min-w-[200px]"
                  >
                    {submitMutation.isPending ? "Enviando..." : "Enviar Examen"}
                  </Button>
                </div>
              </div>
            ) : result ? (
              <div className="space-y-6">
                {user?.role === 'admin' ? (
                  // VISTA PARA ADMINISTRADORES (CON DETALLES Y CALIFICACIÓN)
                  <div className={`p-6 rounded-lg border-2 ${result.passed
                    ? "bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800"
                    : "bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800"
                    }`}>
                    <div className="flex items-center gap-3 mb-4">
                      {result.passed ? (
                        <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                      ) : (
                        <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                      )}
                      <div>
                        <h2 className="text-2xl font-bold">
                          {result.passed ? "¡Aprobado!" : "No aprobado"}
                        </h2>
                        <p className="text-muted-foreground">
                          Calificación: {result.score.toFixed(0)}%
                        </p>
                        {result.passed && (
                          <p className="text-sm text-green-600 dark:text-green-400 mt-1 font-medium">
                            ¡Felicidades! Tus resultados han sido enviados exitosamente.
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">{result.totalQuestions}</div>
                        <div className="text-sm text-muted-foreground">Preguntas</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                          {result.correctAnswers}
                        </div>
                        <div className="text-sm text-muted-foreground">Correctas</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                          {result.totalQuestions - result.correctAnswers}
                        </div>
                        <div className="text-sm text-muted-foreground">Incorrectas</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // VISTA PARA USUARIOS NORMALES (SIN CALIFICACIÓN)
                  <div className="p-6 rounded-lg border-2 bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800 text-center">
                    <div className="flex flex-col items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">
                          ¡Examen Finalizado!
                        </h2>
                        <p className="text-lg text-muted-foreground mt-2">
                          Tus respuestas se han enviado exitosamente.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-center gap-4 pt-6">
                  <Button
                    onClick={() => window.history.back()}
                    variant="outline"
                    size="lg"
                  >
                    Volver al módulo
                  </Button>
                  {/* Mostrar botón de reintentar solo si es admin y falló, o si se desea otra lógica. 
                      Para usuarios normales, ocultamos el estado de aprobación, así que ocultamos reintentar por ahora para ser consistentes con "Respuestas enviadas". */}
                  {user?.role === 'admin' && !result.passed && (
                    <Button
                      onClick={() => {
                        setSubmitted(false);
                        setResult(null);
                        setAnswers({});
                      }}
                      size="lg"
                    >
                      Intentar de nuevo
                    </Button>
                  )}
                </div>
              </div>
            ) : null}
          </Card>
        </main>
      </div>
    </div>
  );
}
