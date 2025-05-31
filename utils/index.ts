import { CustomOptionsType, NavbarLinkType, Pharmacies } from "@/Types";
import clsx from "clsx";
import { ClassValue } from "clsx";

import slugify from "slugify";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(args));
};

export const apiUrlConstant = "https://localhost:44331/api/Iller/Eczaneler/";

export const NavbarLinks: NavbarLinkType[] = [
  {
    link: "/nobetci-eczaneler/istanbul-nobetci-eczaneleri",
    title: "İstanbul Nöbetçi Eczaneleri",
  },
  {
    link: "/nobetci-eczaneler/ankara-nobetci-eczaneleri",
    title: "Ankara Nöbetçi Eczaneleri",
  },
  {
    link: "/nobetci-eczaneler/izmir-nobetci-eczaneleri",
    title: "İzmir Nöbetçi Eczaneleri",
  },
];

// export const FindCityWithPharmacies = async (
//   slug: string,
// ): Promise<CityPharmacyType | null> => {
//   const cityResult = await GetCityListService();
//   if (!cityResult.isSuccess) {
//     throw new Error(cityResult.errorList.join(","));
//   }
//   const city = (cityResult.entities as CityType[]).find(
//     (a) => a.seoUrl == slug,
//   );
//   if (!city) {
//     return notFound();
//   }
//   const cityPharmacy = await GetCityPharmacies({ id: city.ilid });
//   if (!cityPharmacy.isSuccess) {
//     throw new Error(cityPharmacy.errorList.join(","));
//   }

//   return cityPharmacy.entity ?? null;
// };

export const slugUrl = (value: string): string => {
  if (value) {
    return slugify(value, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: true, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: "tr", // language code of the locale to use
      trim: true, // trim leading and trailing replacement chars, defaults to `true`
    });
  }
  return "not defined";
};

export const findDistrictName = (districtList: string[], slugText: string) => {
  return districtList.find((a) => slugUrl(a.toLocaleLowerCase()) == slugText);
};
// export const formatTime = (date: Date) => {
//   const pad = (num: number) => String(num).padStart(2, "0");
//   const hours = pad(date.getHours());
//   const minutes = pad(date.getMinutes());
//   const seconds = pad(date.getSeconds());
//   return `${date.toLocaleString()}`;
// };

export const slugifyPharmacyUrl = ({
  cityName,
  districtName,
}: {
  cityName: string;
  districtName?: string;
}) => {
  let url = `/nobetci-eczaneler/` + slugUrl(`${cityName} nöbetçi eczaneleri`);
  if (districtName) {
    url += `/${slugUrl(districtName)}`;
  }
  return url;
};

export function GetCustomOptions<
  T extends object,
  FieldOne extends keyof T,
  FieldTwo extends keyof T,
>(arr: T[], fieldOne: FieldOne, fieldTwo: FieldTwo): CustomOptionsType[] {
  return arr.map((item) => ({
    id: item[fieldOne] as string | number,
    value: item[fieldTwo] as string,
    label: item[fieldTwo] as string,
  }));
}
export function GetDistrictListCustomOptions(
  pharmacyArr: Pharmacies[],
): CustomOptionsType[] {
  const districtList = new Set(pharmacyArr.map((item) => item.districtName));
  const newArr: CustomOptionsType[] = [...districtList].map((item) => ({
    id: item!,
    value: item!,
    label: item!,
  }));

  return GetCustomOptions(newArr, "id", "label");
}
