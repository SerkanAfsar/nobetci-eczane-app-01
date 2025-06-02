import dynamic from "next/dynamic";

const CustomSeoTags = dynamic(
  () => import("../../Components/Common/CustomSeoTags"),
);
const CityListWrapper = dynamic(
  () => import("../../Components/Content/CityListWrapper"),
);

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Türkiye İl İlçe Nöbetçi Eczane Listesi",
  description: "Türkiye İl İlçe Nöbetçi Eczane Numaraları",
  robots: "index,follow",
  publisher: "Nöbetçi Eczane",
  authors: [
    {
      name: "Nöbetçi Eczane",
      url: "https://www.nobetcieczanelistesi.org/nobetci-eczaneler",
    },
  ],

  openGraph: {
    title: "Türkiye İl İlçe Nöbetçi Eczane Listesi",
    description: "Türkiye İl İlçe Nöbetçi Eczane Numaraları",
    url: "https://www.nobetcieczanelistesi.org/nobetci-eczaneler",
    locale: "tr_TR",
    siteName: "Nöbetçi Eczane",
    authors: ["Nöbetçi Eczane"],
    emails: ["info@nobetcieczanelistesi.org"],
  },

  twitter: {
    card: "summary",
    description: "Türkiye İl - İlçe Nöbetçi Eczane Listesi",
    title: "Türkiye İl - İlçe Nöbetçi Eczane Listesi",
    creator: "@nobetcieczane",
  },

  alternates: {
    canonical: `https://www.nobetcieczanelistesi.org/nobetci-eczaneler`,
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
