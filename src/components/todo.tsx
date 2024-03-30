import { useTodoStore } from "@/stores/todo";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Todo from "../types/todo";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const toggle = useTodoStore((state) => state.toggleDone);
  const deleteTodo = useTodoStore((state) => state.delete);
  
  return (
    <div className="select-none flex items-center px-2 rounded hover:bg-gray-900 cursor-pointer">
      <input
        className="hidden"
        type="checkbox"
        id={`todo-item-${todo.id}`}
        checked={todo.is_done}
        onChange={() => toggle(todo.id)}
      />

      <label
        className="flex-1 flex items-center h-10"
        htmlFor={`todo-item-${todo.id}`}
      >
        {todo.is_done ? (
          <CheckCircleIcon className="w-5 h-5 stroke-green-400" />
        ) : (
          <span className="w-5 h-5 text-transparent border-1 border-gray-500 rounded-full"></span>
        )}
        <span className="ml-4 text-sm">{todo.title}</span>
      </label>
      <XCircleIcon
        className="w-5 h-5 stroke-red-400"
        onClick={() => {
          deleteTodo(todo.id);
        console.log("DELETED");
        }}
      />
    </div>
  );
}
