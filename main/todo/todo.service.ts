import { CreateTodoInput } from '../input/todo.input';
import { DeleteTodoInput, TodoRepository } from './todo.repository';

type TodoServiceDependencies = {
  todoRepository: TodoRepository;
};

export type TodoService = {
  getAllTodos: () => Promise<any>;
  createTodo: (input: CreateTodoInput) => Promise<any>;
  deleteTodo: (input: DeleteTodoInput) => Promise<any>;
};

export const todoService = ({
  todoRepository,
}: TodoServiceDependencies): TodoService => {
  const getAllTodos = () => todoRepository.queryGetAllTodos();
  const createTodo = async (input: CreateTodoInput) => {
    const t = await todoRepository.queryCreateTodo(input);
    console.log(t);
  };
  const deleteTodo = (input: DeleteTodoInput) =>
    todoRepository.queryDeleteTodo(input);

  return {
    getAllTodos,
    createTodo,
    deleteTodo,
  };
};
