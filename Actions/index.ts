"use server";

import { revalidatePath } from "next/cache";

export const revalidateCustomPath = async (url: string): Promise<void> => {
  await new Promise((resolve) => {
    revalidatePath(url);
    resolve("");
  });
};
