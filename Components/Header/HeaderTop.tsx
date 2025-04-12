"use client";
import { cn, NavbarLinks } from "@/utils";
import logo from "../../public/images/nobetcilogo.svg";
import CustomImage from "../Common/CustomImage";
import HeaderTopLink from "./HeaderTopLink";
import { CityType } from "@/Types";
import { useEffect, useRef, useState } from "react";
import HeaderAside from "./HeaderAside";
import menuIcon from "../../public/images/hamburger.png";

export default function HeaderTop({ cityList }: { cityList: CityType[] }) {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const headerTopSectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handler = () => {
      if (headerTopSectionRef.current) {
        if (window.scrollY >= headerTopSectionRef.current.clientHeight) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [headerTopSectionRef]);

  return (
    <section
      className={cn(
        "z-10 block w-full bg-white",
        isScrolled && "animate-animateMenu fixed top-0 right-0 left-0 shadow",
      )}
      ref={headerTopSectionRef}
    >
      <div className="container mx-auto flex h-[calc(var(--headerTopHeight))] items-center justify-between">
        <div className="inline-flex items-center justify-between gap-3">
          <CustomImage
            src={logo}
            width={50}
            height={50}
            title="Nöbetçi Eczaneler"
          />
          <span className="font-bold uppercase md:text-2xl">
            Nöbetçi Eczaneler
          </span>
        </div>
        <div className="hidden items-center justify-center gap-3 text-sm xl:flex">
          {NavbarLinks.map((item, index) => (
            <HeaderTopLink title={item.title} url={item.link} key={index} />
          ))}
        </div>
        <div
          className="block size-8 xl:hidden"
          onClick={() => setIsOpened(!isOpened)}
        >
          <CustomImage
            src={menuIcon}
            width={32}
            height={32}
            title="Nöbetçi Eczaneler"
            className="block"
          />
        </div>
        <HeaderAside
          cityList={cityList}
          isOpened={isOpened}
          setIsOpened={setIsOpened}
        />
      </div>
    </section>
  );
}
