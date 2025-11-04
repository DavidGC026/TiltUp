import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressBar } from "./ProgressBar";
import { CheckCircle2, Lock } from "lucide-react";
import { Link } from "wouter";
import type { Module } from "@shared/schema";

interface ModuleCardProps {
  module: Module;
  isLocked?: boolean;
}

export function ModuleCard({ module, isLocked = false }: ModuleCardProps) {
  const CardWrapper = isLocked ? "div" : Link;
  const cardProps = isLocked ? {} : { href: `/modulo/${module.id}` };

  return (
    <CardWrapper {...cardProps}>
      <Card 
        className={`overflow-hidden transition-all duration-300 ${
          isLocked 
            ? 'opacity-60 cursor-not-allowed' 
            : 'hover-elevate active-elevate-2 cursor-pointer hover:shadow-lg'
        }`}
        data-testid={`card-module-${module.id}`}
      >
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={module.imageUrl}
            alt={module.title}
            className="w-full h-full object-cover"
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

        <div className="p-6">
          <h3 
            className="text-xl font-semibold text-foreground mb-2 line-clamp-2"
            data-testid={`text-module-title-${module.id}`}
          >
            {module.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {module.description}
          </p>
          
          <ProgressBar progress={module.progress} />
        </div>
      </Card>
    </CardWrapper>
  );
}
