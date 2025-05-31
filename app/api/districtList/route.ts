import { GetCityDetailItem } from "@/Services";
import { GetDistrictListCustomOptions, slugUrl } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { cityName } = await req.json();
  const cityDetail = await GetCityDetailItem(
    slugUrl(`${cityName} nöbetçi eczaneleri`)!,
  );
  const pharmacyList = GetDistrictListCustomOptions(
    cityDetail?.pharmacies ?? [],
  );
  return NextResponse.json(pharmacyList, { status: 200 });
}
