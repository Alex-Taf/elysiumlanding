export interface IGetOptionLabel {
    (option: Record<string, string>): string
}

export interface IPhoneMaskInfo {
    countryCode: string,
    countryName: string,
    countryMask: string,
    countryMaskPlaceholder: string,
    value?: string
}
