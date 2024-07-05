import create from "zustand";
import { Todo } from "./types";

interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newTitle: string) => void;
  setEditing: (id: number, isEditing: boolean) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (title: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), title, isCompleted: false }],
    })),
  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    })),
  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  editTodo: (id: number, newTitle: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle, isEditing: false } : todo
      ),
    })),
  setEditing: (id: number, isEditing: boolean) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing } : todo
      ),
    })),
}));

export default useTodoStore;
