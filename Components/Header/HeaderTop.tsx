import logo from "../../public/images/nobetcilogo.svg";
import CustomImage from "../Common/CustomImage";
import HeaderTopLink from "./HeaderTopLink";
export default function HeaderTop() {
  return (
    <section className="block w-full">
      <div className="container mx-auto flex h-[calc(var(--headerTopHeight))] items-center justify-between">
        <div className="inline-flex items-center justify-between gap-3">
          <CustomImage
            src={logo}
            width={50}
            height={50}
            title="Nöbetçi Eczaneler"
          />
        </div>
        <div className="hidden items-center justify-center gap-3 text-sm xl:flex">
          <HeaderTopLink title="İstanbul Nöbetçi Eczaneleri" url="/" />
          <HeaderTopLink title="Ankara Nöbetçi Eczaneleri" url="/" />
          <HeaderTopLink title="İzmir Nöbetçi Eczaneleri" url="/" />
        </div>
      </div>
    </section>
  );
}
