"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import CreateTodo from "./createTodo";
export default function Greeting() {
  const words = [
    {
      text: "I",
    },
    {
      text: "Made",
    },
    {
      text: "This",
    },
    {
      text: "With",
    },
    {
      text: "Love.",
      className: "text-[#24c5ff]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[30rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10 ">
        Welcome Sunshine!
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <CreateTodo />
      </div>
    </div>
  );
}
