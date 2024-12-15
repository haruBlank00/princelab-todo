"use client";

import { Todo } from "@/types";
import { TodoActions, TodoItem } from "./todo-items";

type Props = {
  todos: Todo[];
} & TodoActions;

export const TodoLists = (props: Props) => {
  const { todos = [], ...actions } = props;
  return (
    <ul className="py-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  );
};
