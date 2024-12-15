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
    <li>
      <Link
        href={`${id}`}
        className={cn(
          "flex justify-between p-2 border capitalize hover:bg-slate-100 cursor-pointer group",
          { "line-through": completed },
        )}
      >
        {title}

        <div className="flex gap-2 opacity-0 group-hover:opacity-100">
          <Check
            className="cursor-pointer hover:text-green-500"
            onClick={() => onToggle(id)}
          />
          <Edit
            className="cursor-pointer hover:text-blue-500"
            onClick={() => onEdit(id)}
          />
          <Trash
            className="cursor-pointer hover:text-red-500"
            onClick={() => onDelete(id)}
          />
        </div>
      </Link>
    </li>
  );
};
