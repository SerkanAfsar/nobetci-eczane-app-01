import { revalidatePath } from "next/cache";

export const revalidateCustomPath = async (url: string): Promise<void> => {
  "use server";
  revalidatePath(url);
};
