import { IUseDeviceWidth, ICopyToClipboard, IGetUserLocale, IGetStatusText } from "./index.interface"
import { IEmailStatusObject } from "../interfaces"
import emailstatus from "../static/emailstatus.json"

// cw - document.documentElement.clientWidth - device screen app blank width
export const useDeviceWidth: IUseDeviceWidth = () => ({
    getWidth: () => document.documentElement.clientWidth,
    isEqual: (cw, px) => px === cw,
    lessThan: (cw, px) => cw <= px,
    moreThan: (cw, px) => cw >= px,
    between: (cw, pxMin, pxMax) => 
        cw >= pxMin && cw <= pxMax   
})

export const copyToClipboard: ICopyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
}

export const getUserLocale: IGetUserLocale = (options) => {
    const locale =  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language

    if (options.form === 'full') return locale
    if (options.form === 'short') return locale.slice(0, 2) 
}

export const getStatusText: IGetStatusText = (statusCode) => {
    const locale = getUserLocale({ form: 'short' })

    return emailstatus[locale].find((value: IEmailStatusObject) => value.statusCode === statusCode).text
}
