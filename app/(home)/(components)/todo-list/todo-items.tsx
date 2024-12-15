"use client";

import { cn } from "@/lib/utils";
import { Todo } from "@/types";
import { Check, Edit, Trash } from "lucide-react";
import Link from "next/link";

type Props = {
  todo: Todo;
} & TodoActions;

export type TodoActions = {
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TodoItem = (props: Props) => {
  const {
    todo: { title, completed, id },
    onToggle,
    onEdit,
    onDelete,
  } = props;

  return (
    <li className="flex justify-between items-center p-2 border capitalize hover:bg-slate-100">
      <Link
        href={`${id}`}
        className={cn(
          "flex-1 cursor-pointer border-b border-transparent hover:border-b-black",
          { "line-through": completed },
        )}
      >
        {title}
      </Link>
      <div className="flex gap-2">
        <Check
          className="cursor-pointer hover:text-green-500"
          onClick={(e) => {
            e.stopPropagation();
            onToggle(id);
          }}
        />
        <Edit
          className="cursor-pointer hover:text-blue-500"
          onClick={(e) => {
            e.stopPropagation();
            onEdit(id);
          }}
        />
        <Trash
          className="cursor-pointer hover:text-red-500"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
        />
      </div>
    </li>
  );
};
