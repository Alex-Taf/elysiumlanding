import { IUseDeviceWidth, ICopyToClipboard, IGetUserLocale, IGetStatusText, IGetPhonesLength, IGetValidMask } from "./index.interface"
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

export const useIntersectionObserver = () => ({
    observeElement: (element: HTMLElement) => {
        const attribute = {
            name: 'in-entry-ratio',
            value: 'true',
            negative: 'false'
        }

        const o = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.setAttribute(attribute.name, attribute.negative)
                } else {
                    entry.target.setAttribute(attribute.name, attribute.value)
                }
            })
        })

        if (element) {
            element.setAttribute(attribute.name, attribute.negative)
            o.observe(element)
        }
    },
    getEntryElement: (entryStatus: boolean) => {
        return document.querySelector(`[in-entry-ratio="${entryStatus}"]`) || null
    }
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

const getPhonesLength: IGetPhonesLength = (masks) => ({
    _lengths: masks.map(mask => mask.mask.length),
    getMinMax() {
        return {
            min: Math.min(...this._lengths),
            max: Math.max(...this._lengths)
        }
    },
    getCurrent() {
        return this._lengths
    }
})

export const getValidMask: IGetValidMask = (countryMask, input) => {
    const validations = {
        hasNumbers: (value: string) => /\d/.test(value),
        lengths: {
            current: Array.isArray(countryMask) ? getPhonesLength(countryMask).getCurrent() : countryMask.mask.length,
            min: Array.isArray(countryMask) ? getPhonesLength(countryMask).getMinMax().min : countryMask.mask.length,
            max: Array.isArray(countryMask) ? getPhonesLength(countryMask).getMinMax().max : countryMask.mask.length
        }
    }

    let msk = null

    if (Array.isArray(countryMask)) {
        countryMask.forEach((item) => {
            if (validations.hasNumbers(input) || input.length === item.mask.length) {
                if (validations.hasNumbers(item.mask) || input.length === item.mask.length) {
                    msk = item
                }
            }
        })
    } else {
        msk = countryMask
    }

    return msk
}
