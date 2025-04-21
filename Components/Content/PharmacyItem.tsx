"use client";
import { PharmacyType } from "@/Types";
import img from "../../public/images/nobetcilogo.svg";
import CustomImage from "../Common/CustomImage";
import { useState } from "react";
import Modal from "./Modal";

export default function PharmacyItem({ pharmacy }: { pharmacy: PharmacyType }) {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  return (
    <div className="border-primary flex w-full flex-col gap-3 overflow-hidden rounded-md border-2 text-sm text-black shadow">
      <span className="bg-primary block shrink-0 grow-0 p-3 text-center text-white">
        {pharmacy.eczaneAdi}
      </span>
      <div className="flex flex-auto items-start gap-3 px-3">
        <CustomImage
          src={img}
          width={40}
          height={40}
          title={pharmacy.eczaneAdi}
          className="shrink-0 grow-0"
        />
        <div className="flex h-full flex-auto flex-col gap-3">
          <span className="-mt-1 leading-7">
            <b className="mr-2">Adres:</b>
            {pharmacy.adres}
          </span>
          <b>
            {pharmacy.ilceAdi} / {pharmacy.cityName}
          </b>

          <a
            title={`${pharmacy.eczaneAdi} Telefon Numarası`}
            href={`tel:${pharmacy.telefon.replace("(", "").replace(")", "").replace(" ", "").trim()}`}
            className="mt-auto font-bold"
          >
            <span className="mr-2 underline">Tel (Ara) :</span>
            <span>{pharmacy.telefon}</span>
          </a>
        </div>
      </div>
      {pharmacy.hasMap && (
        <button
          type="button"
          onClick={() => {
            setModalOpened(true);
          }}
          className="bg-primary flexCenter m-3 cursor-pointer rounded-md p-2 text-white transition-all hover:scale-105 hover:font-bold"
        >
          Haritada Görüntüle
        </button>
      )}
      {modalOpened && (
        <Modal
          lat={pharmacy.latitude}
          long={pharmacy.longitude}
          pharmacyName={pharmacy.eczaneAdi}
          setVisible={setModalOpened}
          isVisible={modalOpened}
        />
      )}
    </div>
  );
}
