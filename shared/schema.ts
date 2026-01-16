import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const modules = pgTable("modules", {
  id: varchar("id").primaryKey(),
  number: integer("number").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  imageUrl: text("image_url").notNull(),
  progress: integer("progress").notNull().default(0),
  completed: boolean("completed").notNull().default(false),
});

export const sections = pgTable("sections", {
  id: varchar("id").primaryKey(),
  moduleId: varchar("module_id").notNull().references(() => modules.id),
  type: varchar("type", { enum: ["diagnostic", "presentation", "infographic", "data", "evaluation"] }).notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  pdfUrl: text("pdf_url"),
  order: integer("order").notNull(),
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
export const exams = pgTable("exams", {
  id: varchar("id", { length: 50 }).primaryKey(),
  sectionId: varchar("section_id", { length: 50 }).notNull().references(() => sections.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
});

export const examQuestions = pgTable("exam_questions", {
  id: varchar("id", { length: 80 }).primaryKey(),
  examId: varchar("exam_id", { length: 50 }).notNull().references(() => exams.id, { onDelete: "cascade" }),
  questionNumber: integer("question_number").notNull(),
  questionText: text("question_text").notNull(),
});

export const examQuestionOptions = pgTable("exam_question_options", {
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
