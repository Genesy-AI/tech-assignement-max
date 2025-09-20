import * as providers from './phoneNumberProviders'
import { FindPhoneNumberInputData } from './phoneNumberProviders/phoneNumberProvider'

export const findPhoneWithOrionConnect = (inputData: FindPhoneNumberInputData) =>
  providers.orionConnectPhoneNumberProvider.findPhone(inputData)

export const findPhoneWithAstraDialer = (inputData: FindPhoneNumberInputData) =>
  providers.astraDialerPhoneNumberProvider.findPhone(inputData)

export const findPhoneWithNimbusLookup = (inputData: FindPhoneNumberInputData) =>
  providers.nimbusLookupPhoneNumberProvider.findPhone(inputData)
