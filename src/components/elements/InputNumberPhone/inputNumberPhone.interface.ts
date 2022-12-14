export interface IFilterate {
    (option: Record<string, string>, label: string, search: string): boolean
}

export interface IGetOprtionLabel {
    (option: Record<string, string>): string
}

export interface IPhoneMaskInfo {
    countryCode: string,
    countryName: string,
    countryMask: string,
    countryMaskPlaceholder: string
}
