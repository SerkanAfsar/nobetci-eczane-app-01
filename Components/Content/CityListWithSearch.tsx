"use client";
import { CityType } from "@/Types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CityListWithSearch({ cities }: { cities: CityType[] }) {
  const [value, setValue] = useState<string>("");
  const [cityList, setCityList] = useState<CityType[]>(cities);

  useEffect(() => {
    if (value) {
      setCityList(
        cities.filter(
          (a) =>
            a.ilAdi.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1,
        ),
      );
    } else {
      setCityList(cities);
    }
  }, [value, cities]);

  return (
    <>
      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Aramak İstediğiniz İli Yazınız..."
          className="border-primary mx-auto block w-[250px] rounded-md border-2 p-3 text-sm font-bold text-black outline-none placeholder:text-center placeholder:font-bold placeholder:text-black"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="xl:grid-col-3 grid-col-12 container mt-6 grid gap-6 md:grid-cols-4">
        {cityList.length ? (
          cityList.map((item, index) => (
            <Link
              className="bg-primary hover:text-shadow flexCenter h-full min-h-24 w-full gap-6 rounded-md p-3 text-center font-bold text-white uppercase shadow transition-all duration-300 hover:scale-105 hover:font-extrabold hover:shadow-xl"
              key={index}
              href={`/nobetci-eczaneler/${item.seoUrl}`}
              title={`${item.ilAdi} Nöbetçi Eczaneleri`}
            >
              {`${item.ilAdi} Nöbetçi Eczaneleri`}
            </Link>
          ))
        ) : (
          <span className="text-primary col-span-12 block w-full text-center text-2xl font-bold">
            Sonuç Bulunamadı!...
          </span>
        )}
      </div>
    </>
  );
}
