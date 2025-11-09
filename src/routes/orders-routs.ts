import { Router } from "express";
import { OrderController } from "@/controllers/orders-controller";

const ordersRouts = Router(); // Cria um agrupador de rotas.

const ordersController = new OrderController();

ordersRouts.get("/table-session/:table_session_id", ordersController.index); // Lista pedidos por mesa
ordersRouts.post("/", ordersController.create);
ordersRouts.put("/:id", ordersController.update);
ordersRouts.delete("/:id", ordersController.remove);

export { ordersRouts };
