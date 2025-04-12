import CustomSeoTags from "@/Components/Common/CustomSeoTags";
import CityListWrapper from "@/Components/Content/CityListWrapper";
import HeroSection from "@/Components/Content/HeroSection";
import InfoSection from "@/Components/Content/InfoSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Türkiye İl İlçe Nöbetçi Eczane Listesi",
  description: "Türkiye İl İlçe Nöbetçi Eczane Numaraları",
  openGraph: {
    title: "Türkiye İl İlçe Nöbetçi Eczane Listesi",
    description: "Türkiye İl İlçe Nöbetçi Eczane Numaraları",
    url: "https://www.nobetcieczanelistesi.org",
  },
};

export default function Home() {
  return (
    <>
      <CustomSeoTags />
      <HeroSection />
      <InfoSection />
      <CityListWrapper />
    </>
  );
}
