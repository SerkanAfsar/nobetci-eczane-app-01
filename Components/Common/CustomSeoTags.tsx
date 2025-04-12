export type CustomSeoTagsType = {
  cityName?: string | null;
  districtName?: string | null;
};
export default function CustomSeoTags({
  cityName,
  districtName,
}: CustomSeoTagsType) {
  const value = cityName
    ? districtName
      ? `${cityName} ${districtName}`
      : `${cityName}`
    : "Türkiye İl İlçe";

  return (
    <>
      <h1 className="hidden">{value} Nöbetçi Eczane Listesi</h1>
      <h2 className="hidden">{value} En Yakın Nöbetçi Eczane Listesi</h2>
      <h3 className="hidden">{value} Nöbetçi Eczaneleri</h3>
      <h4 className="hidden">{value} Nöbetçi Eczanele Telefon Numaraları</h4>
      <h5 className="hidden">{value} Nöbetçi Eczane Ara</h5>
      <h6 className="hidden">{value} Nöbetçi Eczanele Adresleri</h6>
    </>
  );
}
