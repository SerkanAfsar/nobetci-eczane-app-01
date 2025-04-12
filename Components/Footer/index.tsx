import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary mt-auto block w-full text-white">
      <section className="container mx-auto flex flex-wrap gap-6 py-6 md:flex-nowrap">
        <div className="md:flex-1/4">
          <h6 className="customTitle">Hakkımızda</h6>
          <p className="text-sm leading-6 font-light">
            Nöbetçi Eczaneler sitesi sizlere Türkiye il ve ilçelerine göre arama
            listesi sunar. Telefon ve adres detaylarına bakarak eczane
            listelerine ulaşabilirsiniz. İyi günler dileriz.
          </p>
        </div>
        <div className="md:flex-3/4">
          <h6 className="customTitle">Hızlı Menü</h6>
          <ul className="text-md flex w-full flex-wrap gap-3">
            <li>
              <Link
                href={"/nobetci-eczaneler/istanbul-nobetci-eczaneleri"}
                title="İstanbul Nöbetçi Eczaneleri"
              >
                İstanbul Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/ankara-nobetci-eczaneleri"}
                title="Ankara Nöbetçi Eczaneleri"
              >
                Ankara Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/izmir-nobetci-eczaneleri"}
                title="İzmir Nöbetçi Eczaneleri"
              >
                İzmir Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/bursa-nobetci-eczaneleri"}
                title="Bursa Nöbetçi Eczaneleri"
              >
                Bursa Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/eskisehir-nobetci-eczaneleri"}
                title="Eskişehir Nöbetçi Eczaneleri"
              >
                Eskişehir Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/adana-nobetci-eczaneleri"}
                title="Adana Nöbetçi Eczaneleri"
              >
                Adana Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/konya-nobetci-eczaneleri"}
                title="Konya Nöbetçi Eczaneleri"
              >
                Konya Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/kayseri-nobetci-eczaneleri"}
                title="Kayseri Nöbetçi Eczaneleri"
              >
                Kayseri Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/kocaeli-nobetci-eczaneleri"}
                title="Bursa Nöbetçi Eczaneleri"
              >
                Kocaeli Nöbetçi Eczaneleri
              </Link>
            </li>

            <li>
              <Link
                href={"/nobetci-eczaneler/malatya-nobetci-eczaneleri"}
                title="Malatya Nöbetçi Eczaneleri"
              >
                Malatya Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/elazig-nobetci-eczaneleri"}
                title="Elazığ Nöbetçi Eczaneleri"
              >
                Elazığ Nöbetçi Eczaneleri
              </Link>
            </li>

            <li>
              <Link
                href={"/nobetci-eczaneler/mugla-nobetci-eczaneleri"}
                title="Muğla Nöbetçi Eczaneleri"
              >
                Muğla Nöbetçi Eczaneleri
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="block w-full bg-black text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-3 py-3 md:justify-between">
          <span>Copyright {new Date().getFullYear()} © Nöbetçi Eczaneler</span>
          <div>
            Powered By{" "}
            <Link
              href={"https://www.linkedin.com/in/serkanafsar"}
              title="Serkan Afşar"
              className="underline"
              target="_blank"
              rel="nofollow"
            >
              JesterColony
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
