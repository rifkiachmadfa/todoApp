"use client";
import { useEffect, useState } from "react";
import CardTodo from "./cardTodo";

// Define the type for a Todo
type Todo = {
  id: number;
  Title: string;
  Description: string;
};

export default function ListTodos() {
  const [todos, setTodos] = useState<Todo[]>([]); // Change variable name to 'todos'

  useEffect(() => {
    async function fetchTodo() {
      const response = await fetch(
        "https://todo-app-rifkiachmadfas-projects.vercel.app/api/todo"
      );
      const todos: Todo[] = await response.json();
      setTodos(todos); // Set the state with 'todos'
      const intervalId = setInterval(fetchTodo, 5000);

      return () => clearInterval(intervalId);
    }
    fetchTodo();
  }, []);

  return (
    <ul>
      {!todos.length ? (
        <div className="flex justify-center items-center">
          <h1>Belum ada tugas, silahkan tambahan tugas</h1>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {todos.map((todo) => (
            <li key={todo.id}>
              <CardTodo
                title={todo.Title}
                description={todo.Description}
                id={todo.id}
              />
            </li>
          ))}
        </div>
      )}
    </ul>
  );
}
