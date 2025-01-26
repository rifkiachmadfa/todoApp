import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

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
