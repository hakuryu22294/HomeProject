/* eslint-disable @typescript-eslint/no-explicit-any */
export type actionFunction = (
  prevSate: any,
  formData: FormData
) => Promise<{ message: string }>;
