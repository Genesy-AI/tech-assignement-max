export type LeadsFindPhoneNumbersInput = {
  leadIds: number[]
}

export type LeadsFindPhoneNumbersOutput = {
  success: boolean
  foundCount: number
  results: Array<{
    leadId: number
    phoneFound: boolean | null
  }>
  errors: Array<{
    leadId: number
    leadName: string
    error: string
  }>
}
