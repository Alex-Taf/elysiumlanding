export interface IMenuItem {
    title: string,
    link?: string,
    subitems?: {
        title: string,
        link?: string
    }[]  
}

export interface ISocialItem {
    id: number,
    alt: string,
    className: string,
    link: string
}

export interface IPopper {
    show: boolean;
    text: string;
}

export interface ITokenomicsItem {
    id: number;
    title: string;
    popper?: IPopper;
}

export interface IEmailStatusObject {
    statusCode: number | string,
    text: string
}

export interface IFilterate {
    (option: Record<string, string>, label: string, search: string): boolean
}

export interface IGetOptionLabel {
    (option: Record<string, string>): string
}

export interface ICountryMask {
    mask: string,
    placeholder: string
}

export interface IPhoneMaskInfo {
    countryCode: string,
    countryName: string,
    countryMask: ICountryMask | Array<ICountryMask>,
    value?: string
}
