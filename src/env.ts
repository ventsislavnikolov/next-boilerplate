import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    API_URL: z.string().optional(),
  },
  client: {},
  runtimeEnv: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});

export default env;
