import img from "../../public/images/nobetcilogo.svg";
import CustomImage from "../Common/CustomImage";

export type InfoItemType = {
  title: string;
  description: string;
};

export const data: InfoItemType[] = [
  {
    title: "İl Seçiniz",
    description: "Aramak İstediğiniz İli Seçiniz",
  },
  {
    title: "İlçe Seçiniz",
    description: "Aramak İstediğiniz İlçeyi Seçiniz",
  },
  {
    title: "Liste Karşınızda",
    description: "Eczane Listesi Eksiksiz Şekilde Karşınızda",
  },
  {
    title: "Detaylı Bilgi",
    description: "Detaylı Nöbetçi Eczane Bilgileri",
  },
];
export default function InfoSection() {
  return (
    <section className="block w-full py-12">
      <div className="container mx-auto flex flex-col gap-12">
        <h3 className="relative block w-full text-center text-3xl font-medium uppercase after:absolute after:-bottom-3 after:left-1/2 after:h-[3px] after:w-[100px] after:-translate-x-1/2 after:rounded-md after:bg-black after:content-['']">
          Türkiye Nöbetçi Eczane Listesi
        </h3>

        <div className="flexCenter infoItem w-full flex-wrap items-start justify-between gap-6 xl:flex-nowrap xl:justify-between">
          {data.map((item, key) => (
            <InfoItem
              key={key}
              description={item.description}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoItem({ description, title }: InfoItemType) {
  return (
    <div className="flexCenter group my-4 w-full shrink-0 grow-0 flex-col justify-start gap-6 md:w-auto md:flex-1/3 xl:my-0 xl:flex-1/4">
      <div className="flexCenter bg-primary/10 relative size-28 shrink-0 grow-0 rounded-full">
        <CustomImage
          src={img}
          width={40}
          height={40}
          title="Nöbetçi Eczaneler"
          className="block"
        />
      </div>
      <div className="flexCenter w-full flex-col gap-3 text-center">
        <h5 className="font-medium">{title}</h5>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
