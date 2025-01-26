import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Wrapping params in a Promise to handle async behavior in Next.js 15

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // Resolving params as a Promise
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error updating todo:", error.message);
      return NextResponse.json({ message: "error", error: error.message });
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json({
        message: "error",
        error: "An unknown error occurred",
      });
    }
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // Resolving params as a Promise

  try {
    const data = await db.todo.delete({
      where: {
        id: Number(id),
      },
    });
    return NextResponse.json({ message: "data deleted" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error deleting todo:", error.message);
      return NextResponse.json({ message: "error", error: error.message });
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json({
        message: "error",
        error: "An unknown error occurred",
      });
    }
  }
}
