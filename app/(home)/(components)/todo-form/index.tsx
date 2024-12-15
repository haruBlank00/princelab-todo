"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Todo } from "@/types";
import { nanoid } from "nanoid";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  todo?: Todo;
  onUpdate: (todo: Todo) => void;
  onAdd: (todo: Todo) => void;
};

export const TodoForm = (props: Props) => {
  const { todo, onUpdate, onAdd } = props;

  const [form, setForm] = useState({
    value: todo?.title || "",
    error: "",
  });

  useEffect(() => {
    setForm({
      value: todo?.title || "",
      error: "",
    });
  }, [todo]);

  const validateInput = (value: string) => {
    return value.trim().length === 0 ? "Value cannot be empty." : "";
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setForm({
      error: validateInput(value),
      value,
    });
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateInput(form.value);
    if (error) {
      setForm((prev) => ({ ...prev, error }));
      return;
    }

    if (todo) {
      const updatedTodo = {
        ...todo,
        title: form.value,
        updated: new Date(),
      };
      onUpdate(updatedTodo);
    } else {
      const newTodo: Todo = {
        id: nanoid(),
        title: form.value,
        completed: false,
        created: new Date(),
        updated: new Date(),
      };
      onAdd(newTodo);
    }

    setForm({
      value: "",
      error: "",
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="flex">
        <Input
          placeholder="Enter a new todo"
          value={form.value}
          onChange={onInputChange}
        />
        <Button type="submit">Add</Button>
      </div>

      {form.error && <p className="text-red-500 text-sm py-2">{form.error}</p>}
    </form>
  );
};
