import ListTodos from "@/components/listTodo";
import Greeting from "@/components/greeting";

interface Todo {
  id: number;
  Title: string;
  Description: string;
}

export default async function Home() {
  // Fetch data inside the server component
  const response = await fetch("http://localhost:3000/api");
  const todos: Todo[] = await response.json();

  return (
    <>
      <div>
        <Greeting />
      </div>

      <div className="w-[1280px] min-h-[60px] bg-white min-h-[480px] rounded-2xl shadow-2xl">
        <div className="p-10">
          <ListTodos todos={todos} />
        </div>
      </div>
    </>
  );
}
