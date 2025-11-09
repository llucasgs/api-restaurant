import { Router } from "express";

import { tablesSessionsRoutes } from "./tables-sessions-routs";
import { productsRoutes } from "./products-routs";
import { tablesRoutes } from "./tables-routs";
import { ordersRouts } from "./orders-routs";

const routes = Router();
routes.use("/tables-sessions", tablesSessionsRoutes);
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/orders", ordersRouts);

export { routes };
