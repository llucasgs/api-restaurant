import { Router } from "express";
import { ProductController } from "@/controllers/products-controller";

const productsRoutes = Router(); // Cria um agrupador de rotas.

const productsController = new ProductController();

productsRoutes.get("/", productsController.index);
productsRoutes.post("/", productsController.create);

export { productsRoutes };
