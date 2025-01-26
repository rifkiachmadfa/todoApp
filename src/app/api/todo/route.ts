import { db } from "@/lib/db";

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await db.todo.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "failed to fetch data", status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, description } = await req.json();
    if (!title || !description) {
      return NextResponse.json({ error: "invalid input", status: 400 });
    }

    const data = await db.todo.create({
      data: {
        Title: title,
        Description: description,
      },
    });

    return NextResponse.json({ massage: "success", data });
  } catch (error) {
    return NextResponse.json({ massage: "error", error });
  }
}
