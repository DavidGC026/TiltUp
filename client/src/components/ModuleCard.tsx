import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "./ProgressBar";
import { CheckCircle2, Lock } from "lucide-react";
import { Link } from "wouter";
import type { Module } from "@shared/schema";

const FALLBACK_MODULE_IMAGE_URL = "https://grabador.imcyc.com/Imagenes/generated_images/Planning_and_design_module_a2d487e6.png";

interface ModuleCardProps {
  module: Module;
  isLocked?: boolean;
}

export function ModuleCard({ module, isLocked = false }: ModuleCardProps) {
  const cardContent = (
    <Card
      className={`overflow-hidden transition-all duration-300 h-full ${isLocked
        ? 'opacity-60 cursor-not-allowed'
        : 'hover-elevate active-elevate-2 cursor-pointer hover:shadow-lg'
        }`}
      data-testid={`card-module-${module.id}`}
    >
      <div className="flex flex-col h-full">
        <div className="relative w-full shrink-0 aspect-video overflow-hidden bg-muted">
          <img
            src={module.imageUrl || FALLBACK_MODULE_IMAGE_URL}
            alt={module.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const img = e.currentTarget;
              img.onerror = null;
              img.src = FALLBACK_MODULE_IMAGE_URL;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute top-4 left-4">
            <Badge
              variant="secondary"
              className="bg-primary text-primary-foreground font-bold px-3 py-1.5 text-sm"
              data-testid={`badge-module-number-${module.id}`}
            >
              MÓDULO {module.number}
            </Badge>
          </div>

          {module.completed && (
            <div className="absolute top-4 right-4">
              <div className="bg-green-600 text-white rounded-full p-1.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
          )}

          {isLocked && (
            <div className="absolute top-4 right-4">
              <div className="bg-gray-600 text-white rounded-full p-1.5">
                <Lock className="w-5 h-5" />
              </div>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col justify-between flex-grow">
          <div>
            <h3
              className="text-2xl font-bold text-foreground mb-3"
              data-testid={`text-module-title-${module.id}`}
            >
              {module.title}
            </h3>
            <p className="text-base text-muted-foreground mb-6 line-clamp-3 md:line-clamp-none">
              {module.description}
            </p>
          </div>

          <div className="mt-auto pt-4 border-t border-border/50">
            <ProgressBar progress={module.progress} className="h-3" />
          </div>
        </div>
      </div>
    </Card>
  );

  if (isLocked) {
    return <div>{cardContent}</div>;
  }

  return (
    <Link href={`/modulo/${module.id}`}>
      {cardContent}
    </Link>
  );
}
