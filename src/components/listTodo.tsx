import React from "react";
import CardTodo from "./cardTodo";

// Define the type for a Todo
type Todo = {
  id: number;
  Title: string;
  Description: string;
};

export default async function ListTodos() {
  try {
    const response = await fetch(
      `https://todo-app-zeta-vert.vercel.app/api/todo`
    );

    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const todos: Todo[] = await response.json(); // Explicitly type the response

    return (
      <ul>
        {!todos.length ? (
          <div className="flex justify-center items-center">
            <h1>Belum ada tugas, silahkan tambah tugas</h1>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {todos.map(
              (
                todo: Todo // Explicitly define the type for `todo`
              ) => (
                <li key={todo.id}>
                  <CardTodo
                    title={todo.Title}
                    description={todo.Description}
                    id={todo.id}
                  />
                </li>
              )
            )}
          </div>
        )}
      </ul>
    );
  } catch (error) {
    console.error("Error fetching todos:", error);
    return (
      <div className="flex justify-center items-center">
        <h1>Error loading todos</h1>
      </div>
    );
  }
}
