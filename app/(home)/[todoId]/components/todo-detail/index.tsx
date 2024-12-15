"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Todo } from "@/types";
import Link from "next/link";

type Props = {
  todoId: string;
};

export const TodoDetail = (props: Props) => {
  const { todoId } = props;
  const [todos] = useLocalStorage<Todo[]>("todos", []);

  const todo = todos.find((todo) => todo.id === todoId);

  if (!todo) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">Todo not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Link href="/" className="text-blue-500 border-b">
        Back
      </Link>
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{todo.title}</h1>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Status:</span>{" "}
          {todo.completed ? "Completed" : "Todo"}
        </p>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">Created:</span>{" "}
          {new Date(todo.created).toLocaleDateString()} at{" "}
          {new Date(todo.created).toLocaleTimeString()}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Last Updated:</span>{" "}
          {new Date(todo.updated).toLocaleDateString()} at{" "}
          {new Date(todo.updated).toLocaleTimeString()}
        </p>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
          onClick={() => alert("Edit functionality to be implemented")}
        >
          Edit Todo
        </button>
      </div>
    </div>
  );
};
