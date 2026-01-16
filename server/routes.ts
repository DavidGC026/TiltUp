import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { updateModuleProgressSchema, markModuleCompleteSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/modules", async (req, res) => {
    try {
      const modules = await storage.getAllModules();
      res.json(modules);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los módulos" });
    }
  });

  app.get("/api/modules/:id", async (req, res) => {
    try {
      const module = await storage.getModuleById(req.params.id);
      if (!module) {
        return res.status(404).json({ error: "Módulo no encontrado" });
      }
      res.json(module);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el módulo" });
    }
  });

  app.patch("/api/modules/:id/progress", async (req, res) => {
    try {
      const result = updateModuleProgressSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Datos inválidos", details: result.error });
      }

      const module = await storage.updateModuleProgress(req.params.id, result.data);
      if (!module) {
        return res.status(404).json({ error: "Módulo no encontrado" });
      }

      res.json(module);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el progreso" });
    }
  });

  app.post("/api/modules/:id/complete", async (req, res) => {
    try {
      const result = markModuleCompleteSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Datos inválidos", details: result.error });
      }

      const module = await storage.markModuleComplete(req.params.id, result.data);
      if (!module) {
        return res.status(404).json({ error: "Módulo no encontrado" });
      }

      res.json(module);
    } catch (error) {
      res.status(500).json({ error: "Error al marcar el módulo como completado" });
    }
  });

  app.get("/api/modules/:id/sections", async (req, res) => {
    try {
      const sections = await storage.getSectionsByModuleId(req.params.id);
      res.json(sections);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las secciones" });
    }
  });

  app.post("/api/sections/:id/complete", async (req, res) => {
    try {
      const section = await storage.markSectionComplete(req.params.id);
      if (!section) {
        return res.status(404).json({ error: "Sección no encontrada" });
      }
      res.json(section);
    } catch (error) {
      res.status(500).json({ error: "Error al marcar la sección como completada" });
    }
  });

  // Rutas de exámenes
  app.get("/api/sections/:sectionId/exam", async (req, res) => {
    try {
      const exam = await storage.getExamBySectionId(req.params.sectionId);
      if (!exam) {
        return res.status(404).json({ error: "Examen no encontrado" });
      }
      res.json(exam);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el examen" });
    }
  });

  app.post("/api/exams/:examId/submit", async (req, res) => {
    try {
      const result = await storage.submitExam(req.params.examId, req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error al enviar el examen" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
