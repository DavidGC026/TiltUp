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
  type GanttData,
  moduleProgress,
  sectionProgress,
  users,
  type User,
  type InsertUser
} from "@shared/schema";
import { eq, and } from "drizzle-orm";
import { initialExams as seededExams, initialQuestions as seededQuestions, initialOptions as seededOptions } from "./data/exams";

// Nota: MemStorage se usa por defecto. Para usar DbStorage, configura DATABASE_URL

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getAllModules(userId?: number): Promise<Module[]>;
  getModuleById(id: string, userId?: number): Promise<Module | undefined>;
  updateModuleProgress(userId: number, moduleId: string, data: UpdateModuleProgress): Promise<Module | undefined>;
  markModuleComplete(userId: number, moduleId: string, data: MarkModuleComplete): Promise<Module | undefined>;
  getSectionsByModuleId(moduleId: string, userId?: number): Promise<Section[]>;
  markSectionComplete(userId: number, sectionId: string): Promise<Section | undefined>;
  getExamBySectionId(sectionId: string): Promise<ExamWithQuestions | undefined>;
  submitExam(userId: number, examId: string, submission: ExamSubmission): Promise<ExamResult>;
  getGanttCtx(userId: number): Promise<GanttData | undefined>;
  saveGanttCtx(userId: number, data: GanttData): Promise<void>;
}

export class MemStorage implements IStorage {
  private modules: Map<string, Module>;
  private sections: Map<string, Section>;
  private exams: Map<string, Exam>;
  private examQuestions: Map<string, ExamQuestion>;
  private examQuestionOptions: Map<string, ExamQuestionOption>;
  private ganttData: Map<number, GanttData>;

  constructor() {
    this.modules = new Map();
    this.sections = new Map();
    this.exams = new Map();
    this.examQuestions = new Map();
    this.examQuestionOptions = new Map();
    this.ganttData = new Map();
    this.initializeModules();
    this.initializeSections();
    this.initializeExams();
  }

  // Basic implementation to satisfy interface - not fully user-specific in MemStorage
  async getUser(id: number): Promise<User | undefined> { return undefined; }
  async getUserByUsername(username: string): Promise<User | undefined> { return undefined; }
  async createUser(user: InsertUser): Promise<User> { throw new Error("Not implemented in MemStorage"); }

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
    // Populate Exams
    seededExams.forEach((examData) => {
      const exam: Exam = {
        id: examData.id,
        sectionId: examData.sectionId,
        title: examData.title,
        description: examData.description
      };
      this.exams.set(exam.id, exam);
    });

    // Populate Questions
    seededQuestions.forEach((qData) => {
      const question: ExamQuestion = {
        id: qData.id,
        examId: qData.examId,
        questionNumber: qData.questionNumber,
        questionText: qData.questionText
      };
      this.examQuestions.set(question.id, question);
    });

    // Populate Options
    seededOptions.forEach((oData) => {
      const option: ExamQuestionOption = {
        id: oData.id,
        questionId: oData.questionId,
        isCorrect: oData.isCorrect,
        optionLabel: oData.optionLabel,
        optionText: oData.optionText
      };
      this.examQuestionOptions.set(option.id, option);
    });
  }

  async getAllModules(userId?: number): Promise<Module[]> {
    return Array.from(this.modules.values()).sort((a, b) => a.number - b.number);
  }

  async getModuleById(id: string, userId?: number): Promise<Module | undefined> {
    return this.modules.get(id);
  }

  async updateModuleProgress(userId: number, moduleId: string, data: UpdateModuleProgress): Promise<Module | undefined> {
    const module = this.modules.get(moduleId);
    if (!module) return undefined;
    const updatedModule = { ...module, progress: data.progress };
    this.modules.set(moduleId, updatedModule);
    return updatedModule;
  }

  async markModuleComplete(userId: number, moduleId: string, data: MarkModuleComplete): Promise<Module | undefined> {
    const module = this.modules.get(moduleId);
    if (!module) return undefined;
    const updatedModule = { ...module, completed: data.completed, progress: data.completed ? 100 : module.progress };
    this.modules.set(moduleId, updatedModule);
    return updatedModule;
  }

  async getSectionsByModuleId(moduleId: string, userId?: number): Promise<Section[]> {
    return Array.from(this.sections.values()).filter(s => s.moduleId === moduleId).sort((a, b) => a.order - b.order);
  }

  async markSectionComplete(userId: number, sectionId: string): Promise<Section | undefined> {
    const section = this.sections.get(sectionId);
    if (!section) return undefined;
    const updated = { ...section, completed: true };
    this.sections.set(sectionId, updated);
    return updated;
  }

  async getExamBySectionId(sectionId: string): Promise<ExamWithQuestions | undefined> {
    // Buscar el examen por sectionId
    const exam = Array.from(this.exams.values()).find(e => e.sectionId === sectionId);
    if (!exam) {
      return undefined;
    }

    // Obtener todas las preguntas del examen
    const allQuestions = Array.from(this.examQuestions.values())
      .filter(q => q.examId === exam.id);

    // Seleccionar 30 preguntas aleatorias (o todas si hay menos de 30)
    // Fisher-Yates Shuffle para aleatoriedad de alta calidad
    const shuffled = [...allQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    // Tomar las primeras 30
    const selectedQuestions = shuffled.slice(0, 30);

    // Opcional: Reordenar por questionNumber original si se desea mantener algo de orden, 
    // pero usualmente en exámenes aleatorios el orden también es aleatorio.
    // Lo dejaremos en orden aleatorio.

    // Para cada pregunta, obtener sus opciones
    const questionsWithOptions = selectedQuestions.map(question => {
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
      attemptId: Date.now().toString(), // Identificador único para este intento generado
      questions: questionsWithOptions,
    };
  }

  async submitExam(userId: number, examId: string, submission: ExamSubmission): Promise<ExamResult> {
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

  async getGanttCtx(userId: number): Promise<GanttData | undefined> {
    return this.ganttData.get(userId);
  }

  async saveGanttCtx(userId: number, data: GanttData): Promise<void> {
    this.ganttData.set(userId, data);
  }
}

import { db } from "./db";
import { asc } from "drizzle-orm";

export class DbStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [result] = await db.insert(users).values(insertUser);
    const [user] = await db.select().from(users).where(eq(users.id, result.insertId));
    return user!;
  }

  async getAllModules(userId?: number): Promise<Module[]> {
    const allModules = await db.select().from(modules).orderBy(modules.number);

    if (!userId) {
      return allModules;
    }

    const progressList = await db.select().from(moduleProgress).where(eq(moduleProgress.userId, userId));

    return allModules.map(m => {
      const p = progressList.find(mq => mq.moduleId === m.id);
      return {
        ...m,
        progress: p ? p.progress : 0,
        completed: p ? p.completed : false
      };
    });
  }

  async getModuleById(id: string, userId?: number): Promise<Module | undefined> {
    const [module] = await db.select().from(modules).where(eq(modules.id, id));
    if (!module) return undefined;

    if (userId) {
      const [p] = await db.select().from(moduleProgress).where(and(eq(moduleProgress.userId, userId), eq(moduleProgress.moduleId, id)));
      if (p) {
        return { ...module, progress: p.progress, completed: p.completed };
      }
    }
    return module;
  }

  async updateModuleProgress(userId: number, moduleId: string, data: UpdateModuleProgress): Promise<Module | undefined> {
    const [existing] = await db.select().from(moduleProgress).where(and(eq(moduleProgress.userId, userId), eq(moduleProgress.moduleId, moduleId)));

    if (existing) {
      await db.update(moduleProgress)
        .set({ progress: data.progress, updatedAt: new Date() })
        .where(eq(moduleProgress.id, existing.id));
    } else {
      await db.insert(moduleProgress).values({
        userId,
        moduleId,
        progress: data.progress,
        completed: false
      });
    }

    return this.getModuleById(moduleId, userId);
  }

  async markModuleComplete(userId: number, moduleId: string, data: MarkModuleComplete): Promise<Module | undefined> {
    const [existing] = await db.select().from(moduleProgress).where(and(eq(moduleProgress.userId, userId), eq(moduleProgress.moduleId, moduleId)));

    // Calculate new progress: if completed=true -> 100, else keep existing or 0
    const progress = data.completed ? 100 : (existing ? existing.progress : 0);

    if (existing) {
      await db.update(moduleProgress)
        .set({ completed: data.completed, progress, updatedAt: new Date() })
        .where(eq(moduleProgress.id, existing.id));
    } else {
      await db.insert(moduleProgress).values({
        userId,
        moduleId,
        completed: data.completed,
        progress
      });
    }
    return this.getModuleById(moduleId, userId);
  }

  async getSectionsByModuleId(moduleId: string, userId?: number): Promise<Section[]> {
    const moduleSections = await db.select().from(sections)
      .where(eq(sections.moduleId, moduleId))
      .orderBy(sections.order);

    if (!userId) return moduleSections;

    const progressList = await db.select().from(sectionProgress).where(eq(sectionProgress.userId, userId));

    return moduleSections.map(s => {
      const p = progressList.find(sp => sp.sectionId === s.id);
      return {
        ...s,
        completed: p ? p.completed : false
      };
    });
  }

  async markSectionComplete(userId: number, sectionId: string): Promise<Section | undefined> {
    const [existing] = await db.select().from(sectionProgress).where(and(eq(sectionProgress.userId, userId), eq(sectionProgress.sectionId, sectionId)));

    if (existing) {
      await db.update(sectionProgress)
        .set({ completed: true, updatedAt: new Date() })
        .where(eq(sectionProgress.id, existing.id));
    } else {
      await db.insert(sectionProgress).values({
        userId,
        sectionId,
        completed: true
      });
    }

    // Return the section (locally updated to true)
    const [section] = await db.select().from(sections).where(eq(sections.id, sectionId));
    return section ? { ...section, completed: true } : undefined;
  }

  async getExamBySectionId(sectionId: string): Promise<ExamWithQuestions | undefined> {
    // 1. Obtener el examen
    const examList = await db.select().from(exams).where(eq(exams.sectionId, sectionId));
    const exam = examList[0];
    if (!exam) return undefined;

    // 2. Obtener preguntas
    const questions = await db.select().from(examQuestions).where(eq(examQuestions.examId, exam.id));

    // 3. Obtener opciones para todas las preguntas
    const allOptions = await db.select().from(examQuestionOptions);

    // 4. Armar la estructura
    const questionsWithOpts = questions.map(q => {
      const opts = allOptions.filter(o => o.questionId === q.id);
      return { ...q, options: opts };
    });

    // 5. Randomizar si es necesario (copiado de MemStorage logic)
    const shuffled = [...questionsWithOpts];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const selectedQuestions = shuffled.slice(0, 30);

    return {
      ...exam,
      attemptId: Date.now().toString(),
      questions: selectedQuestions
    };
  }

  async submitExam(userId: number, examId: string, submission: ExamSubmission): Promise<ExamResult> {
    // Nota: La lógica de calificación es idéntica a MemStorage, 
    // pero consultando los datos de la DB.

    const examList = await db.select().from(exams).where(eq(exams.id, examId));
    const exam = examList[0];
    if (!exam) throw new Error("Examen no encontrado");

    const questions = await db.select().from(examQuestions).where(eq(examQuestions.examId, examId));
    const allOptions = await db.select().from(examQuestionOptions); // Podríamos filtrar por questionIds

    let correctAnswers = 0;
    const answers = [];

    for (const question of questions) {
      const selectedOptionId = submission.answers[question.id];
      if (!selectedOptionId) continue;

      const correctOption = allOptions.find(o => o.questionId === question.id && o.isCorrect);
      const isCorrect = selectedOptionId === correctOption?.id;

      if (isCorrect) correctAnswers++;

      answers.push({
        questionId: question.id,
        selectedOptionId,
        correctOptionId: correctOption?.id || "",
        isCorrect,
      });
    }

    const totalQuestions = questions.length;
    const score = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    const passed = score >= 70;

    // If passed, mark section as complete for user
    if (passed) {
      await this.markSectionComplete(userId, exam.sectionId);
    }

    return {
      totalQuestions,
      correctAnswers,
      score,
      passed,
      answers,
    };
  }

  async getGanttCtx(userId: number): Promise<GanttData | undefined> {
    // Implementación pendiente
    return undefined;
  }

  async saveGanttCtx(userId: number, data: GanttData): Promise<void> {
    // Implementación pendiente
  }
}

export const storage = new DbStorage();
