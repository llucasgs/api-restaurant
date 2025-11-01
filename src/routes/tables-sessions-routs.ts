import { Router } from "express";
import { TableSessionController } from "@/controllers/tables-sessions-controller";

const tablesSessionsRoutes = Router(); // Cria um agrupador de rotas.

const tablesSessionController = new TableSessionController();

tablesSessionsRoutes.post("/", tablesSessionController.create);

export { tablesSessionsRoutes };
