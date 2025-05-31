import { GetCityDetailItem } from "@/Services";
import { cn, slugifyPharmacyUrl, slugUrl } from "@/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ slug: string[] }>;
  children: React.ReactNode;
}) {
  const { slug } = await params;
  const selectedCity = await GetCityDetailItem(slug[0]);

  if (!selectedCity) {
    return notFound();
  }

  const districtUrl = slug[1];

  const selectedDistrict = selectedCity.districtList?.find(
    (a) => slugUrl(a!) == districtUrl,
  );

  const districtExists =
    districtUrl && selectedCity.districtList?.length && selectedDistrict;

  if (districtUrl && !districtExists) {
    return notFound();
  }
  if (!selectedCity.pharmacies?.length) {
    return (
      <section className="bg-primary flex h-full flex-auto items-center justify-center py-4 text-center text-white">
        <h1 className="text-2xl font-semibold text-white uppercase">
          {`"${selectedCity.cityName}"`} İline Ait Eczaneler Hazırlanmaktadır..
        </h1>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <div className="my-6 flex w-full flex-auto items-center justify-between">
        <nav className="block w-full">
          <ul className="flex flex-wrap items-center justify-start gap-1 font-bold md:flex-row">
            <li className="after: relative after:pl-1 after:content-['>']">
              <Link href={"/"} title="Anasayfa">
                Anasayfa
              </Link>
            </li>
            <li className="after: relative after:pl-1 after:content-['>']">
              <Link href={"/nobetci-eczaneler"} title="Nöbetçi Eczaneler">
                Nöbetçi Eczaneler
              </Link>
            </li>
            <li
              className={cn(
                selectedDistrict &&
                  "after:relative after:pl-1 after:content-['>']",
              )}
            >
              <Link
                href={slugifyPharmacyUrl({ cityName: selectedCity.cityName })}
                title={`${selectedCity.cityName} Nöbetçi Eczaneleri`}
              >
                {selectedCity.cityName}
              </Link>
            </li>
            {selectedDistrict && (
              <li>
                <Link
                  href={slugifyPharmacyUrl({
                    cityName: selectedCity.cityName,
                    districtName: selectedDistrict,
                  })}
                  title={`${selectedCity} ${selectedDistrict} Nöbetçi Eczaneleri`}
                >
                  {selectedDistrict}
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div className="my-6 flex w-full flex-col gap-6 lg:flex-row">
        <aside className="flex-auto md:flex-1/4">
          <nav className="block w-full">
            <ul className="flex w-full flex-col gap-3">
              {selectedCity.districtList?.map((item, key) => (
                <li key={key}>
                  <Link
                    title={`${selectedCity} ${item} Nöbetçi Eczaneleri`}
                    className="bg-primary block w-full rounded-md p-3 text-white"
                    href={slugifyPharmacyUrl({
                      cityName: selectedCity.cityName,
                      districtName: item,
                    })}
                  >
                    {item.replace("&nbsp;", " ")} Nöbetçi Eczaneleri
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <div className="flex-auto md:flex-3/4">{children}</div>
      </div>
    </section>
  );
}
