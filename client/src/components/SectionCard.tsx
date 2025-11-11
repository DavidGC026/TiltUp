import { CheckCircle2, HelpCircle, BookOpen, PieChart, BarChart3, ClipboardCheck, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import type { Section } from "@shared/schema";

const sectionIcons = {
  diagnostic: HelpCircle,
  presentation: BookOpen,
  infographic: PieChart,
  data: BarChart3,
  evaluation: ClipboardCheck,
};

const sectionColors = {
  diagnostic: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
  presentation: "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800",
  infographic: "bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800",
  data: "bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800",
  evaluation: "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800",
};

const sectionBadgeColors = {
  diagnostic: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  presentation: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  infographic: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  data: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  evaluation: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
};

interface SectionCardProps {
  section: Section;
  onComplete: (sectionId: string) => void;
  isLoading?: boolean;
}

export function SectionCard({ section, onComplete, isLoading = false }: SectionCardProps) {
  const Icon = sectionIcons[section.type];
  const colorClass = sectionColors[section.type];
  const badgeColorClass = sectionBadgeColors[section.type];
  
  if (section.pdfUrl) {
    console.log(`SectionCard "${section.title}" - pdfUrl original:`, section.pdfUrl);
    const cleanPath = section.pdfUrl.replace(/^\/TiltUp\//, '').replace(/^\//, '');
    const linkHref = `${cleanPath}`;
    console.log(`SectionCard "${section.title}" - link href:`, linkHref);
  }

  const displayType = {
    diagnostic: "Diagnóstico",
    presentation: "Presentación",
    infographic: "Infografía",
    data: "Dato en Concreto",
    evaluation: "Evaluación",
  }[section.type];

  return (
    <Card className={`border-2 ${colorClass} p-6 hover:shadow-lg transition-shadow`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <div className="bg-white dark:bg-slate-900 p-3 rounded-lg mt-1">
            <Icon className="w-6 h-6 text-current" />
          </div>
          <div>
            <Badge className={`${badgeColorClass} mb-2`}>{displayType}</Badge>
            <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
          </div>
        </div>
        {section.completed && (
          <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4">{section.content}</p>

      <div className="space-y-2">
        {section.pdfUrl && (
          <Link
            href={`/pdf?url=${encodeURIComponent(section.pdfUrl.replace(/^\/TiltUp\//, ''))}&title=${encodeURIComponent(section.title)}`}
            className="w-full inline-block"
          >
            <Button
              className="w-full"
              variant="outline"
            >
              <FileText className="w-4 h-4 mr-2" />
              Ver PDF
            </Button>
          </Link>
        )}

        {!section.completed && (
          <Button
            onClick={() => onComplete(section.id)}
            disabled={isLoading}
            className="w-full"
            variant="default"
          >
            Completar sección
          </Button>
        )}
      </div>

      {section.completed && (
        <div className="flex items-center justify-center py-2 px-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-md text-sm font-medium">
          <CheckCircle2 className="w-4 h-4 mr-2" />
          Completado
        </div>
      )}
    </Card>
  );
}
