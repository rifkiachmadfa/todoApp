// api/[id]/route.ts
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const { title, description } = await req.json();

  try {
    const data = await db.todo.update({
      where: {
        id: Number(id),
      },
      data: {
        Title: title,
        Description: description,
      },
    });
    return NextResponse.json({ message: "updated", data });
  } catch (error) {
    console.error("Error updating todo:", error); // Log the error to identify issues
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id; // Directly access 'id' from 'params'

  try {
    const data = await db.todo.delete({
      where: {
        id: Number(id), // Ensure 'id' is converted to a number
      },
    });

    return NextResponse.json({ message: "data deleted" });
  } catch (error) {
    console.error("Error deleting todo:", error); // Log the error for better insight
  }
}
