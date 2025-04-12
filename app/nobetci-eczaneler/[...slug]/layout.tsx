import { FindCityWithPharmacies, getDistrictList, slugUrl } from "@/utils";
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

  const result = await FindCityWithPharmacies(slug[0]);
  if (!result) {
    return notFound();
  }
  const distictList = getDistrictList(result.pharmacies);

  return (
    <section className="container mx-auto my-6 flex w-full flex-col gap-6 lg:flex-row">
      <aside className="flex-auto md:flex-1/4">
        <nav className="block w-full">
          <ul className="flex w-full flex-col gap-3">
            {distictList.map((item, key) => (
              <li key={key}>
                <Link
                  title={`${result.city.ilAdi} ${item} Nöbetçi Eczaneleri`}
                  className="bg-primary block w-full rounded-md p-3 text-white"
                  href={`/nobetci-eczaneler/${result.city.seoUrl}/${slugUrl(item)}`}
                >
                  {item} Nöbetçi Eczaneleri
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="flex-auto md:flex-3/4">{children}</div>
    </section>
  );
}
