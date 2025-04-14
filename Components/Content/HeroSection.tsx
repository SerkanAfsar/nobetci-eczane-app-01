import { GetCityListService } from "@/Services";
import HeroSearchSection from "./HeroSearchSection";
import { CityType } from "@/Types";
import { CustomOptionType } from "../UI/CustomCombobox";

export default async function HeroSection() {
  const cityResult = await GetCityListService();
  if (!cityResult.isSuccess) {
    throw new Error(cityResult.errorList.join(","));
  }
  const cityList: CustomOptionType[] = (cityResult.entities as CityType[]).map(
    (item) => ({
      id: item.ilid as number,
      value: item.ilAdi,
    }),
  );
  cityList.unshift({ id: "", value: "Şehir Seçiniz" });
  return (
    <section className="bg-primary flex h-[calc(100vh-(var(--headerTopHeight)))] w-full text-white uppercase xl:h-[calc(100vh-var(--heroSectionHeight))]">
      <div className="flexCenter container mx-auto flex flex-col gap-8 text-center xl:gap-12">
        <span className="text-3xl leading-12 font-bold xl:text-5xl">
          Türkiye Nöbetçi Eczane Listesi
        </span>
        <span className="text-xl leading-12 font-bold xl:text-3xl">
          Türkiye İl İlçe Nöbetçi Eczane Bulma Servisi
        </span>
        <HeroSearchSection cityList={cityList} />
      </div>
    </section>
  );
}
