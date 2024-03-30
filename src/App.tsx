import Form from "./components/form";
import Header from "./components/header";
import TodoItem from "./components/todo";
import { useTodoStore } from "./stores/todo";

export default function App() {
  const todos = useTodoStore((state) => state.todos);

  return (
    // ? Container
    <div className="flex flex-grow items-center justify-center bg-gray-900 h-dvh">
      {/* Center Box */}
      <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
        <Header />

        <ul className="max-h-60 overflow-y-auto">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>

        <Form />
      </div>
    </div>
  );
}
