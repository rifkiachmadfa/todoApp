import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = await params;

  try {
    const { title, description } = await req.json();

    const data = await db.todo.update({
      where: { id: Number(id) },
      data: {
        Title: title,
        Description: description,
      },
    });

    return NextResponse.json({ message: "Todo updated successfully", data });
  } catch (error) {
    return NextResponse.json(
      { message: "An unknown error occurred" },
      { status: 500 }
    );
  }
}

// ... (DELETE route with similar error handling)
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = await params;
  try {
    // Check if id is provided
    if (!id) {
      return NextResponse.json(
        { error: "ID parameter is missing" },
        { status: 400 }
      );
    }

    // Delete the record
    await db.todo.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Todo deleted successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error deleting todo:", error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.error("Unknown error:", error);
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
