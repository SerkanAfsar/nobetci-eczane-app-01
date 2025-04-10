import Link from "next/link";
import img from "../../public/images/Pharmacy.png";

import CustomImage from "../Common/CustomImage";
export type HeaderTopLinkType = {
  title: string;
  url: string;
};
export default function HeaderTopLink({ title, url }: HeaderTopLinkType) {
  return (
    <Link
      className="flex items-center justify-center gap-3 font-semibold text-black uppercase"
      href={url}
      title={title}
    >
      <span className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
        <CustomImage src={img} title={title} className="h-6 w-6" />
      </span>
      <span>{title}</span>
    </Link>
  );
}
