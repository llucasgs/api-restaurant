import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { knex } from "@/database/knex";
import { z } from "zod";

class TableSessionController {
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      return response.status(201).json();
    } catch (error) {
      next(error);
    }
  }
}

export { TableSessionController };
