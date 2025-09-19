import { z } from 'zod'

const envVariablesSchema = z.object({
  DATABASE_URL: z.url(),
  ORION_CONNECT_API_KEY: z.string(),
  ASTRA_DIALER_API_KEY: z.string(),
  NIMBUS_LOOKUP_API_KEY: z.string(),
})

export const envVariables = envVariablesSchema.parse(process.env)
