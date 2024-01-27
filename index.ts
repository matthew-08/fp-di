import knexFactory from 'knex';

const knex = knexFactory({
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

const getTodos = async () => {
  const todo = await knex.select('*').from('todo');
  console.log(todo);
};

getTodos();
