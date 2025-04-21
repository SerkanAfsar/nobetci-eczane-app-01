import { UpdateList } from "@/Actions";
import { NextResponse } from "next/server";
// import puppeteer from "puppeteer-core";

export async function GET() {
  // const browser = await puppeteer.launch({ channel: "chrome" });
  // const page = await browser.newPage();

  // await page.goto(`${process.env.NEXT_PUBLIC_SITE_NAME}/deneme`);

  // await page.click("#myButton");
  await UpdateList();

  // await browser.close();
  return NextResponse.json({ message: "success" }, { status: 200 });
}

export const dynamic = "force-dynamic";
