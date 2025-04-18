import CustomSeoTags from "@/Components/Common/CustomSeoTags";
import PharmacyItem from "@/Components/Content/PharmacyItem";
import { GetCityListService, GetCityPharmacies } from "@/Services";
import { CityType, PharmacyType } from "@/Types";
import {
  FindCityWithPharmacies,
  findDistrictName,
  getDistrictList,
  slugUrl,
} from "@/utils";
import { Metadata } from "next";

import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await FindCityWithPharmacies(slug[0]);
  if (!result) {
    return {
      title: "Nöbetçi Eczane",
      description: `Nöbetçi Eczane Adres ve Telefon Numaraları`,
      openGraph: {
        title: "Nöbetçi Eczane",
        description: `Nöbetçi Eczane Adres ve Telefon Numaraları`,
      },
    };
  }

  let districtName: string | undefined = "";
  if (slug.length == 2) {
    const districtList = getDistrictList(result.pharmacies);
    districtName = findDistrictName(districtList, slug[1]);
  }

  const value = districtName
    ? `${result.city.ilAdi} ${districtName} Nöbetçi Eczaneleri`
    : `${result.city.ilAdi} Nöbetçi Eczaneleri`;

  let url = `https://www.nobetcieczanelistesi.org/${result.city.seoUrl}`;

  if (districtName) {
    url += "/" + slugUrl(districtName);
  }

  return {
    title: value,
    description: `${value} | ${value} Adres ve Telefon Numaraları`,
    robots: "index,follow",
    publisher: "Nöbetçi Eczane",
    authors: [
      {
        name: "Nöbetçi Eczane",
        url: "https://www.nobetcieczanelistesi.org",
      },
    ],

    openGraph: {
      title: value,
      description: `${value} | ${value} Adres ve Telefon Numaraları`,
      url,
      locale: "tr_TR",
      siteName: "Nöbetçi Eczane",
      authors: ["Nöbetçi Eczane"],
      emails: ["info@nobetcieczanelistesi.org"],
    },

    twitter: {
      card: "summary",
      description: `${value} | ${value} Adres ve Telefon Numaraları`,
      title: value,
      creator: "@nobetcieczane",
    },

    alternates: {
      canonical: url,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const result = await FindCityWithPharmacies(slug[0]);

  if (!result) {
    return notFound();
  }

  let districtName: string | undefined = "";
  if (slug.length == 2) {
    const districtList = getDistrictList(result.pharmacies);
    districtName = findDistrictName(districtList, slug[1]);
    if (!districtName) return notFound();
  }
  if (slug.length > 2) {
    return notFound();
  }
  const pharmacyData: PharmacyType[] = districtName
    ? result.pharmacies.filter((a) => a.ilceAdi == districtName)
    : result.pharmacies;

  return (
    <>
      <h4 className="bg-primary mb-3 block w-full rounded-md p-3 text-center text-base font-bold text-white uppercase lg:text-left lg:text-lg">
        {new Date().toLocaleDateString()} {"-"} {result.city.ilAdi}
        {districtName && `- ${districtName}`} Nöbetçi Eczaneleri
      </h4>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <CustomSeoTags
          cityName={result.city.ilAdi}
          districtName={districtName}
        />

        {pharmacyData.map((item, key) => (
          <PharmacyItem
            pharmacy={{ ...item, cityName: result.city.ilAdi }}
            key={key}
          />
        ))}
      </div>
    </>
  );
}

export type SlugType = {
  slug: string[];
};

export async function generateStaticParams(): Promise<SlugType[]> {
  const cityList = await GetCityListService();
  if (!cityList.isSuccess) {
    return [];
  }
  const slugList: SlugType[] = [];
  const data = cityList.entities as CityType[];
  for (let i = 0; i < data.length; i++) {
    const city = data[i];
    const result = await GetCityPharmacies({ id: city.ilid });
    slugList.push({ slug: [city.seoUrl] });
    const pharmacyList = result.entity?.pharmacies as PharmacyType[];

    const districtList = Array.from(
      new Set(pharmacyList.map((a) => a.ilceAdi)),
    );
    for (let k = 0; k < districtList.length; k++) {
      const element = slugUrl(districtList[k].toLocaleLowerCase());
      slugList.push({ slug: [city.ilAdi, element!] });
    }
  }
  return slugList;
}

export const dynamic = "force-static";

export const revalidate = 60;
