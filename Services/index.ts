"use server";

import { CityPharmacyType, CityType, ResponseResult } from "@/Types";

export type BaseServiceType = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any | null;
  url: string;
  isDynamic?: boolean;
};

export async function BaseService({
  method = "GET",
  url,
  body,
  isDynamic = false,
}: BaseServiceType) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/${url}`,
      {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        // cache: isDynamic ? "no-store" : "default",
      },
    );
    const result = (await response.json()) as ResponseResult<any>;
    return result;
  } catch (error: unknown) {
    const result: ResponseResult<any> = {
      entities: [],
      hasError: true,
      isSuccess: false,
      statusCode: 400,
      errorList: [],
      entity: null,
    };
    if (error instanceof Error) {
      result.errorList = [error.message];
    } else if (typeof error == "string") {
      result.errorList = [error];
    } else {
      result.errorList = ["Something went wrong"];
    }
    return result;
  }
}

export async function GetCityListService() {
  return (await BaseService({
    method: "GET",
    url: "Cities",
    isDynamic: false,
  })) as ResponseResult<CityType>;
}

export async function GetCityPharmacies({ id }: { id: number }) {
  return (await BaseService({
    method: "GET",
    url: `Pharmacies/${id}`,
    isDynamic: true,
  })) as ResponseResult<CityPharmacyType>;
}
