import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/context/AuthContext";
import { Link, useLocation } from "wouter";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Loader2, ArrowLeft, Eye, XCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface ExamResultDetail {
    questionId: string;
    selectedOptionId: string;
    correctOptionId: string;
    isCorrect: boolean;
}

interface AdminResult {
    user_id: number;
    username: string;
    result_id: number;
    exam_id: string;
    exam_title: string;
    attempt_id: string;
    score: number;
    passed: boolean;
    created_at: string;
    details: ExamResultDetail[];
}

export default function AdminDashboard() {
    const { user, loading } = useAuth();
    const [, setLocation] = useLocation();

    const { data: results, isLoading } = useQuery<AdminResult[]>({
        queryKey: ["/api/admin_results"],
        enabled: !!user && user.role === "admin",
    });

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!user || user.role !== "admin") {
        // Redirect non-admins
        setLocation("/");
        return null;
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Panel de Administración</h1>
                    <Link href="/">
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver al Inicio
                        </Button>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Resultados de Exámenes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {isLoading ? (
                            <div className="flex justify-center p-8">
                                <Loader2 className="h-8 w-8 animate-spin" />
                            </div>
                        ) : results && results.length > 0 ? (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Usuario</TableHead>
                                        <TableHead>Examen</TableHead>
                                        <TableHead>Fecha</TableHead>
                                        <TableHead>Calificación</TableHead>
                                        <TableHead>Estado</TableHead>
                                        <TableHead>Detalles</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {results.map((result) => (
                                        <TableRow key={result.result_id}>
                                            <TableCell className="font-medium">{result.username}</TableCell>
                                            <TableCell>{result.exam_title}</TableCell>
                                            <TableCell>{new Date(result.created_at).toLocaleString()}</TableCell>
                                            <TableCell>{result.score.toFixed(1)}%</TableCell>
                                            <TableCell>
                                                <Badge variant={result.passed ? "default" : "destructive"}>
                                                    {result.passed ? "Aprobado" : "Reprobado"}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <DetailsDialog result={result} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        ) : (
                            <div className="text-center py-8 text-muted-foreground">
                                No hay resultados registrados aún.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}

function DetailsDialog({ result }: { result: AdminResult }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    Ver
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Detalles del Intento - {result.username}</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Examen</p>
                        <p>{result.exam_title}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Fecha</p>
                        <p>{new Date(result.created_at).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Calificación</p>
                        <p className="text-xl font-bold">{result.score.toFixed(1)}%</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-muted-foreground">Estado</p>
                        <Badge variant={result.passed ? "default" : "destructive"}>
                            {result.passed ? "Aprobado" : "Reprobado"}
                        </Badge>
                    </div>
                </div>

                <div className="border rounded-md p-4">
                    <h3 className="text-md font-semibold mb-2">Respuestas ({result.details.length})</h3>
                    <div className="space-y-2">
                        {result.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm border-b pb-2 last:border-0">
                                {detail.isCorrect ? (
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                                ) : (
                                    <XCircle className="h-4 w-4 text-red-500 mt-0.5" />
                                )}
                                <div>
                                    <p className="font-medium">Pregunta ID: {detail.questionId}</p>
                                    <p className="text-muted-foreground">Seleccionada: {detail.selectedOptionId}</p>
                                    {!detail.isCorrect && (
                                        <p className="text-green-600">Correcta: {detail.correctOptionId}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
