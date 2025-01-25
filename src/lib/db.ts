import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const db = prisma;

export const getTodos = async () => {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();
  return data;
};
