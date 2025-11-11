import { type Module, type InsertModule, type UpdateModuleProgress, type MarkModuleComplete, modules, type Section, sections } from "@shared/schema";
import { eq } from "drizzle-orm";

// Nota: MemStorage se usa por defecto. Para usar DbStorage, configura DATABASE_URL

export interface IStorage {
  getAllModules(): Promise<Module[]>;
  getModuleById(id: string): Promise<Module | undefined>;
  updateModuleProgress(id: string, data: UpdateModuleProgress): Promise<Module | undefined>;
  markModuleComplete(id: string, data: MarkModuleComplete): Promise<Module | undefined>;
  getSectionsByModuleId(moduleId: string): Promise<Section[]>;
  markSectionComplete(sectionId: string): Promise<Section | undefined>;
}

export class MemStorage implements IStorage {
  private modules: Map<string, Module>;
  private sections: Map<string, Section>;

  constructor() {
    this.modules = new Map();
    this.sections = new Map();
    this.initializeModules();
    this.initializeSections();
  }

  private initializeModules() {
    const initialModules: Module[] = [
      {
        id: "modulo-1",
        number: 1,
        title: "Planificación y Diseño",
        description: "Fundamentos de la planificación arquitectónica y diseño estructural para proyectos Tilt-Up. Aprende a crear planos técnicos y calcular especificaciones.",
        content: `En este módulo aprenderás los conceptos fundamentales de la planificación y diseño en construcción Tilt-Up:

• Introducción al sistema constructivo Tilt-Up
• Análisis de sitio y condiciones del terreno
• Diseño estructural de paneles prefabricados
• Cálculo de cargas y especificaciones técnicas
• Elaboración de planos arquitectónicos
• Software de diseño asistido por computadora (CAD)
• Normativas y códigos de construcción aplicables
• Coordinación con ingenieros estructurales
• Presupuestación inicial del proyecto

Objetivos de aprendizaje:
- Comprender los principios básicos del diseño Tilt-Up
- Desarrollar habilidades en lectura e interpretación de planos
- Aplicar normativas de construcción vigentes
- Realizar cálculos estructurales básicos

Duración estimada: 8 horas de estudio`,
        imageUrl: "/generated_images/Planning_and_design_module_a2d487e6.png",
        progress: 0,
        completed: false,
      },
      {
        id: "modulo-2",
        number: 2,
        title: "Cimentación y Losas",
        description: "Técnicas de preparación del terreno, construcción de cimientos y losas de concreto. Incluye instalación de acero de refuerzo y procesos de vaciado.",
        content: `Domina las técnicas esenciales de cimentación y construcción de losas:

• Preparación y excavación del terreno
• Diseño y construcción de sistemas de drenaje
• Instalación de mallas de acero de refuerzo
• Cálculo de especificaciones de concreto
• Técnicas de vaciado y nivelación
• Control de calidad del concreto
• Curado adecuado de superficies
• Juntas de construcción y expansión
• Acabados superficiales de losas

Temas especializados:
- Refuerzo estructural con varillas corrugadas
- Sistemas de tensado post-tensionado
- Pruebas de resistencia del concreto
- Prevención de fisuras y agrietamientos
- Impermeabilización de cimientos

Herramientas y equipamiento:
- Mezcladoras de concreto
- Vibradores y alisadoras
- Equipos de medición y nivelación
- Herramientas de corte y doblado de acero

Duración estimada: 10 horas de estudio`,
        imageUrl: "/generated_images/Foundation_and_slabs_module_3a63acb7.png",
        progress: 0,
        completed: false,
      },
      {
        id: "modulo-3",
        number: 3,
        title: "Acabado del Edificio",
        description: "Proceso completo de levantamiento de paneles Tilt-Up, instalación y acabados finales. Aprende sobre grúas, conexiones estructurales y detalles arquitectónicos.",
        content: `Aprende el proceso completo de levantamiento y acabado de estructuras Tilt-Up:

• Preparación de paneles prefabricados
• Técnicas de izado con grúas especializadas
• Sistemas de apuntalamiento temporal
• Conexiones estructurales entre paneles
• Sellado de juntas y acabados
• Instalación de sistemas de fachada
• Acabados arquitectónicos exteriores
• Revestimientos y tratamientos superficiales
• Control de calidad final

Procesos de levantamiento:
- Planificación logística del izado
- Coordinación con operadores de grúa
- Seguridad en operaciones de altura
- Secuencia óptima de instalación
- Ajustes y alineación de paneles

Acabados especializados:
- Texturas arquitectónicas en concreto
- Tratamientos de color y pigmentación
- Aislamiento térmico y acústico
- Sistemas de impermeabilización
- Instalación de ventanas y aberturas

Duración estimada: 12 horas de estudio`,
        imageUrl: "/generated_images/Building_finishing_module_e7bf71f0.png",
        progress: 0,
        completed: false,
      },
      {
        id: "modulo-4",
        number: 4,
        title: "Formatos de Apoyo para Campo",
        description: "Documentación técnica, reportes de obra y formatos de control de calidad. Gestión de proyectos y coordinación de equipos en campo.",
        content: `Domina la documentación y gestión técnica de proyectos Tilt-Up:

• Formatos de control de calidad en obra
• Reportes diarios de avance de construcción
• Documentación de procesos constructivos
• Registros fotográficos y bitácora de obra
• Gestión de recursos y materiales
• Coordinación de equipos multidisciplinarios
• Programación y cronogramas de trabajo
• Control de costos y presupuestos
• Normativas de seguridad industrial

Documentación técnica:
- Formatos de inspección de materiales
- Reportes de pruebas de concreto
- Certificaciones de calidad
- Minutas de reuniones técnicas
- Órdenes de cambio y modificaciones

Gestión de proyecto:
- Metodologías de planificación (CPM, PERT)
- Software de gestión de construcción
- Comunicación con stakeholders
- Resolución de conflictos en obra
- Entrega y cierre de proyectos

Seguridad y cumplimiento:
- Protocolos de seguridad en sitio
- Equipos de protección personal (EPP)
- Procedimientos de emergencia
- Auditorías de seguridad

Duración estimada: 8 horas de estudio`,
        imageUrl: "/generated_images/Field_support_formats_module_4af6fe7b.png",
        progress: 0,
        completed: false,
      },
    ];

    initialModules.forEach((module) => {
      this.modules.set(module.id, module);
    });
  }

  private initializeSections() {
    const initialSections: Section[] = [
      {
        id: "sec-1-1",
        moduleId: "modulo-1",
        type: "diagnostic",
        title: "Evaluación Diagnóstico",
        content: "Prueba de conocimientos previos sobre planificación y diseño Tilt-Up. Evalúa tu nivel inicial.",
        pdfUrl: null,
        order: 1,
        completed: false,
      },
      {
        id: "sec-1-2",
        moduleId: "modulo-1",
        type: "presentation",
        title: "Presentación Ejecutiva",
        content: "Introducción a los conceptos fundamentales del sistema Tilt-Up. Visión general del proceso constructivo.",
        pdfUrl: "/pdfs/modulo1/presentacionejecutiva.pdf",
        order: 2,
        completed: false,
      },
      {
        id: "sec-1-3",
        moduleId: "modulo-1",
        type: "infographic",
        title: "Infografía",
        content: "Representación visual del flujo de diseño y planificación. Diagramas interactivos del proceso.",
        pdfUrl: "/pdfs/modulo1/infografia.pdf",
        order: 3,
        completed: false,
      },
      {
        id: "sec-1-4",
        moduleId: "modulo-1",
        type: "data",
        title: "Dato en Concreto",
        content: "Estadísticas, normas y especificaciones técnicas. Datos reales de proyectos Tilt-Up exitosos.",
        pdfUrl: "/pdfs/modulo1/datoenconcreto.pdf",
        order: 4,
        completed: false,
      },
      {
        id: "sec-1-5",
        moduleId: "modulo-1",
        type: "evaluation",
        title: "Evaluación Final",
        content: "Examen comprensivo para evaluar el dominio de los conceptos del módulo.",
        pdfUrl: null,
        order: 5,
        completed: false,
      },
    ];

    initialSections.forEach((section) => {
      this.sections.set(section.id, section);
    });
  }

  async getAllModules(): Promise<Module[]> {
    return Array.from(this.modules.values()).sort((a, b) => a.number - b.number);
  }

  async getModuleById(id: string): Promise<Module | undefined> {
    return this.modules.get(id);
  }

  async updateModuleProgress(id: string, data: UpdateModuleProgress): Promise<Module | undefined> {
    const module = this.modules.get(id);
    if (!module) {
      return undefined;
    }

    const updatedModule: Module = {
      ...module,
      progress: data.progress,
    };

    this.modules.set(id, updatedModule);
    return updatedModule;
  }

  async markModuleComplete(id: string, data: MarkModuleComplete): Promise<Module | undefined> {
    const module = this.modules.get(id);
    if (!module) {
      return undefined;
    }

    const updatedModule: Module = {
      ...module,
      completed: data.completed,
      progress: data.completed ? 100 : module.progress,
    };

    this.modules.set(id, updatedModule);
    return updatedModule;
  }

  async getSectionsByModuleId(moduleId: string): Promise<Section[]> {
    return Array.from(this.sections.values())
      .filter((s) => s.moduleId === moduleId)
      .sort((a, b) => a.order - b.order);
  }

  async markSectionComplete(sectionId: string): Promise<Section | undefined> {
    const section = this.sections.get(sectionId);
    if (!section) {
      return undefined;
    }

    const updatedSection: Section = {
      ...section,
      completed: true,
    };

    this.sections.set(sectionId, updatedSection);
    return updatedSection;
  }
}

export class DbStorage implements IStorage {
  async getAllModules(): Promise<Module[]> {
    const result = await db.select().from(modules).orderBy(modules.number);
    return result;
  }

  async getModuleById(id: string): Promise<Module | undefined> {
    const result = await db.select().from(modules).where(eq(modules.id, id));
    return result[0];
  }

  async updateModuleProgress(id: string, data: UpdateModuleProgress): Promise<Module | undefined> {
    const result = await db
      .update(modules)
      .set({ progress: data.progress })
      .where(eq(modules.id, id))
      .returning();
    return result[0];
  }

  async markModuleComplete(id: string, data: MarkModuleComplete): Promise<Module | undefined> {
    const result = await db
      .update(modules)
      .set({ 
        completed: data.completed,
        progress: data.completed ? 100 : undefined 
      })
      .where(eq(modules.id, id))
      .returning();
    return result[0];
  }

  async getSectionsByModuleId(moduleId: string): Promise<Section[]> {
    const result = await db.select().from(sections).where(eq(sections.moduleId, moduleId)).orderBy(sections.order);
    return result;
  }

  async markSectionComplete(sectionId: string): Promise<Section | undefined> {
    const result = await db
      .update(sections)
      .set({ completed: true })
      .where(eq(sections.id, sectionId))
      .returning();
    return result[0];
  }
}

export const storage = new MemStorage();
