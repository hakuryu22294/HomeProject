"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { profileSchema } from "./schema";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFiels = profileSchema.parse(rawData);
    console.log(validatedFiels);
    return { message: "profile created" };
  } catch (error) {
    console.log(error);
    return {
      message: "there was an error",
    };
  }
};
