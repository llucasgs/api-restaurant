class AppError {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export { AppError };

// Aqui neste arquivo, criamos uma classe de erro personalizada (erro vindo de uma má requisição do usuário)
