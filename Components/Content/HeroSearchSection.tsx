"use client";
import { useEffect, useState } from "react";
import CustomCombobox, { CustomOptionType } from "../UI/CustomCombobox";
import { GetCityPharmacies } from "@/Services";
import { getDistrictList, slugUrl } from "@/utils";
import { PharmacyType } from "@/Types";
import { useRouter } from "nextjs-toploader/app";

const firstDistrictElement: CustomOptionType = {
  id: "",
  value: "ilçe Seçiniz",
};

export default function HeroSearchSection({
  cityList,
}: {
  cityList: CustomOptionType[];
}) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState<CustomOptionType>(
    cityList[0],
  );
  const [districtList, setDistrictList] = useState<CustomOptionType[]>([
    firstDistrictElement,
  ]);

  const [selectedDistrict, setSelectedDistrict] =
    useState<CustomOptionType>(firstDistrictElement);

  useEffect(() => {
    const fetchDistricts = async () => {
      if (selectedCity.id) {
        const result = await GetCityPharmacies({
          id: selectedCity.id as number,
        });
        if (result.isSuccess) {
          const data: CustomOptionType[] = getDistrictList(
            result.entity?.pharmacies as PharmacyType[],
          ).map((item) => ({
            id: slugUrl(item)!,
            value: item,
          }));
          data.unshift(firstDistrictElement);
          setDistrictList(data);
        }
      }
    };
    fetchDistricts();
  }, [selectedCity]);

  const handleClick = () => {
    let url = "/nobetci-eczaneler";
    if (selectedCity.id) {
      url += `/${slugUrl(`${selectedCity.value} nöbetçi eczaneleri`)}`;
    }
    if (selectedDistrict.id) {
      url += `/${slugUrl(selectedDistrict.value)}`;
    }
    return router.push(url);
  };

  return (
    <div className="flex max-w-3xl flex-col justify-between gap-3 rounded-md bg-white p-3 shadow md:flex-row">
      <CustomCombobox
        onChange={setSelectedCity}
        options={cityList}
        className="shadow"
      />
      <CustomCombobox
        options={districtList}
        className="shadow"
        onChange={setSelectedDistrict}
      />
      <button
        type="button"
        onClick={handleClick}
        className="bg-primary flex-auto cursor-pointer rounded-md p-3 font-bold text-white uppercase"
      >
        ECZANE ARA
      </button>
    </div>
  );
}
