export type CreateTodoInput = {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
};
