import { db } from "@/lib/db";

import { revalidatePath } from "next/cache";
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
  const { title, description } = await req.json();

  try {
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
