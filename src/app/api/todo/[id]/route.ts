import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// Update Todo by ID
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } } // Use string for params.id
) {
  const { id } = params; // Access the dynamic ID

  try {
    const { title, description } = await req.json();

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and Description are required" },
        { status: 400 }
      );
    }

    const data = await db.todo.update({
      where: { id: Number(id) }, // Convert id to a number if necessary
      data: {
        Title: title,
        Description: description,
      },
    });

    return NextResponse.json({ message: "Todo updated successfully", data });
  } catch (error: unknown) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { error: "Failed to update todo" },
      { status: 500 }
    );
  }
}

// Delete Todo by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } } // Use string for params.id
) {
  const { id } = params; // Access the dynamic ID

  try {
    // Validate ID
    if (!id) {
      return NextResponse.json(
        { error: "ID parameter is required" },
        { status: 400 }
      );
    }

    await db.todo.delete({
      where: { id: Number(id) }, // Convert id to a number if necessary
    });

    return NextResponse.json({ message: "Todo deleted successfully" });
  } catch (error: unknown) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { error: "Failed to delete todo" },
      { status: 500 }
    );
  }
}
