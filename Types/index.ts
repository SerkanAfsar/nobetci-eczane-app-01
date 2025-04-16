export type ResponseResult<T> = {
  entities: T[] | null;
  isSuccess: boolean;
  hasError: boolean;
  errorList: string[];
  statusCode: number;
  entity: T | null;
};

export type CityType = {
  ilid: number;
  ilAdi: string;
  kaynakUrl: string;
  seoUrl: string;
  apiUrl: `https://localhost:44331/api/Iller/Eczaneler/${number}`;
};

export type LinkUrlType =
  | `/nobetci-eczaneler/${string}`
  | `/nobetci-eczaneler/${string}/${string}`;

export type NavbarLinkType = {
  title: string;
  link: LinkUrlType;
};

export type PharmacyType = {
  eczaneAdi: string;
  ilceAdi: string;
  telefon: string;
  adres: string;
  hasMap: boolean;
  latitude: string;
  longitude: string;
  guidKey: string;
  cityName?: string;
  setMap?: (lat: string, long: string) => void;
};

export type CityPharmacyType = {
  city: CityType;
  pharmacies: PharmacyType[];
};
