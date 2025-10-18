import { NextFunction, Request, Response } from "express";

class ProductController {
  // Essa é uma classe que centraliza a lógica do recurso “products”.
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      return response.json({ message: "OK" });
    } catch (error) {
      next(error); // NextFunction → tipo da função next() usada para passar o controle adiante, geralmente em middlewares ou tratamento de erros. É como um gerente; se o garçom não consegue resolver (erro), ele chama o gerente pra cuidar.
    }
  }
}

export { ProductController };
