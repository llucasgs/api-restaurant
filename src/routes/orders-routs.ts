import { Router } from "express";
import { OrderController } from "@/controllers/orders-controller";

const ordersRouts = Router(); // Cria um agrupador de rotas.

const ordersController = new OrderController();

ordersRouts.get("/table-session/:table_session_id", ordersController.index); // Lista pedidos por mesa
ordersRouts.get(
  "/table-session/:table_session_id/total",
  ordersController.show
);
ordersRouts.post("/", ordersController.create);
ordersRouts.delete("/table-session/:id", ordersController.remove);

export { ordersRouts };
