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
                href={"/nobetci-eczaneler/istanbul"}
                title="İstanbul Nöbetçi Eczaneleri"
              >
                İstanbul Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/ankara"}
                title="Ankara Nöbetçi Eczaneleri"
              >
                Ankara Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/izmir"}
                title="İzmir Nöbetçi Eczaneleri"
              >
                İzmir Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/bursa"}
                title="Bursa Nöbetçi Eczaneleri"
              >
                Bursa Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/eskisehir"}
                title="Eskişehir Nöbetçi Eczaneleri"
              >
                Eskişehir Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/adana"}
                title="Adana Nöbetçi Eczaneleri"
              >
                Adana Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/konya"}
                title="Konya Nöbetçi Eczaneleri"
              >
                Konya Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/kayseri"}
                title="Kayseri Nöbetçi Eczaneleri"
              >
                Kayseri Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/kocaeli"}
                title="Bursa Nöbetçi Eczaneleri"
              >
                Kocaeli Nöbetçi Eczaneleri
              </Link>
            </li>

            <li>
              <Link
                href={"/nobetci-eczaneler/malatya"}
                title="Malatya Nöbetçi Eczaneleri"
              >
                Malatya Nöbetçi Eczaneleri
              </Link>
            </li>
            <li>
              <Link
                href={"/nobetci-eczaneler/elazig"}
                title="Elazığ Nöbetçi Eczaneleri"
              >
                Elazığ Nöbetçi Eczaneleri
              </Link>
            </li>

            <li>
              <Link
                href={"/nobetci-eczaneler/mugla"}
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
            >
              JesterColony
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
}
