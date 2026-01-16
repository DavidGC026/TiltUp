import { 
  type Module, 
  type InsertModule, 
  type UpdateModuleProgress, 
  type MarkModuleComplete, 
  modules, 
  type Section, 
  sections,
  type Exam,
  type ExamQuestion,
  type ExamQuestionOption,
  type ExamWithQuestions,
  type ExamSubmission,
  type ExamResult,
  exams,
  examQuestions,
  examQuestionOptions,
} from "@shared/schema";
import { eq } from "drizzle-orm";

// Nota: MemStorage se usa por defecto. Para usar DbStorage, configura DATABASE_URL

export interface IStorage {
  getAllModules(): Promise<Module[]>;
  getModuleById(id: string): Promise<Module | undefined>;
  updateModuleProgress(id: string, data: UpdateModuleProgress): Promise<Module | undefined>;
  markModuleComplete(id: string, data: MarkModuleComplete): Promise<Module | undefined>;
  getSectionsByModuleId(moduleId: string): Promise<Section[]>;
  markSectionComplete(sectionId: string): Promise<Section | undefined>;
  getExamBySectionId(sectionId: string): Promise<ExamWithQuestions | undefined>;
  submitExam(examId: string, submission: ExamSubmission): Promise<ExamResult>;
}

export class MemStorage implements IStorage {
  private modules: Map<string, Module>;
  private sections: Map<string, Section>;
  private exams: Map<string, Exam>;
  private examQuestions: Map<string, ExamQuestion>;
  private examQuestionOptions: Map<string, ExamQuestionOption>;

  constructor() {
    this.modules = new Map();
    this.sections = new Map();
    this.exams = new Map();
    this.examQuestions = new Map();
    this.examQuestionOptions = new Map();
    this.initializeModules();
    this.initializeSections();
    this.initializeExams();
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

  private initializeExams() {
    // Examen de la sección sec-1-1 (Evaluación Diagnóstico del Módulo 1)
    const exam1: Exam = {
      id: "exam-sec-1-1",
      sectionId: "sec-1-1",
      title: "Examen Diagnóstico",
      description: "Preguntas y opciones importadas desde EXAMEN DIAGNÓSTICO.xlsx",
    };
    this.exams.set(exam1.id, exam1);

    // Cargar preguntas del SQL - primeras 10 preguntas como ejemplo
    const questionsData = [
      { id: "exam-sec-1-1-q001", number: 1, text: "¿Cómo se define el método de Tilt-Up?", options: [
        { id: "exam-sec-1-1-q001-A", label: "A", text: "Como una técnica de construcción metálica prefabricada.", correct: false },
        { id: "exam-sec-1-1-q001-B", label: "B", text: "Como una técnica para colar elementos de concreto verticalmente.", correct: false },
        { id: "exam-sec-1-1-q001-C", label: "C", text: "Como una técnica de ensamblaje de paneles transportados por carretera.", correct: false },
        { id: "exam-sec-1-1-q001-D", label: "D", text: "Como una técnica para colar elementos de concreto horizontalmente en el sitio y luego inclinarlos a su posición final.", correct: true },
      ]},
      { id: "exam-sec-1-1-q002", number: 2, text: "¿Cuál de las siguientes es una característica de los paneles de Tilt-Up?", options: [
        { id: "exam-sec-1-1-q002-A", label: "A", text: "No transfieren las cargas a la cimentación.", correct: false },
        { id: "exam-sec-1-1-q002-B", label: "B", text: "Se construyen antes del diafragma de construcción estructural.", correct: false },
        { id: "exam-sec-1-1-q002-C", label: "C", text: "Generalmente se manipulan múltiples veces antes de su instalación.", correct: false },
        { id: "exam-sec-1-1-q002-D", label: "D", text: "Son de tamaño y peso que sólo permiten su construcción en el sitio.", correct: true },
      ]},
      { id: "exam-sec-1-1-q003", number: 3, text: "La____________ y__________ son ventajas del método Tilt-Up.", options: [
        { id: "exam-sec-1-1-q003-A", label: "A", text: "Sustentabilidad y flexibilidad", correct: true },
        { id: "exam-sec-1-1-q003-B", label: "B", text: "Resistencia al fuego y paisajismo", correct: false },
        { id: "exam-sec-1-1-q003-C", label: "C", text: "Sustentabilidad y paisajismo", correct: false },
        { id: "exam-sec-1-1-q003-D", label: "D", text: "Resistencia la fuego y flexibilidad", correct: false },
      ]},
      { id: "exam-sec-1-1-q004", number: 4, text: "Supera cualquier otra opción que ofrecen mampostería y madera", options: [
        { id: "exam-sec-1-1-q004-A", label: "A", text: "VERDADERO", correct: true },
        { id: "exam-sec-1-1-q004-B", label: "B", text: "FALSO", correct: false },
      ]},
      { id: "exam-sec-1-1-q005", number: 5, text: "El mayor porcentaje del uso de este método constructivo se encuentra en el sector industrial", options: [
        { id: "exam-sec-1-1-q005-A", label: "A", text: "VERDADERO", correct: true },
        { id: "exam-sec-1-1-q005-B", label: "B", text: "FALSO", correct: false },
      ]},
    ];

    questionsData.forEach((qData) => {
      const question: ExamQuestion = {
        id: qData.id,
        examId: exam1.id,
        questionNumber: qData.number,
        questionText: qData.text,
      };
      this.examQuestions.set(question.id, question);

      qData.options.forEach((opt) => {
        const option: ExamQuestionOption = {
          id: opt.id,
          questionId: question.id,
          optionLabel: opt.label,
          optionText: opt.text,
          isCorrect: opt.correct,
        };
        this.examQuestionOptions.set(option.id, option);
      });
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

  async getExamBySectionId(sectionId: string): Promise<ExamWithQuestions | undefined> {
    // Buscar el examen por sectionId
    const exam = Array.from(this.exams.values()).find(e => e.sectionId === sectionId);
    if (!exam) {
      return undefined;
    }

    // Obtener todas las preguntas del examen
    const questions = Array.from(this.examQuestions.values())
      .filter(q => q.examId === exam.id)
      .sort((a, b) => a.questionNumber - b.questionNumber);

    // Para cada pregunta, obtener sus opciones
    const questionsWithOptions = questions.map(question => {
      const options = Array.from(this.examQuestionOptions.values())
        .filter(o => o.questionId === question.id)
        .sort((a, b) => a.optionLabel.localeCompare(b.optionLabel));
      
      return {
        ...question,
        options,
      };
    });

    return {
      ...exam,
      questions: questionsWithOptions,
    };
  }

  async submitExam(examId: string, submission: ExamSubmission): Promise<ExamResult> {
    const exam = this.exams.get(examId);
    if (!exam) {
      throw new Error("Examen no encontrado");
    }

    // Obtener todas las preguntas del examen
    const questions = Array.from(this.examQuestions.values())
      .filter(q => q.examId === examId);

    let correctAnswers = 0;
    const answers = [];

    for (const question of questions) {
      const selectedOptionId = submission.answers[question.id];
      if (!selectedOptionId) {
        continue;
      }

      // Encontrar la opción correcta
      const correctOption = Array.from(this.examQuestionOptions.values())
        .find(o => o.questionId === question.id && o.isCorrect);

      const isCorrect = selectedOptionId === correctOption?.id;
      if (isCorrect) {
        correctAnswers++;
      }

      answers.push({
        questionId: question.id,
        selectedOptionId,
        correctOptionId: correctOption?.id || "",
        isCorrect,
      });
    }

    const totalQuestions = questions.length;
    const score = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    const passed = score >= 70; // 70% para aprobar

    return {
      totalQuestions,
      correctAnswers,
      score,
      passed,
      answers,
    };
  }
}

export class DbStorage implements IStorage {
  // TODO: Importar y configurar db cuando se conecte a la base de datos
  async getAllModules(): Promise<Module[]> {
    throw new Error("Método no implementado para DbStorage");
  }

  async getModuleById(id: string): Promise<Module | undefined> {
    throw new Error("Método no implementado para DbStorage");
  }

  async updateModuleProgress(id: string, data: UpdateModuleProgress): Promise<Module | undefined> {
    throw new Error("Método no implementado para DbStorage");
  }

  async markModuleComplete(id: string, data: MarkModuleComplete): Promise<Module | undefined> {
    throw new Error("Método no implementado para DbStorage");
  }

  async getSectionsByModuleId(moduleId: string): Promise<Section[]> {
    throw new Error("Método no implementado para DbStorage");
  }

  async markSectionComplete(sectionId: string): Promise<Section | undefined> {
    throw new Error("Método no implementado para DbStorage");
  }

  async getExamBySectionId(sectionId: string): Promise<ExamWithQuestions | undefined> {
    // TODO: Implementar con Drizzle ORM cuando se conecte a la DB
    throw new Error("Método no implementado para DbStorage");
  }

  async submitExam(examId: string, submission: ExamSubmission): Promise<ExamResult> {
    // TODO: Implementar con Drizzle ORM cuando se conecte a la DB
    throw new Error("Método no implementado para DbStorage");
  }
}

export const storage = new MemStorage();
