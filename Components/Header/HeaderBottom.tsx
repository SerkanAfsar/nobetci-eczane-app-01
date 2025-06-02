import dynamicImport from "next/dynamic";
import Link from "next/link";
import home from "../../public/images/home.png";
import pharmacy from "../../public/images/Pharmacy.png";
import { NavbarLinks } from "@/utils";
const CustomImage = dynamicImport(() => import("../Common/CustomImage"));

export default function HeaderBottom() {
  const itemList: { title: string; href: string; icon: any }[] = [
    {
      title: "Anasayfa",
      href: "/",
      icon: home,
    },
  ];
  NavbarLinks.forEach((item) =>
    itemList.push({
      title: item.title,
      href: item.link,
      icon: pharmacy,
    }),
  );
  return (
    <section className="bg-secondary hidden h-[calc(var(--headerBottomHeight))] w-full text-sm text-white uppercase xl:block">
      <div className="container mx-auto flex items-center justify-between">
        <nav className="flex w-full items-center justify-between">
          <ul className="flexCenter justify-start gap-6">
            {itemList.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 py-6"
                  title={item.title}
                >
                  <CustomImage
                    src={item.icon}
                    width={20}
                    height={20}
                    title={item.title}
                  />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={"/nobetci-eczaneler"}
            title="Tüm İller"
            className="bg-primary rounded-4xl px-6 py-3 font-bold"
          >
            Tüm İller
          </Link>
          {/* <Link
            href={"/deneme"}
            title="Tüm İller"
            className="bg-primary hidden rounded-4xl px-6 py-3 font-bold"
          >
            Deneme
          </Link> */}
        </nav>
      </div>
    </section>
  );
}
