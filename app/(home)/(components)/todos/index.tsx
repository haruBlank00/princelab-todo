"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { TodoForm } from "../todo-form";
import { TodoLists } from "../todo-list";
import { Todo } from "@/types";
import { useState } from "react";

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [todoToEditID, setTodoToEditID] = useState<string | null>(null);

  const todo = todos.find((todo) => todo.id === todoToEditID);

  const onEdit = (id: string) => setTodoToEditID(id);

  const onDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;

    todo.completed = !todo.completed;
    todo.updated = new Date();

    setTodos([...todos]);
  };

  const onFinishEdit = () => setTodoToEditID(null);

  return (
    <div>
      <TodoForm setTodos={setTodos} todo={todo} onFinishEdit={onFinishEdit} />
      <TodoLists
        todos={todos}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggle={onToggle}
      />
    </div>
  );
};
