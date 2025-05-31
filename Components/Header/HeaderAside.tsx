import { CityType } from "@/Types";
import { cn, slugifyPharmacyUrl } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

export type HeaderAsideType = {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  cityList: CityType[];
};
export default function HeaderAside({
  cityList,
  isOpened,
  setIsOpened,
}: HeaderAsideType) {
  const pathName = usePathname();

  useEffect(() => {
    setIsOpened(false);
  }, [pathName, setIsOpened]);

  useLayoutEffect(() => {
    if (isOpened) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpened]);

  return (
    <aside
      className={cn(
        "inset-0 hidden h-full w-full flex-col gap-3 bg-black/80",
        isOpened && "fixed flex",
      )}
    >
      <div
        className={cn(
          "absolute top-0 right-0 bottom-0 flex w-[260px] flex-col gap-3 overflow-auto overscroll-contain bg-white transition-all",
          isOpened && "animate-asideMenu",
        )}
      >
        <div className="bg-secondary sticky inset-0 z-10 flex w-full items-center justify-between p-3 text-white">
          <span>Menü</span>
          <span
            className="mr-2 font-bold"
            onClick={(prev) => setIsOpened(!prev)}
          >
            X
          </span>
        </div>
        <ul className="flex flex-col gap-3 p-3 text-sm">
          {cityList.map((city, index) => (
            <li key={index}>
              <Link
                className="bg-primary block w-full rounded-md p-3 text-white shadow"
                href={slugifyPharmacyUrl({ cityName: city.cityName })}
                title={`${city.cityName} Nöbetçi Eczaneleri`}
              >
                {city.cityName} Nöbetçi Eczaneleri
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
