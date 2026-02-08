import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

import { useAuth } from "@/context/AuthContext";

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    moduleId: string;
    onPaymentSuccess: () => void;
}

export function PaymentModal({ isOpen, onClose, moduleId, onPaymentSuccess }: PaymentModalProps) {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const { user } = useAuth();

    const paymentMutation = useMutation({
        mutationFn: async () => {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            return apiRequest("POST", "/api/payments", { module_id: moduleId });
        },
        onSuccess: () => {
            toast({
                title: "Pago Exitoso",
                description: "El pago se ha procesado correctamente. Ahora puedes tomar el examen.",
            });
            queryClient.invalidateQueries({ queryKey: ["/api/payments", moduleId] });
            onPaymentSuccess();
            onClose();
        },
        onError: () => {
            toast({
                title: "Error en el pago",
                description: "Hubo un problema al procesar tu pago. Inténtalo de nuevo.",
                variant: "destructive",
            });
        },
    });

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-white text-slate-900 border-none shadow-2xl">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Column: Certificate Image Placeholder */}
                    <div className="w-full md:w-1/3 bg-slate-50 p-6 flex items-center justify-center border-r border-slate-100">
                        {/* Replace with actual image asset if available, using a placeholder for now similar to screenshot */}
                        <div className="relative w-full aspect-[3/4] bg-white shadow-lg p-2 border border-slate-200 flex flex-col items-center text-center">
                            <div className="w-full h-full bg-slate-50 flex flex-col justify-between p-2">
                                <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase mb-2">México</div>
                                <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-2"></div>
                                <div className="text-xs font-serif text-slate-600 mb-1">CERTIFICADO</div>
                                <div className="w-full h-px bg-slate-300 my-2"></div>
                                <div className="text-[8px] text-slate-400">INSTITUTO MEXICANO DEL CEMENTO Y DEL CONCRETO A.C.</div>
                                <div className="mt-auto mb-4 w-12 h-12 bg-slate-800 mx-auto"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Payment Details */}
                    <div className="w-full md:w-2/3 p-8 flex flex-col">
                        <DialogHeader className="mb-6">
                            <DialogTitle className="text-3xl font-light text-slate-700 tracking-tight uppercase">
                                REALICE SU PAGO
                            </DialogTitle>
                        </DialogHeader>

                        <div className="space-y-6 flex-1">
                            {/* Product 1 */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                    PRODUCTO:
                                </label>
                                <div className="bg-slate-100 p-3 rounded-md text-slate-800 font-medium">
                                    CONSTANCIA DE APTITUD IMCYC
                                </div>
                            </div>

                            {/* Price 1 */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                    PRECIO <span className="text-slate-900 font-bold">$1,000.00 + IVA</span>:
                                </label>
                                <Input
                                    readOnly
                                    value="1000"
                                    className="bg-slate-100 border-none text-slate-800 font-medium h-12"
                                />
                            </div>

                            {/* Product 2 (Optional/Future - kept simple for now based on immediate request) */}

                            {/* Payment Methods */}
                            <div className="pt-4 space-y-4">
                                <p className="text-slate-600 mb-2 text-sm font-semibold">Métodos de Pago Disponibles:</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Transferencia */}
                                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
                                        <h4 className="font-bold text-slate-800 mb-2 flex items-center">
                                            <span className="bg-blue-100 text-blue-700 p-1.5 rounded-full mr-2">🏦</span>
                                            Transferencia Bancaria
                                        </h4>
                                        <div className="text-xs text-slate-600 space-y-1">
                                            <p><span className="font-semibold">Banco:</span> BBVA</p>
                                            <p><span className="font-semibold">Cuenta:</span> 0123456789</p>
                                            <p><span className="font-semibold">CLABE:</span> 012345678901234567</p>
                                            <p><span className="font-semibold">Referencia:</span> {user?.username || 'USUARIO'}</p>
                                        </div>
                                    </div>

                                    {/* Efectivo */}
                                    <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 hover:bg-slate-100 transition-colors">
                                        <h4 className="font-bold text-slate-800 mb-2 flex items-center">
                                            <span className="bg-green-100 text-green-700 p-1.5 rounded-full mr-2">💵</span>
                                            Pago en Efectivo
                                        </h4>
                                        <div className="text-xs text-slate-600 space-y-1">
                                            <p>Realiza tu pago en nuestras oficinas o ventanilla bancaria.</p>
                                            <p className="mt-2 text-blue-600 underline cursor-pointer">Ver instrucciones detalladas</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-100 mt-4">
                                    <p className="text-xs text-slate-500 mb-3">
                                        Una vez realizado el pago, por favor reportalo confirmar tu acceso.
                                    </p>
                                    <Button
                                        className="w-full h-10 bg-[#00609C] hover:bg-[#004e80] text-white font-bold rounded-sm uppercase tracking-wider"
                                        onClick={() => paymentMutation.mutate()}
                                        disabled={paymentMutation.isPending}
                                    >
                                        {paymentMutation.isPending ? (
                                            <>
                                                Procesando <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                                            </>
                                        ) : (
                                            "REPORTAR PAGO / CONFIRMAR"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <DialogFooter className="mt-8 sm:justify-start">
                            <Button variant="ghost" className="text-slate-400 hover:text-slate-600" onClick={onClose}>
                                Cerrar / Cancelar
                            </Button>
                        </DialogFooter>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
