import axios from 'axios'
import { envVariables } from '../../../../config/envVariables'
import { FindPhoneNumberInputData, PhoneNumberProvider } from './PhoneNumberProvider'
import z from 'zod'

const astraDialerRequestBodySchema = z.object({ email: z.email() })

type AstraDialerResponse = { phoneNmbr: string | null | undefined }

export const astraDialerPhoneNumberProvider: PhoneNumberProvider = {
  baseUrl: 'https://api.genesy.ai/api/tmp/astraDialer',
  async findPhone(inputData: FindPhoneNumberInputData): Promise<string | null> {
    const payload = astraDialerRequestBodySchema.parse(inputData)

    const { data } = await axios.post<AstraDialerResponse>(this.baseUrl, payload, {
      headers: {
        apiKey: envVariables.ASTRA_DIALER_API_KEY,
      },
    })

    return data.phoneNmbr ?? null
  },
}
