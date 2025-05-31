import CustomSeoTags from "@/Components/Common/CustomSeoTags";
import PharmacyItem from "@/Components/Content/PharmacyItem";
import { GetCityDetailItem, GetCityListWithDistricts } from "@/Services";
import { slugifyPharmacyUrl, slugUrl } from "@/utils";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { cityName, districtName } = await getDistrictAndCityName(slug);
  const value = districtName
    ? `${cityName} ${districtName} Nöbetçi Eczaneleri`
    : `${cityName} Nöbetçi Eczaneleri`;

  const url = `${process.env.NEXT_PUBLIC_SITE_NAME}${slugifyPharmacyUrl({ cityName, districtName })}`;

  return {
    title: value,
    description: `${value} | ${value} Adres ve Telefon Numaraları`,
    robots: "index,follow",
    publisher: "Nöbetçi Eczane",
    authors: [
      {
        name: "Nöbetçi Eczane",
        url: process.env.NEXT_PUBLIC_SITE_NAME,
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

const getDistrictAndCityName = async (slug: string[]) => {
  const cityDetail = await GetCityDetailItem(slug[0]);

  let pharmacies = cityDetail?.pharmacies;
  if (slug.length == 2) {
    pharmacies = pharmacies?.filter((a) => slugUrl(a.districtName!) == slug[1]);
  }
  const cityName = cityDetail?.cityName ?? "";
  const districtName =
    slug.length == 2 && pharmacies?.length
      ? pharmacies[0].districtName
      : undefined;
  return {
    cityName,
    districtName,
    pharmacies,
  };
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const { cityName, districtName, pharmacies } =
    await getDistrictAndCityName(slug);

  return (
    <>
      <h4 className="bg-primary mb-3 block w-full rounded-md p-3 text-center text-base font-bold text-white uppercase lg:text-left lg:text-lg">
        {new Date().toLocaleString()} {"-"} {cityName}
        {districtName && `- ${districtName}`} Nöbetçi Eczaneleri{" "}
      </h4>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <CustomSeoTags cityName={cityName} districtName={districtName} />

        {pharmacies?.map((item, key) => (
          <PharmacyItem pharmacy={item} key={key} />
        ))}
      </div>
    </>
  );
}

export type SlugType = {
  slug: string[];
};

export async function generateStaticParams(): Promise<SlugType[]> {
  const slugList: SlugType[] = [];
  const cityListResult = await GetCityListWithDistricts();

  for (const city of cityListResult) {
    const citySlugUrl = slugUrl(`${city.cityName} nöbetçi eczaneleri`);
    slugList.push({ slug: [citySlugUrl] });

    if (city.districtList?.length) {
      for (const distict of city.districtList) {
        slugList.push({
          slug: [citySlugUrl, slugUrl(distict)],
        });
      }
    }
  }

  return slugList;
}

export const dynamic = "force-static";

export const revalidate = 60;
