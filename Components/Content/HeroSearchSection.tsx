"use client";
import { useEffect, useState } from "react";

import { useRouter } from "nextjs-toploader/app";
import CustomSelect from "../UI/CustomSelect";
import { CityType, CustomOptionsType } from "@/Types";
import { GetCustomOptions, slugifyPharmacyUrl } from "@/utils";

// const customClassNames = {
//   control: () => "control",
//   menu: () => "menu",
//   option: ({ isFocused, isSelected }: any) =>
//     `option ${isSelected ? "isSelected" : isFocused ? "isSelected" : "custom"}`,
//   singleValue: () => "singleValue",
//   input: () => "input",
// };

const customClassNames2 = {
  control: (base: any, state: any) => ({
    ...base,
    height: "100%",
    width: "230px",
    borderRadius: "0.5rem",
    backgroundColor: "#1E2939",
    padding: "0.25rem 0.5rem",
    fontSize: "0.875rem",
    color: "#fff",
    outline: "none",
    border: state.focus ? "none" : "none",
    boxShadow: "none", // outline'ı kaldırır
    borderColor: state.isFocused ? "transparent" : base.borderColor, // mavi border'ı kaldırır
    "&:hover": {
      borderColor: "transparent",
    },
  }),

  menu: (base: any) => ({
    ...base,
    zIndex: 10,
    marginTop: "0.25rem",
    borderRadius: "0.5rem",
    backgroundColor: "#ffffff",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  }),

  option: (base: any, state: any) => ({
    ...base,
    cursor: "pointer",
    padding: "0.5rem 1rem",
    backgroundColor: state.isSelected
      ? "#fff" // Tailwind blue-500
      : state.isFocused
        ? "#1e2939" // Tailwind gray-100
        : "#1e2939",
    color: state.isSelected ? "#000" : "#fff", // text-white or text-gray-800
  }),

  singleValue: (base: any) => ({
    ...base,
    color: "#fff", // Tailwind text-gray-800
  }),
  indicatorSeparator: () => ({
    display: "none", // Çizgiyi kaldırır
  }),

  input: (base: any) => ({
    ...base,
    color: "#fff", // Tailwind text-gray-800
    border: "none",
    outline: "none",
  }),

  placeholder: (base: any) => ({
    ...base,
    color: "#fff", // Tailwind text-gray-400
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: "white", // ikon rengi beyaz
    "&:hover": {
      color: "white", // hover'da da beyaz kalır
    },
  }),
};

const firstCityItem = { id: "", value: "", label: "Şehir Seçiniz" };
const firstDistrictItem = { id: "", value: "", label: "İlçe Seçiniz" };

export default function HeroSearchSection({
  cityList,
}: {
  cityList: CityType[];
}) {
  const router = useRouter();
  const [selectedCity, setSelectedCity] =
    useState<CustomOptionsType>(firstCityItem);

  const [districtList, setDistrictList] = useState<CustomOptionsType[]>([
    firstDistrictItem,
  ]);
  const [selectedDistrict, setSelectedDistrict] =
    useState<CustomOptionsType>(firstDistrictItem);

  const cityOptionList = [
    firstCityItem,
    ...GetCustomOptions(cityList, "cityName", "cityName"),
  ];

  useEffect(() => {
    const process = async () => {
      setSelectedDistrict(firstDistrictItem);
      const response = await fetch(`/api/districtList`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ cityName: selectedCity.value }),
      });
      if (response.ok) {
        const result = (await response.json()) as CustomOptionsType[];
        setDistrictList([firstDistrictItem, ...result]);
        setSelectedDistrict(firstDistrictItem);
      } else {
        console.log(response.status);
      }
    };
    process();
  }, [selectedCity]);

  const handleClick = () => {
    if (selectedCity.label) {
      return router.push(
        slugifyPharmacyUrl({
          cityName: selectedCity.label,
          districtName: selectedDistrict.value
            ? selectedDistrict?.label
            : undefined,
        }),
      );
    }
  };

  return (
    <div className="flex max-w-full flex-col justify-between gap-3 rounded-md bg-white p-3 shadow md:flex-row">
      <CustomSelect
        options={cityOptionList}
        placeholder="Sehir Seçiniz"
        styles={customClassNames2}
        onChange={(item) => setSelectedCity(item as CustomOptionsType)}
        noOptionsMessage={() => "Şehir Bulunamadı"}
      />
      <CustomSelect
        options={districtList}
        placeholder="İlçe Seçiniz"
        onChange={(item) => setSelectedDistrict(item as CustomOptionsType)}
        // classNames={customClassNames}
        styles={customClassNames2}
        value={selectedDistrict}
        noOptionsMessage={() => "İlçe Bulunamadı"}
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
