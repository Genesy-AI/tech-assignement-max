import { proxyActivities } from '@temporalio/workflow'
import type * as activities from './activities'
import { FindPhoneNumberInputData } from './activities/findPhoneNumber/phoneNumberProviders/PhoneNumberProvider'

const { findPhoneWithOrionConnect, findPhoneWithAstraDialer, findPhoneWithNimbusLookup } = proxyActivities<
  typeof activities
>({
  startToCloseTimeout: '5 seconds',
  retry: {
    backoffCoefficient: 2,
    initialInterval: 3,
    maximumAttempts: 3,
  },
})

export async function findPhoneNumberWorkflow(inputData: FindPhoneNumberInputData): Promise<string | null> {
  let phoneNumber = null

  const phoneProviderActivities = [
    findPhoneWithOrionConnect,
    findPhoneWithAstraDialer,
    findPhoneWithNimbusLookup,
  ]

  for (const executeActivity of phoneProviderActivities) {
    try {
      phoneNumber = await executeActivity(inputData)

      if (phoneNumber) return phoneNumber
    } catch (e) {
      console.log(`Error finding phone number with ${executeActivity.name}`, e)
    }
  }

  return null
}
