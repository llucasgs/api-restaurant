// Esse arquivo inicializa o servidor Express.

import express from "express";

import { routes } from "./routes/index";

const PORT = 3333;
const app = express(); // Cria a aplicação HTTP.

app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições.
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
