"use server";
import { GetCityListService, GetCityPharmacies } from "@/Services";
import { CityType, PharmacyType } from "@/Types";
import { getDistrictList, slugUrl } from "@/utils";
import { revalidatePath } from "next/cache";

export const UpdateList = async () => {
  const cityListResult = await GetCityListService();

  const cityList = cityListResult.entities as CityType[];

  for (const city of cityList) {
    revalidatePath(`/nobetci-eczaneler/${city.seoUrl}`);
    const result = await GetCityPharmacies({ id: city.ilid });
    const districtList = getDistrictList(
      result.entity?.pharmacies as PharmacyType[],
    );

    for (const district of districtList) {
      const element = slugUrl(district.toLocaleLowerCase());
      const url = `/nobetci-eczaneler/${city.seoUrl}/${element}`;

      revalidatePath(url);
    }
  }
};

export const fetchList = async () => {
  const cityListResult = await GetCityListService();

  const cityList = cityListResult.entities as CityType[];

  for (const city of cityList) {
    try {
      const cityResponse = await fetch(
        `https://www.nobetcieczanelistesi.org/nobetci-eczaneler/${city.seoUrl}`,
      );
      if (cityResponse.ok) {
        console.log("City Responsed", city.ilAdi);
      }
    } catch (error) {
      console.log(error);
    }

    const result = await GetCityPharmacies({ id: city.ilid });
    const districtList = getDistrictList(
      result.entity?.pharmacies as PharmacyType[],
    );

    for (const district of districtList) {
      const element = slugUrl(district.toLocaleLowerCase());
      const url = `/nobetci-eczaneler/${city.seoUrl}/${element}`;

      try {
        const districtResponse = await fetch(
          `https://www.nobetcieczanelistesi.org${url}`,
        );

        if (districtResponse.ok) {
          console.log("District Responsed", element);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
};
