export type FindPhoneNumberInputData = {
  fullName: string
  companyWebsite: string
  email: string
  jobTitle: string | null
}

export interface PhoneNumberProvider {
  baseUrl: string
  findPhone(inputData: FindPhoneNumberInputData): Promise<string | null>
}
