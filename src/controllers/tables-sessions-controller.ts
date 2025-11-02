import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { knex } from "@/database/knex";
import { z } from "zod";

class TableSessionController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const tables_sessions = await knex<TableSessionRepository>(
        "tables_sessions"
      )
        .select()
        .orderBy("closed_at");

      return response.json(tables_sessions);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        table_id: z
          .number({ required_error: "table id is required" })
          .gt(0, { message: "value must be greater than 0" }),
      });

      const { table_id } = bodySchema.parse(request.body);

      const session = await knex<TableSessionRepository>("tables_sessions")
        .where({ table_id })
        .orderBy("opened_at", "desc")
        .first();

      if (session && !session.closed_at) {
        throw new AppError("This table is already open");
      }

      await knex<TableSessionRepository>("tables_sessions").insert({
        table_id,
      });
      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}

export { TableSessionController };
