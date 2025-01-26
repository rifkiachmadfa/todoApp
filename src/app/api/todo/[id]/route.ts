import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Update Todo by ID
export async function PUT(req: NextRequest) {
  // Extract ID from the URL path (assumes the URL structure is /api/todo/[id])
  const id = req.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "ID is required" }, { status: 400 });
  }

  try {
    const { title, description } = await req.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and Description are required" },
        { status: 400 }
      );
    }

    const data = await db.todo.update({
      where: { id: Number(id) }, // Convert `id` to a number
      data: {
        Title: title,
        Description: description,
      },
    });

    return NextResponse.json({ message: "Updated" }, { status: 200 });
  } catch (error: unknown) {
    console.error("Error updating todo:", error);
    return NextResponse.json({ message: "Error" }, { status: 400 });
  }
}

// Delete Todo by ID
export async function DELETE(req: NextRequest) {
  // Extract ID from the URL path
  const id = req.nextUrl.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  try {
    await db.todo.delete({
      where: { id: Number(id) }, // Convert `id` to a number
    });

    return NextResponse.json(
      { message: "Todo deleted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 400 }
    );
  }
}
