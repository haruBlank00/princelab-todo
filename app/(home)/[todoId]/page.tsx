import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Metadata } from "next";
import { TodoDetail } from "./components/todo-detail";

type Props = {
  params: Promise<{
    todoId: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { todoId } = await params;

  return {
    title: `Todo`,
    description: `Details about Todo ${todoId}`,
  };
}

export default async function TodoPage(props: Props) {
  const { params } = props;

  const todoId = (await params).todoId;

  return (
    <div>
      <h1>Todo Page</h1>

      <TodoDetail todoId={todoId} />
    </div>
  );
}
