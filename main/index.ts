import * as Controller from './todo/todo.controller';
import * as Service from './todo/todo.service';
import * as Repository from './todo/todo.repository';
import { knex } from '../db/knex';

const todoRepository = Repository.todoRepository({
  db: knex,
});

const todoService = Service.todoService({
  todoRepository,
});

export const todoController = Controller.todoController({
  todoService,
});
