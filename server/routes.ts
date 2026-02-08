import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { updateModuleProgressSchema, markModuleCompleteSchema, ganttSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/modules.php", async (req, res) => {
    const userId = parseInt(req.headers["x-user-id"] as string) || 0;
    try {
      const modules = await storage.getAllModules(userId);
      res.json(modules);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los módulos" });
    }
  });

  app.get("/api/modules.php/:id", async (req, res) => {
    const userId = parseInt(req.headers["x-user-id"] as string) || 0;
    try {
      const module = await storage.getModuleById(req.params.id, userId);
      if (!module) {
        return res.status(404).json({ error: "Módulo no encontrado" });
      }
      res.json(module);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener el módulo" });
    }
  });

  app.patch("/api/modules.php/:id/progress", async (req, res) => {
    const userId = parseInt(req.headers["x-user-id"] as string) || 0;
    // Permitir userId=0 solo para pruebas o manejo fallback, en prod debería requerir usuario
    if (userId === 0) return res.status(401).json({ error: "No autenticado (User ID missing)" });

    try {
      const result = updateModuleProgressSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Datos inválidos", details: result.error });
      }

      const module = await storage.updateModuleProgress(userId, req.params.id, result.data);
      if (!module) {
        return res.status(404).json({ error: "Módulo no encontrado" });
      }

      res.json(module);
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar el progreso" });
    }
  });

  app.post("/api/modules.php/:id/complete", async (req, res) => {
    const userId = parseInt(req.headers["x-user-id"] as string) || 0;
    if (userId === 0) return res.status(401).json({ error: "No autenticado (User ID missing)" });

    try {
      const result = markModuleCompleteSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Datos inválidos", details: result.error });
      }

      const module = await storage.markModuleComplete(userId, req.params.id, result.data);
      if (!module) {
        return res.status(404).json({ error: "Módulo no encontrado" });
      }

      res.json(module);
    } catch (error) {
      res.status(500).json({ error: "Error al marcar el módulo como completado" });
    }
  });

  app.get("/api/modules.php/:id/sections", async (req, res) => {
    const userId = parseInt(req.headers["x-user-id"] as string) || 0;
    try {
      const sections = await storage.getSectionsByModuleId(req.params.id, userId);
      res.json(sections);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las secciones" });
    }
  });

  app.post("/api/sections.php/:id/complete", async (req, res) => {
    const userId = parseInt(req.headers["x-user-id"] as string) || 0;
    if (userId === 0) return res.status(401).json({ error: "No autenticado (User ID missing)" });

    try {
      const section = await storage.markSectionComplete(userId, req.params.id);
      if (!section) {
        return res.status(404).json({ error: "Sección no encontrada" });
      }
      res.json(section);
    } catch (error) {
      res.status(500).json({ error: "Error al marcar la sección como completada" });
    }
  });

  // Rutas de exámenes
  app.get("/api/sections.php/:sectionId/exam", async (req, res) => {
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

  app.post("/api/exams.php/:examId/submit", async (req, res) => {
    const userId = parseInt(req.headers["x-user-id"] as string) || 0;
    if (userId === 0) return res.status(401).json({ error: "No autenticado (User ID missing)" });

    try {
      const result = await storage.submitExam(userId, req.params.examId, req.body);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error al enviar el examen" });
    }
  });

  // Rutas de Gantt
  app.get("/api/gantt.php/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ error: "ID de usuario inválido" });
      }
      const data = await storage.getGanttCtx(userId);
      // If no data exists, we return null or empty object, frontend handles mock data fallback if needed,
      // strictly speaking returning null is fine.
      res.json(data || null);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener datos de Gantt" });
    }
  });

  app.post("/api/gantt.php/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ error: "ID de usuario inválido" });
      }
      const result = ganttSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ error: "Datos inválidos", details: result.error });
      }

      await storage.saveGanttCtx(userId, result.data);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Error al guardar datos de Gantt" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
