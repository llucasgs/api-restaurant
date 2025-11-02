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

  async open(request: Request, response: Response, next: NextFunction) {
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

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
        .string()
        .transform((value) => Number(value))
        .refine((value) => !isNaN(value), { message: "id must be a number" })
        .parse(request.params.id);

      const session = await knex<TableSessionRepository>("tables_sessions")
        .select()
        .where({ id })
        .first();

      if (!session) {
        throw new AppError("session table not found");
      }
      if (session.closed_at) {
        throw new AppError("this session table is already closed");
      }

      await knex<TableSessionRepository>("tables_sessions")
        .update({ closed_at: knex.fn.now() })
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

      const table_id = await knex<TableSessionRepository>("tables_sessions")
        .select()
        .where({ id })
        .first();

      if (!table_id) {
        throw new AppError("session not found");
      }
      await knex<TableSessionRepository>("tables-sessions")
        .delete()
        .where({ id });

      return response.json();
    } catch (error) {
      next(error);
    }
  }
}

export { TableSessionController };
