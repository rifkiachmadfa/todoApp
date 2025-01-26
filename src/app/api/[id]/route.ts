import { db } from "@/lib/db";
import { promises } from "dns";
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
    return NextResponse.json({ message: "error", error });
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
    return NextResponse.json({ message: "error", error });
  }
}
