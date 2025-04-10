export type ResponseResult<T> = {
  entities: T[];
  isSuccess: boolean;
  hasError: boolean;
  errorList: string[];
  statusCode: number;
};

export type CityType = {
  ilid: number;
  ilAdi: string;
  kaynakUrl: string;
  seoUrl: string;
  apiUrl: `https://localhost:44331/api/Iller/Eczaneler/${number}`;
};
