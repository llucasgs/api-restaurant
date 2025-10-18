import { Router } from "express";

import { productsRoutes } from "./products-routs";

const routes = Router();
routes.use("/products", productsRoutes);

export { routes };
