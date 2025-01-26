import React from "react";
import CardTodo from "./cardTodo";

export default async function ListTodos() {
  try {
    const data = await fetch(`https://todo-app-zeta-vert.vercel.app/todo/`);

    // Check if the response is OK (status code 200)
    if (!data.ok) {
      throw new Error(`Failed to fetch data: ${data.statusText}`);
    }

    const todos = await data.json();

    return (
      <ul>
        {!todos.length ? (
          <div className="flex justify-center items-center">
            <h1>Belum ada tugas, silahkan tambahan tugas</h1>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {todos.map((todo: any) => (
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
  } catch (error) {
    console.error("Error fetching todos:", error);
    return (
      <div className="flex justify-center items-center">
        <h1>Error loading todos</h1>
      </div>
    );
  }
}
