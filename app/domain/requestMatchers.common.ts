import { z } from "zod";

export const createRequestMatcherSchema = z.object({
  body: z.string(),
  header: z.string(),
  method: z.string(),
  responseBody: z.string(),
  responseStatus: z.coerce.number(),
  url: z.string(),
});
