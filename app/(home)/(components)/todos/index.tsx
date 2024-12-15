"use client";

import { TodoForm } from "../todo-form";
import { TodoLists } from "../todo-list";
import { Todo } from "@/types";
import { useState } from "react";
import { useTodos } from "@/hooks/todo/useTodos";

export const Todos = () => {
  const { todos, toggleTodo, deleteTodo, addTodo, updateTodo } =
    useTodos("todos");

  const [todoToEditID, setTodoToEditID] = useState<string | null>(null);

  const todo = todos.find((todo) => todo.id === todoToEditID);

  const onEdit = (id: string) => setTodoToEditID(id);

  const onUpdate = (todo: Todo) => {
    updateTodo(todo);
    setTodoToEditID(null);
  };

  return (
    <div>
      <TodoForm todo={todo} onUpdate={onUpdate} onAdd={addTodo} />
      <TodoLists
        todos={todos}
        onEdit={onEdit}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
};
