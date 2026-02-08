import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

export default function LoginPage() {
    const [, setLocation] = useLocation();
    const { login, user, loading: authLoading } = useAuth();

    // Redirect if already logged in
    useEffect(() => {
        if (user && !authLoading) {
            setLocation("/");
        }
    }, [user, authLoading, setLocation]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await login(email, password);
            setLocation("/");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Ocurrió un error inesperado");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex bg-background">
            {/* Sección Izquierda - Imagen y Branding (Desktop) */}
            <div className="hidden lg:flex w-1/2 relative bg-black overflow-hidden">
                {/* Imagen de fondo */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-105"
                    style={{
                        backgroundImage: "url('/login-bg.png')",
                        opacity: 0.6
                    }}
                />

                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                {/* Contenido flotante */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between p-12 text-white">
                    <div className="flex items-center gap-3">
                        <img
                            src="https://grabador.imcyc.com/Imagenes/imcyc/Logo_imcyc.png"
                            alt="IMCYC Logo"
                            className="h-16 w-auto object-contain bg-white/10 p-2 rounded-lg backdrop-blur-sm"
                        />
                        <div>
                            <h2 className="text-xl font-bold tracking-tight text-white">TiltUp Learn</h2>
                            <p className="text-sm text-gray-300">Plataforma Educativa</p>
                        </div>
                    </div>

                    <div className="space-y-6 max-w-lg mb-12">
                        <h1 className="text-5xl font-bold leading-tight">
                            Construyendo el futuro, <br />
                            <span className="text-[#0073a5]">panel a panel.</span>
                        </h1>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Accede a la capacitación más completa sobre el sistema constructivo Tilt-Up.
                            Domina las técnicas, normativas y procesos de vanguardia.
                        </p>

                        <div className="flex flex-col gap-3 mt-8">
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-[#0073a5]" />
                                <span>Contenido actualizado 2024</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-[#0073a5]" />
                                <span>Certificación profesional</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-[#0073a5]" />
                                <span>Acceso multiplataforma</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-gray-400">
                        © 2025 IMCYC. Todos los derechos reservados.
                    </div>
                </div>
            </div>

            {/* Sección Derecha - Formulario de Login */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative">
                {/* Decoración de fondo móvil */}
                <div className="absolute inset-0 lg:hidden z-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/TiltUp/login-bg.png')" }} />
                    <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
                </div>

                <div className="w-full max-w-[420px] relative z-10">
                    <div className="text-center mb-8 lg:text-left">
                        <div className="inline-flex lg:hidden items-center justify-center mb-6">
                            <img
                                src="https://grabador.imcyc.com/Imagenes/imcyc/Logo_imcyc.png"
                                alt="IMCYC Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-2">
                            ¡Bienvenido de nuevo!
                        </h2>
                        <p className="text-muted-foreground">
                            Ingresa tus credenciales para acceder a tu cuenta.
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-4 border border-red-200">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="email">Usuario</Label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="nombre.usuario"
                                    className="pl-10 h-11"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Contraseña</Label>
                                <Link href="/forgot-password">
                                    <span className="text-sm font-medium text-primary hover:underline cursor-pointer">
                                        ¿Olvidaste tu contraseña?
                                    </span>
                                </Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="pl-10 pr-10 h-11"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground focus:outline-none"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember" />
                            <label
                                htmlFor="remember"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                            >
                                Mantener sesión iniciada
                            </label>
                        </div>

                        <Button type="submit" className="w-full h-11 text-base shadow-lg hover:shadow-primary/25 transition-all" disabled={loading}>
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Iniciando sesión...</span>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center gap-2">
                                    <span>Iniciar Sesión</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            )}
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t text-center space-y-4">
                        <div className="text-sm text-muted-foreground">
                            ¿No tienes una cuenta? <br className="sm:hidden" />
                            <button className="font-semibold text-primary hover:underline ml-1">
                                Contactar a administración
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
