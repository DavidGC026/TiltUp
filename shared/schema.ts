import { mysqlTable, mysqlSchema, AnyMySqlColumn, serial, text, varchar, int, boolean, timestamp, json } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const modules = mysqlTable("modules", {
  id: varchar("id", { length: 50 }).primaryKey(),
  number: int("number").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  progress: int("progress").notNull().default(0),
  completed: boolean("completed").notNull().default(false),
});

export const sections = mysqlTable("sections", {
  id: varchar("id", { length: 50 }).primaryKey(),
  moduleId: varchar("module_id", { length: 50 }).notNull().references(() => modules.id),
  type: varchar("type", { length: 50, enum: ["diagnostic", "presentation", "infographic", "data", "evaluation"] }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  pdfUrl: varchar("pdf_url", { length: 255 }),
  order: int("order").notNull(),
  completed: boolean("completed").notNull().default(false),
});

export type Section = typeof sections.$inferSelect;
export type InsertSection = typeof sections.$inferInsert;

export const insertModuleSchema = createInsertSchema(modules).omit({
  id: true,
});

export const updateModuleProgressSchema = z.object({
  progress: z.number().min(0).max(100),
});

export const markModuleCompleteSchema = z.object({
  completed: z.boolean(),
});

export type InsertModule = z.infer<typeof insertModuleSchema>;
export type Module = typeof modules.$inferSelect;
export type UpdateModuleProgress = z.infer<typeof updateModuleProgressSchema>;
export type MarkModuleComplete = z.infer<typeof markModuleCompleteSchema>;

// Tablas de exámenes
export const exams = mysqlTable("exams", {
  id: varchar("id", { length: 50 }).primaryKey(),
  sectionId: varchar("section_id", { length: 50 }).notNull().references(() => sections.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
});

export const examQuestions = mysqlTable("exam_questions", {
  id: varchar("id", { length: 80 }).primaryKey(),
  examId: varchar("exam_id", { length: 50 }).notNull().references(() => exams.id, { onDelete: "cascade" }),
  questionNumber: int("question_number").notNull(),
  questionText: text("question_text").notNull(),
});

export const examQuestionOptions = mysqlTable("exam_question_options", {
  id: varchar("id", { length: 90 }).primaryKey(),
  questionId: varchar("question_id", { length: 80 }).notNull().references(() => examQuestions.id, { onDelete: "cascade" }),
  optionLabel: varchar("option_label", { length: 1 }).notNull(),
  optionText: text("option_text").notNull(),
  isCorrect: boolean("is_correct").notNull().default(false),
});

export type Exam = typeof exams.$inferSelect;
export type ExamQuestion = typeof examQuestions.$inferSelect;
export type ExamQuestionOption = typeof examQuestionOptions.$inferSelect;

export interface ExamWithQuestions extends Exam {
  // Identificador del intento (set aleatorio de preguntas)
  attemptId?: string;
  questions: (ExamQuestion & { options: ExamQuestionOption[] })[];
}

export interface ExamSubmission {
  examId: string;
  attemptId: string;
  answers: Record<string, string>; // questionId -> optionId
}

export interface ExamResult {
  totalQuestions: number;
  correctAnswers: number;
  score: number; // percentage
  passed: boolean;
  answers: {
    questionId: string;
    selectedOptionId: string;
    correctOptionId: string;
    isCorrect: boolean;
  }[];
}

// --- Gantt Schema ---

// Since we are storing the whole structure as JSON in MemStorage for now to be easier
// but we want to define tables for the future DB implementation.
// However, the request specifically asks to "save changes in database per session".
// The Memory Storage implementation plan was to key by user_id.

// Let's define the Types and Schemas that the frontend will send.

export const ganttSchema = z.object({
  formats: z.array(z.object({
    id: z.number(),
    title: z.string(),
    rows: z.array(z.object({
      id: z.string(),
      activity: z.string(),
      weeks: z.record(z.coerce.number(), z.object({
        color: z.enum(["orange", "green", "blue", "red", "yellow", "purple"]),
        active: z.boolean()
      }).optional())
    }))
  }))
});

export type GanttData = z.infer<typeof ganttSchema>;

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  role: varchar("role", { length: 20, enum: ["admin", "user"] }).default("user"),
});

export const moduleProgress = mysqlTable("module_progress", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  moduleId: varchar("module_id", { length: 50 }).notNull().references(() => modules.id, { onDelete: "cascade" }),
  progress: int("progress").notNull().default(0),
  completed: boolean("completed").notNull().default(false),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export const sectionProgress = mysqlTable("section_progress", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  sectionId: varchar("section_id", { length: 50 }).notNull().references(() => sections.id, { onDelete: "cascade" }),
  completed: boolean("completed").notNull().default(false),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type ModuleProgress = typeof moduleProgress.$inferSelect;
export type SectionProgress = typeof sectionProgress.$inferSelect;
