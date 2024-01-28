import knexFactory from 'knex';

export const knex = knexFactory({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'todo',
    password: 'password',
    ssl: false,
  },
});
