import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { Metadata } from "next";
import { Todos } from "./(components)/todos";

export const metadata: Metadata = {
  title: "Home | Todo@princelab",
};

export default function Home() {
  return (
    <div>
      <h1>Prince Lab Todos</h1>

      <Card>
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
          <CardDescription>Get started by creating a new todo</CardDescription>
        </CardHeader>

        <CardContent>
          <Todos />
        </CardContent>
      </Card>
    </div>
  );
}
