import pkg from "pg";
const { Pool } = pkg;
import { Kysely, PostgresDialect } from "kysely";
import { DB } from "./types";

const dialect = new PostgresDialect({
  pool: new Pool({
    database: "treeceptor",
    host: "localhost",
    user: "postgres",
    password: "postgres",
    port: 5432,
    max: 5,
  }),
});

export const db = new Kysely<DB>({
  dialect,
});
``;
