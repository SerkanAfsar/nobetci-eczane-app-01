import { CityType } from "@/Types";
import dynamic from "next/dynamic";
import { GetCityListServiceRedis } from "@/Services";
const CityListWithSearch = dynamic(() => import("./CityListWithSearch"));
const CustomAlert = dynamic(() => import("../Common/CustomAlert"));

export default async function CityListWrapper() {
  const result = await GetCityListServiceRedis();
  if (!result || result.hasError || !result.isSuccess) {
    return <CustomAlert alertMessage={result?.errorList.join(",") || ""} />;
  }
  const data = result.entities as CityType[];
  return (
    <section className="bg-primary/5 block w-full py-6">
      <CityListWithSearch cities={data} />
    </section>
  );
}
