import CustomSeoTags from "@/Components/Common/CustomSeoTags";
import CityListWrapper from "@/Components/Content/CityListWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Türkiye İl İlçe Nöbetçi Eczane Listesi",
  description: "Türkiye İl İlçe Nöbetçi Eczane Numaraları",
  openGraph: {
    title: "Türkiye İl İlçe Nöbetçi Eczane Listesi",
    description: "Türkiye İl İlçe Nöbetçi Eczane Numaraları",
    url: "https://www.nobetcieczanelistesi.org/nobetci-eczaneler",
  },
};

export default function Page() {
  return (
    <>
      <CustomSeoTags />
      <CityListWrapper />
    </>
  );
}
