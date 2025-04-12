import { PharmacyType } from "@/Types";
import img from "../../public/images/nobetcilogo.svg";
import CustomImage from "../Common/CustomImage";

export default function PharmacyItem({ pharmacy }: { pharmacy: PharmacyType }) {
  return (
    <div className="border-primary flex w-full flex-col gap-3 overflow-hidden rounded-md border-2 text-sm text-black shadow">
      <span className="bg-primary block shrink-0 grow-0 p-3 text-center text-white">
        {pharmacy.eczaneAdi}
      </span>
      <div className="flex flex-auto items-start gap-3 px-3 pb-3">
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
          <b>{pharmacy.ilceAdi}</b>
          <a
            title={`${pharmacy.eczaneAdi} Telefon Numarası`}
            href={`tel:${pharmacy.telefon.replace("(", "").replace(")", "").replace(" ", "").trim()}`}
            className="mt-auto"
          >
            <span className="mr-2 font-bold">Telefon:</span>
            <span className="text-[16px] underline">{pharmacy.telefon}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
