import { GetCityListService, GetCityPharmacies } from "@/Services";
import { CityType, PharmacyType } from "@/Types";
import { getDistrictList, slugUrl } from "@/utils";
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

    await new Promise((resolve) => {
      revalidatePath(`/nobetci-eczaneler/${city.seoUrl}`);
      resolve("");
    });
    const result = await GetCityPharmacies({ id: city.ilid });

    const districtList = getDistrictList(
      result.entity?.pharmacies as PharmacyType[],
    );

    for (let k = 0; k < districtList.length; k++) {
      const element = slugUrl(districtList[k].toLocaleLowerCase());
      const url = `/nobetci-eczaneler/${city.seoUrl}/${element}`;
      await new Promise((resolve) => {
        revalidatePath(url);
        resolve("");
      });
    }
  }
  return NextResponse.json({ message: "Güncellendi" }, { status: 200 });
}

export const dynamic = "force-dynamic";
