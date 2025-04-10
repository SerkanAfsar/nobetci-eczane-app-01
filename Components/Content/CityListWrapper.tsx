import { GetCityListService } from "@/Services";
import { CityType } from "@/Types";
import Link from "next/link";
import CustomImage from "../Common/CustomImage";
import img from "../../public/images/nobetcilogo.svg";
import CityListWithSearch from "./CityListWithSearch";
import CustomAlert from "../Common/CustomAlert";

export default async function CityListWrapper() {
  const result = await GetCityListService();
  if (result.hasError || !result.isSuccess) {
    return <CustomAlert alertMessage={result.errorList.join(",")} />;
  }
  const data = result.entities as CityType[];
  return (
    <section className="bg-primary/5 block w-full py-6">
      <CityListWithSearch cities={data} />
    </section>
  );
}
