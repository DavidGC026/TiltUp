import { useState } from "react";
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

export default function ExamPage() {
  const [, params] = useRoute("/examen/:sectionId");
  const sectionId = params?.sectionId;
  const { toast } = useToast();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);

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
      const response = await apiRequest("POST", `/TiltUp/api/exam.php`, submission);
      return await response.json() as ExamResult;
    },
    onSuccess: (data) => {
      setResult(data);
      setSubmitted(true);

      // Si aprobó, el backend marca la sección como completada. Refrescar datos.
      if (data.passed) {
        queryClient.invalidateQueries();
      }

      toast({
        title: data.passed ? "¡Examen aprobado!" : "Examen no aprobado",
        description: data.passed
          ? `Obtuviste ${data.score.toFixed(0)}% de calificación.`
          : `Obtuviste ${data.score.toFixed(0)}%. Necesitas al menos 70% para aprobar.`,
        variant: data.passed ? "default" : "destructive",
      });
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
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>

          <Card className="p-8 mb-6 bg-white/95 backdrop-blur shadow-xl border-white/10">
            <div className="mb-6">
              <Badge variant="secondary" className="mb-3">
                {exam.questions.length} Preguntas
              </Badge>
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

                <div className="flex justify-center gap-4 pt-6">
                  <Button
                    onClick={() => window.history.back()}
                    variant="outline"
                    size="lg"
                  >
                    Volver al módulo
                  </Button>
                  {!result.passed && (
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
