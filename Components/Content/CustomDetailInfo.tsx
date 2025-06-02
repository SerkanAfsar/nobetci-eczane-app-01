export type CityDetailInfoProps = {
  cityName: string;
  districtName?: string;
};

export default function CityDetailInfo({
  cityName,
  districtName,
}: CityDetailInfoProps) {
  return (
    <section className="bg-primary mb-6 flex w-full flex-col gap-2 rounded-md p-3 text-center text-sm leading-8 text-white capitalize">
      <h2 className="block text-center text-lg leading-8 font-semibold uppercase">
        {new Date().toLocaleDateString("tr-TR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
        <br />
        {cityName} {districtName && districtName} Nöbetçi Eczaneleri
      </h2>
      <p>
        {cityName} {districtName && districtName} Nöbetçi Eczaneler
        Pazartesi,Salı,Çarşamba,Perşembe Cuma günleri genelde akşam saat 18.00
        de başlar,ertesi gün sabahleyin saat 08.00 de sona erer.
      </p>
      <p>
        {cityName} {districtName && districtName} Nöbetçi Eczaneler Cumartesi ve
        Pazar günleri genelde sabahleyin saat 08.00 de başlar,ertesi gün
        sabahleyin saat 08.00 de sona erer.
      </p>
    </section>
  );
}
