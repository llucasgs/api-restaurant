import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { knex } from "@/database/knex";
import { z } from "zod";

class OrderController {
  async index(request: Request, response: Response, next: NextFunction) {}

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_session_id: z
          .number({ required_error: "table session ID is required!" })
          .gt(0, { message: "value must be greater than 0" }),
        product_id: z
          .number({ required_error: "product ID is required!" })
          .gt(0, { message: "value must be greater than 0" }),
        quantity: z
          .number({ required_error: "quantity is required!" })
          .gt(0, { message: "value must be greater than 0" }),
      });

      const { table_session_id, product_id, quantity } = bodySchema.parse(
        request.body
      );

      const session = await knex<TableSessionRepository>("tables_sessions")
        .where({ id: table_session_id })
        .first();

      if (!session) {
        throw new AppError("session table not found");
      }
      if (session.closed_at) {
        throw new AppError("this table is closed");
      }

      const product = await knex<ProductRepository>("products")
        .where({ id: product_id })
        .first();

      if (!product) {
        throw new AppError("product not found");
      }

      await knex<OrderRepository>("orders").insert({
        table_session_id,
        product_id,
        quantity,
        price: product.price,
      });

      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {}
  async remove(request: Request, response: Response, next: NextFunction) {}
}

export { OrderController };
