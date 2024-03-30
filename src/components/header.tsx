import { InboxIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="flex items-center mb-6">
      <InboxIcon className="h-8 w-8 text-indigo-500 stroke-current" />
      <h4 className="font-semibold ml-3 text-lg">Todo List</h4>
    </div>
  );
}
