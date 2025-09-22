import axios from 'axios'
import { envVariables } from '../../../../config/envVariables'
import { FindPhoneNumberInputData, PhoneNumberProvider } from './PhoneNumberProvider'
import z from 'zod'

const orionConnectRequestBodySchema = z.object({ fullName: z.string(), companyWebsite: z.url() })

type OrionConnectResponse = { phone: string | null }

export const orionConnectPhoneNumberProvider: PhoneNumberProvider = {
  baseUrl: 'https://api.genesy.ai/api/tmp/orionConnect',
  async findPhone(inputData: FindPhoneNumberInputData): Promise<string | null> {
    const payload = orionConnectRequestBodySchema.parse(inputData)

    const { data } = await axios.post<OrionConnectResponse>(this.baseUrl, payload, {
      headers: {
        'x-auth-me': envVariables.ORION_CONNECT_API_KEY,
      },
    })

    return data.phone
  },
}
