"use server";
import { GetCityListServiceRedis, GetCityListWithDistricts } from "@/Services";
import { CityType } from "@/Types";
import { slugifyPharmacyUrl } from "@/utils";
import { revalidatePath } from "next/cache";

export const UpdateList = async () => {
  const cityListResult = await GetCityListServiceRedis();
  if (!cityListResult || !cityListResult.isSuccess) {
    return "Error";
  }

  const cityList = cityListResult.entities as CityType[];

  for (const city of cityList) {
    revalidatePath(slugifyPharmacyUrl({ cityName: city.cityName }));
    if (city.districtList?.length) {
      for (const distirct of city.districtList) {
        revalidatePath(
          slugifyPharmacyUrl({
            cityName: city.cityName,
            districtName: distirct,
          }),
        );
      }
    }
  }
  return "Success";
};

export const fetchList = async () => {
  const cityList = await GetCityListWithDistricts();
  if (!cityList) {
    return "Error";
  }

  for (const city of cityList) {
    try {
      const cityResponse = await fetch(
        `https://www.nobetcieczanelistesi.org${slugifyPharmacyUrl({ cityName: city.cityName })}`,
      );
      if (cityResponse.ok) {
        console.log(city.cityName, "Ok");
      }
    } catch (cityError) {
      console.log(cityError);
    }
    if (city.districtList?.length) {
      for (const distirct of city.districtList) {
        try {
          const distirctResponse = await fetch(
            `https://www.nobetcieczanelistesi.org${slugifyPharmacyUrl({ cityName: city.cityName, districtName: distirct })}`,
          );
          if (distirctResponse.ok) {
            console.log(distirct, "Ok");
          }
        } catch (districtError) {
          console.log(districtError);
        }
      }
    }
  }
};
