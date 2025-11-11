# API para gerenciar pedidos das mesas de um restaurante

## :hammer_and_wrench: Dependências

![Express](https://img.shields.io/badge/Express-4.19.2-000000?style=for-the-badge&logo=express)
![Knex](https://img.shields.io/badge/Knex-3.1.0-4C4E4E?style=for-the-badge&logo=knex)
![SQLite](https://img.shields.io/badge/SQLite-5.1.7-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3.23.8-386DFF?style=for-the-badge&logo=zod&logoColor=white)

## :hammer_and_wrench: Ferramentas de Desenvolvimento

![TS Express](https://img.shields.io/badge/@types/express-4.17.21-3178C6?style=for-the-badge&logo=typescript)
![TS Node](https://img.shields.io/badge/@types/node-20.19.22-3C873A?style=for-the-badge&logo=nodedotjs&logoColor=white)
![ts-node](https://img.shields.io/badge/ts--node-10.9.2-3178C6?style=for-the-badge&logo=typescript)
![tsx](https://img.shields.io/badge/tsx-4.16.2-3178C6?style=for-the-badge&logo=typescript)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

API de gerenciamento de pedidos das mesas de um restaurante. É possível usar a API para:</br>

1. Criar os itens (produtos) do cardápio;</br>
2. Criar as mesas do restaurante;</br>
3. Sinalizar que uma mesa está aberta ou fechada para pedidos (com ou sem clientes);</br>
4. Vincular itens pedidos para cada mesa e fazer o cálculo para fechamento das contas.

<img src="./src/assets/images/readme-image.png" alt="Foto do Insomnia fazendo requisições" />

## :bulb: Como testar o projeto

**1. Ter o Git instalado em sua máquina;**</br>
**2. Clonar o repositório usando um terminal:**

```bash
git clone https://github.com/llucasgs/api-restaurant.git
```

Isso vai criar uma pasta com o nome do repositório. Então, abra a pasta dentro do editor de código **VS Code.**

**3. Execute no terminal:**

```bash
npm install
```

Isso vai instalar as dependências e recursos para rodar o projeto.

**4. Execute no terminal o script encontrado dentro do arquivo package.json:**

```bash
npm run dev
```

Isso vai rodar o servidor para ser possível fazer requisições e receber respostas.

**5. Use o Insomnia para fazer a comunicação com a API.**
