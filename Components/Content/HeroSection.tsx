import { CityType } from "@/Types";
import dynamic from "next/dynamic";
import { GetCityListServiceRedis } from "@/Services";
const HeroSearchSection = dynamic(() => import("./HeroSearchSection"));

export default async function HeroSection() {
  const cityResult = await GetCityListServiceRedis();
  if (!cityResult?.isSuccess) {
    return <div>{cityResult?.errorList.join(",")}</div>;
  }

  return (
    <section className="bg-primary flex h-[calc(100vh-(var(--headerTopHeight)))] w-full text-white uppercase xl:h-[calc(100vh-var(--heroSectionHeight))]">
      <div className="flexCenter container mx-auto flex flex-col gap-8 text-center xl:gap-12">
        <span className="text-3xl leading-12 font-bold xl:text-5xl">
          Türkiye Nöbetçi Eczane Listesi
        </span>
        <span className="text-xl leading-12 font-bold xl:text-3xl">
          Türkiye İl İlçe Nöbetçi Eczane Bulma Servisi
        </span>

        <HeroSearchSection cityList={cityResult.entities as CityType[]} />
      </div>
    </section>
  );
}
