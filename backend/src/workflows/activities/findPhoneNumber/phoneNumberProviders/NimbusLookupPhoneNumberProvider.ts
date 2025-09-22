import axios from 'axios'
import { FindPhoneNumberInputData, PhoneNumberProvider } from './PhoneNumberProvider'
import { envVariables } from '../../../../config/envVariables'
import z from 'zod'

const nimbusRequestBodySchema = z.object({ email: z.email(), jobTitle: z.string() })

type NimbusLookupResponse = { number: number; countryCode: 'string' }

export const nimbusLookupPhoneNumberProvider: PhoneNumberProvider = {
  baseUrl: 'https://api.genesy.ai/api/tmp/nimbusLookup',
  async findPhone(inputData: FindPhoneNumberInputData): Promise<string | null> {
    const payload = nimbusRequestBodySchema.parse(inputData)

    const { data } = await axios.post<NimbusLookupResponse>(
      `${this.baseUrl}?api=${envVariables.NIMBUS_LOOKUP_API_KEY}`,
      payload
    )

    return `${data.countryCode}${data.number}`
  },
}
