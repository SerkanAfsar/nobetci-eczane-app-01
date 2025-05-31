export type ResponseResult<T> = {
  entities: T[] | null;
  isSuccess: boolean;
  hasError: boolean;
  errorList: string[];
  statusCode: number;
  entity: T | null;
};

export type LinkUrlType =
  | `/nobetci-eczaneler/${string}`
  | `/nobetci-eczaneler/${string}/${string}`;

export type NavbarLinkType = {
  title: string;
  link: LinkUrlType;
};

// export type PharmacyType = {
//   eczaneAdi: string;
//   ilceAdi: string;
//   telefon: string;
//   adres: string;
//   hasMap: boolean;
//   latitude: string;
//   longitude: string;
//   guidKey: string;
//   cityName?: string;
//   setMap?: (lat: string, long: string) => void;
// };

// export type CityPharmacyType = {
//   city: CityType;
//   pharmacies: PharmacyType[];
// };

export type CityType = {
  cityName: string;
  url?: string;
  pharmacies?: Pharmacies[];
  districtList?: string[];
};
export type Pharmacies = {
  districtName?: string;
  name?: string;
  address?: string;
  phone?: string;
  cityName?: string;
};

export type CustomOptionsType = {
  id: string | number;
  value: string;
  label?: string;
};
