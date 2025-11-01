import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { knex } from "@/database/knex";
import { z } from "zod";

class TableController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const tables = await knex<TableRepository>("tables")
        .select()
        .orderBy("table_number");

      return response.json(tables);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_number: z
          .number({ required_error: "table number is required!" })
          .gt(0, { message: "value must be greater than 0" }),
      });

      const { table_number } = bodySchema.parse(request.body);

      await knex<TableRepository>("tables").insert({ table_number });

      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "id must be a number" })
        .parse(request.params.id);

      const table = await knex<TableRepository>("tables")
        .select()
        .where({ id })
        .first();

      if (!table) {
        throw new AppError("table not found");
      }

      const bodySchema = z.object({
        table_number: z
          .number({ required_error: "table number is required!" })
          .gt(0, { message: "value must be greater than 0" }),
      });

      const { table_number } = bodySchema.parse(request.body);

      await knex<TableRepository>("tables")
        .update({ table_number, updated_at: knex.fn.now() })
        .where({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "id must be a number" })
        .parse(request.params.id);

      const table = await knex<TableRepository>("tables")
        .select()
        .where({ id })
        .first();

      if (!table) {
        throw new AppError("table not found");
      }
      await knex<TableRepository>("tables").delete().where({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

export { TableController };
