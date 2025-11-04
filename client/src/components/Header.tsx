import { Link } from "wouter";
import { GraduationCap } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group" data-testid="link-home">
              <div className="bg-primary text-primary-foreground p-2 rounded-md group-hover-elevate group-active-elevate-2 transition-all">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-primary">TiltUp</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Plataforma de Aprendizaje</p>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">Construcción</span>
              <span className="text-border">•</span>
              <span>Tilt-Up</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
