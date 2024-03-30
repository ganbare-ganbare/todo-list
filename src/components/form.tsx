import React, { useState } from "react";
import { useTodoStore } from "@/stores/todo";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function Form() {
  const add = useTodoStore((state) => state.add);
  const [title, setTitle] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add(title);
    setTitle("");
  };

  return (
    <form className="flex items-center mt-2" onSubmit={onSubmit}>
      <PlusIcon className="w-5 h-5 text-gray-400 fill-current" />
      <input
        className="flex-grow h-8 ml-4 bg-transparent focus:outline-none font-medium border-none"
        type="text"
        placeholder="add a new task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
