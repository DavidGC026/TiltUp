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
