import { CreateTodoInput } from '../input/todo.input';
import { DeleteTodoInput, TodoRepository } from './todo.repository';
import { TodoService, todoService } from './todo.service';

type Dependencies = {
  todoService: TodoService;
};

type TodoController = {
  handleGetAllTodos: () => Promise<any>;
  handleDeleteTodo: (input: DeleteTodoInput) => Promise<any>;
  handleCreateTodo: (input: CreateTodoInput) => Promise<any>;
};

export const todoController = ({
  todoService,
}: Dependencies): TodoController => {
  const handleGetAllTodos = () => todoService.getAllTodos();
  const handleDeleteTodo = (input: DeleteTodoInput) =>
    todoService.deleteTodo(input);

  const handleCreateTodo = (input: CreateTodoInput) =>
    todoService.createTodo(input);

  return {
    handleGetAllTodos,
    handleDeleteTodo,
    handleCreateTodo,
  };
};
