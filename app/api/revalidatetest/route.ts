import { revalidateCustomPath } from "@/Actions";
import { NextResponse } from "next/server";

export async function GET() {
  await revalidateCustomPath("/nobetci-eczaneler/istanbul-nobetci-eczaneleri");
  return NextResponse.json({ message: "Success" }, { status: 200 });
}
