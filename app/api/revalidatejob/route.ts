import { GetCityListService, GetCityPharmacies } from "@/Services";
import { CityType, PharmacyType } from "@/Types";
import { slugUrl } from "@/utils";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  const cityList = await GetCityListService();
  if (!cityList.isSuccess) {
    return NextResponse.json(
      { message: cityList.errorList.join(",") },
      { status: 400 },
    );
  }

  const data = cityList.entities as CityType[];
  for (let i = 0; i < data.length; i++) {
    const city = data[i];
    revalidatePath(`/nobetci-eczaneler/${city.seoUrl}`);
    const result = await GetCityPharmacies({ id: city.ilid });
    if (!result) {
      break;
    }

    const pharmacyList = result.entity?.pharmacies as PharmacyType[];
    if (!pharmacyList?.length) {
      break;
    }
    const districtList = Array.from(
      new Set(pharmacyList.map((a) => a.ilceAdi)),
    );
    for (let k = 0; k < districtList.length; k++) {
      const element = districtList[k];
      revalidatePath(`/nobetci-eczaneler/${city.seoUrl}/${slugUrl(element)}`);
    }
  }
  return NextResponse.json({ message: "Güncellendi" }, { status: 200 });
}
