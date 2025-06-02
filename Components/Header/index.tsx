import dynamic from "next/dynamic";
import { GetCityListServiceRedis } from "@/Services";
import { CityType } from "@/Types";
const HeaderBottom = dynamic(() => import("./HeaderBottom"));
const HeaderTop = dynamic(() => import("./HeaderTop"));

export default async function Header() {
  const cityResult = await GetCityListServiceRedis();
  if (!cityResult || !cityResult.isSuccess) {
    throw new Error(cityResult?.errorList.join(","));
  }
  return (
    <header className="block w-full bg-white">
      <HeaderTop cityList={cityResult.entities as CityType[]} />
      <HeaderBottom />
    </header>
  );
}
