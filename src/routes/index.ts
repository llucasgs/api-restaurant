import { Router } from "express";

import { productsRoutes } from "./products-routs";
import { tablesRoutes } from "./tables-routs";

const routes = Router();
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);

export { routes };
