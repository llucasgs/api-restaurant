export default {
  client: "sqlite3",
  connection: {
    filename: "./src/database/database.db",
  },

  pool: {
    afterCreate: (connection: any, done: any) => {
      connection.run("PRAGMA foreign_keys = ON");
      done();
    },
  },

  useNullAsDefault: true,
  migrations: {
    extensions: "ts",
    directory: "./src/database/migrations",
  },

  // Esse é a configuração para o método de inserir múltiplos registros de uma só vez.
  seeds: {
    extensions: "ts",
    directory: "./src/database/seeds",
  },
};
