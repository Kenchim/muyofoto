import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: '6lc2d79a5f',
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
  });
  