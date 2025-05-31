"use server";

import { CityType, ResponseResult } from "@/Types";
import client from "@/utils/redis";

export type BaseServiceType = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any | null;
  url: string;
  isDynamic?: boolean;
};

export const GetCityDetailItem = async (
  citySlugUrl: string,
): Promise<CityType | undefined> => {
  const result = await client.get(`city:${citySlugUrl}`);
  return result ? (JSON.parse(result) as CityType) : undefined;
};

export const GetCityListServiceRedis = async (): Promise<
  ResponseResult<CityType> | undefined
> => {
  try {
    const cityList = await client.get("cityList");
    if (!cityList) {
      throw new Error("City List Not Found");
    }
    const result = JSON.parse(cityList!) as string[];
    return {
      isSuccess: true,
      entities: result.map((item) => ({
        cityName: item,
      })),
      entity: null,
      statusCode: 200,
      hasError: false,
      errorList: [],
    };
  } catch (error: unknown) {
    console.log(error);
  }
};

export const GetCityListWithDistricts = async () => {
  const cityKeys = [];
  let cursor = "0";

  do {
    const result = await client.scan(cursor, {
      MATCH: "city:*",
    });
    cursor = result.cursor;
    cityKeys.push(...result.keys);
  } while (cursor !== "0");

  const values = await client.mGet(cityKeys);

  const keyValuePairs: CityType[] = cityKeys.map((key, index) => {
    return JSON.parse(values[index]!) as CityType;
  });

  return keyValuePairs;
};
