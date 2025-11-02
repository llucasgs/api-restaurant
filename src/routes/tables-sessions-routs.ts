import { Router } from "express";
import { TableSessionController } from "@/controllers/tables-sessions-controller";

const tablesSessionsRoutes = Router(); // Cria um agrupador de rotas.

const tablesSessionController = new TableSessionController();

tablesSessionsRoutes.get("/", tablesSessionController.index);
tablesSessionsRoutes.post("/", tablesSessionController.open);
tablesSessionsRoutes.patch("/:id", tablesSessionController.update);
tablesSessionsRoutes.delete("/:id", tablesSessionController.remove);

export { tablesSessionsRoutes };
