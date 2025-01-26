import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET Todos
export async function GET() {
  try {
    const data = await db.todo.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch todos:", error);
    return NextResponse.json(
      { error: "failed to fetch data" },
      { status: 500 }
    );
  }
}

// POST Todo
export async function POST(req: NextRequest) {
  try {
    const { title, description } = await req.json();

    if (!title || !description) {
      return NextResponse.json({ error: "invalid input" }, { status: 400 });
    }

    const data = await db.todo.create({
      data: {
        Title: title,
        Description: description,
      },
    });

    return NextResponse.json({ message: "success", data }, { status: 201 });
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
