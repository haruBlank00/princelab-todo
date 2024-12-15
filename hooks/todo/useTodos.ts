import { Todo } from "@/types";
import { useLocalStorage } from "../useLocalStorage";

export const useTodos = (key: string) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>(key, []);

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const updateTodo = (updateTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updateTodo.id ? updateTodo : todo)),
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo,
  };
};
