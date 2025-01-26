import React from "react";
import CardTodo from "./cardTodo";

interface Todo {
  id: number;
  Title: string;
  Description: string;
}

interface ListTodosProps {
  todos: Todo[]; // Explicitly define the todos prop type
}

export default function ListTodos({ todos }: ListTodosProps) {
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
