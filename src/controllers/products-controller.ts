import { NextFunction, Request, Response } from "express";
import { db } from "@/database/knex";
import { z } from "zod";

class ProductController {
  // Essa é uma classe que centraliza a lógica do recurso “products”.
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "OK" });
    } catch (error) {
      next(
        error
      ); /* Manda o erro parao Express continuar a cadeia. O NextFunction é o tipo da função next() usada para passar o controle adiante, geralmente em middlewares ou tratamento de erros. É como um gerente; se o garçom não consegue resolver (erro), ele chama o gerente pra cuidar.
      Quando next(error) é chamado, o Express entende: “Esse middleware não conseguiu lidar, passa para o próximo middleware de erro”.*/
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string({ required_error: "name is required!" }).trim().min(3),
        price: z
          .number({ required_error: "price is required!" })
          .gt(0, { message: "value must be greater than 0" }),
      });

      const { name, price } = bodySchema.parse(request.body);

      await db<ProductRepository>("products").insert({ name, price });

      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}

export { ProductController };
