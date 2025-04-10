export default function HeroSection() {
  return (
    <section className="bg-primary flex h-[calc(100vh-(var(--headerTopHeight)))] w-full text-white uppercase xl:h-[calc(100vh-var(--heroSectionHeight))]">
      <div className="flexCenter container mx-auto flex flex-col gap-12 text-center">
        <h1 className="text-3xl leading-12 font-bold xl:text-5xl">
          Türkiye Nöbetçi Eczane Listesi
        </h1>
        <h2 className="text-xl leading-12 font-bold xl:text-3xl">
          Türkiye İl İlçe Nöbetçi Eczane Bulma Servisi
        </h2>
      </div>
    </section>
  );
}
