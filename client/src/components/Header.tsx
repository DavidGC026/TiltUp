import { Link } from "wouter";
import { GraduationCap, LogOut } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

export function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group" data-testid="link-home">
              <img
                src="https://grabador.imcyc.com/Imagenes/imcyc/Logo_imcyc.png"
                alt="IMCYC Logo"
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-primary dark:text-white">TiltUp</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Plataforma de Aprendizaje</p>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground mr-4">
              <span className="font-medium">Construcción</span>
              <span className="text-border">•</span>
              <span>Tilt-Up</span>
            </div>
            {user && (
              <Button variant="ghost" size="icon" onClick={() => logout()} title="Cerrar Sesión">
                <LogOut className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
