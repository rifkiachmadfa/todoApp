import ListTodos from "@/components/listTodo";
import Greeting from "@/components/greeting";
import { db } from "@/lib/db";

interface Todo {
  id: number;
  Title: string;
  Description: string;
}

export default async function Home() {
  return (
    <>
      <div>
        <Greeting />
      </div>

      <div className="w-[1280px] min-h-[60px] bg-white min-h-[480px] rounded-2xl shadow-2xl">
        <div className="p-10">
          <ListTodos />
        </div>
      </div>
    </>
  );
}
