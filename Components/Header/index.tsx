import { GetCityListService } from "@/Services";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import { CityType } from "@/Types";

export default async function Header() {
  const cityResult = await GetCityListService();
  if (!cityResult.isSuccess) {
    throw new Error(cityResult.errorList.join(","));
  }
  return (
    <header className="block w-full bg-white">
      <HeaderTop cityList={cityResult.entities as CityType[]} />
      <HeaderBottom />
    </header>
  );
}
