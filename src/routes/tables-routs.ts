import { Router } from "express";
import { TableController } from "@/controllers/tables-controller";

const tablesRoutes = Router(); // Cria um agrupador de rotas.

const tablesController = new TableController();

tablesRoutes.get("/", tablesController.index);
tablesRoutes.post("/", tablesController.create);
tablesRoutes.put("/:id", tablesController.update);
tablesRoutes.delete("/:id", tablesController.remove);

export { tablesRoutes };
