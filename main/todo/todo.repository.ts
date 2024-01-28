import { Knex } from 'knex';
import { CreateTodoInput } from '../input/todo.input';

type Dependencies = {
  db: Knex;
};

export type DeleteTodoInput = {
  id: number;
};

export type TodoRepository = {
  queryGetAllTodos: () => Promise<any>;
  queryCreateTodo: (input: CreateTodoInput) => Promise<any>;
  queryDeleteTodo: (input: DeleteTodoInput) => Promise<any>;
};

export const todoRepository = (dependencies: Dependencies): TodoRepository => {
  const { db } = dependencies;

  const queryGetAllTodos = async () => {
    return db.select('*').from('todos');
  };

  const queryCreateTodo = async (input: CreateTodoInput) => {
    const { description, priority, title } = input;
    const priorityId = (
      await db('priority').select('id').where('name', priority)
    )[0].id;
    return db('todo').insert({ title, description, priority_id: priorityId });
  };

  const queryDeleteTodo = async (input: DeleteTodoInput) => {
    const { id } = input;

    return db('todo').delete('*').where('id', id);
  };

  return {
    queryGetAllTodos,
    queryCreateTodo,
    queryDeleteTodo,
  };
};
