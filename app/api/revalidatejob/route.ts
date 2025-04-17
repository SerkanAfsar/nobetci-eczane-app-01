import { UpdateList } from "@/Actions";
import { NextResponse } from "next/server";

export async function GET() {
  // const browser = await puppeteer.launch({ channel: "chrome" });
  // const page = await browser.newPage();

  // await page.goto("http://localhost:3000/deneme");

  // await page.click("#myButton");

  // await browser.close();
  // return NextResponse.json({ message: "success" }, { status: 200 });
  await UpdateList();
  return NextResponse.json({ message: "success" }, { status: 200 });
}

export const dynamic = "force-dynamic";
