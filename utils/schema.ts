/* eslint-disable @typescript-eslint/no-unused-vars */
import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, { message: "min length is 2" }),
  lastName: z.string().min(2, { message: "min length is 2" }),
  username: z.string().min(2, { message: "min length is 2" }),
});
