/* eslint-disable @typescript-eslint/no-explicit-any */
export type actionFunction = (
  prevSate: any,
  formData: FormData
) => Promise<{ message: string }>;

export type PropertyCardProps = {
  image: string;
  id: string;
  name: string;
  tagline: string;
  country: string;
  price: number;
};
