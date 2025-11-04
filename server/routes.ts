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

  const httpServer = createServer(app);
  return httpServer;
}
