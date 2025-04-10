"use server";

import { CityType, ResponseResult } from "@/Types";

export type BaseServiceType = {
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any | null;
  url: string;
};

export async function BaseService({
  method = "GET",
  url,
  body,
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
  })) as ResponseResult<CityType>;
}
