import { UpdateList } from "@/Actions";
import { NextResponse } from "next/server";

export async function GET() {
  await UpdateList();

  return NextResponse.json({ message: "success" }, { status: 200 });
}

export const dynamic = "force-dynamic";
