import { todoService } from '../../main/todo/todo.service';
type Todo = {
  id: number;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
};

describe('todo service', () => {
  const mockTodos: Todo[] = [];
  const addMockTodo = () => {};
  const mockTodoService = todoService({
    todoRepository: {
      queryCreateTodo: (input) => {
        mockTodos.push(input);
      },
      queryDeleteTodo: (input) => Promise.resolve(true),
      queryGetAllTodos: () => Promise.resolve(mockTodos),
    },
  });
});
