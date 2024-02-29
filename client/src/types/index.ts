export interface Todo {
  _id: string;
  task: string;
}

export interface Counter {
  addCount: number;
  updateCount: number;
}
export interface TodoInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleAddTodo: () => void;
  editingTodoId: string | null;
}

export interface Todo {
  _id: string;
  task: string;
}

export interface TodoListProps {
  todos: Todo[];
  editingTodoId: string | null;
  handleAddTodo: () => void;
  handleEditTodo: (id: string, task: string) => void;
  handleDeleteTodo: (id: string) => void;
}
