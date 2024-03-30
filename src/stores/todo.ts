import Todo from "@/types/todo";
import { create } from "zustand";

type State = {
  todos: Todo[];
};

type Action = {
  add: (tite: string) => void;
  toggleDone: (id: number) => void;
  
  delete: (id: number) => void;
};

export const useTodoStore = create<State & Action>((set) => ({
  todos: [],
  add: (title: string) =>
    set((state) => {
      const newTodo: Todo = {
        id: Date.now(),
        title: title,
        is_done: false,
      };
      return { todos: [newTodo, ...state.todos] };
    }),

  toggleDone: (id: number) =>
    set((state) => {
      const tempTodos = [...state.todos].map((todo) => {
        if (todo.id === id) {
          todo.is_done = !todo.is_done;
        }
        return todo;
      });
      return { todos: tempTodos };
    }),
  // TODO: Implement delete

  delete: (id: number) =>
    set((state) => {
      const tempTodos = [...state.todos].filter((todo) => {
         return todo.id!=id;
      });
      return { todos: tempTodos };
    }),

}));
