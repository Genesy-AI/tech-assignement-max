import * as providers from './phoneNumberProviders'
import { FindPhoneNumberInputData } from './phoneNumberProviders/PhoneNumberProvider'

export const findPhoneWithOrionConnect = (inputData: FindPhoneNumberInputData) =>
  new providers.OrionConnectPhoneNumberProvider().findPhone(inputData)

export const findPhoneWithAstraDialer = (inputData: FindPhoneNumberInputData) =>
  new providers.AstraDialerPhoneNumberProvider().findPhone(inputData)

export const findPhoneWithNimbusLookup = (inputData: FindPhoneNumberInputData) =>
  new providers.NimbusLookupPhoneNumberProvider().findPhone(inputData)
