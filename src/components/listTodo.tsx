import React from "react";
import CardTodo from "./cardTodo";
import { db } from "@/lib/db";

export default async function ListTodos() {
  const todos = await db.todo.findMany();
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
