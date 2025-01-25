import CardTodo from "./cardTodo";

export default async function listTodos() {
  const data = await fetch("http://localhost:3000/api");
  const todos = await data.json();

  return (
    <>
      {!todos.length ? (
        <div className="flex justify-center items-center">
          <h1>Belum ada tugas, silahkan tambahan tugas</h1>
        </div>
      ) : (
        <ul>
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
        </ul>
      )}
    </>
  );
}
