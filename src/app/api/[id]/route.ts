import { db } from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = await params;
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
    return NextResponse.json({ massage: "updated", data });
  } catch (error) {
    return NextResponse.json({ massage: "error", error });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = await params;

  try {
    const data = await db.todo.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ massage: "data deleted" });
  } catch (error) {
    return NextResponse.json({ massage: "error", error });
  }
}
