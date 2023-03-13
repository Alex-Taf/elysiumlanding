import { ICoutryMask } from "../interfaces"

export interface IUseDeviceWidth {
    (): {
        getWidth: () => number,
        isEqual: (cw: number, px: number) => boolean,
        lessThan: (cw: number, px: number) => boolean,
        moreThan: (cw: number, px: number) => boolean,
        between: (cw: number, pxMin: number, pxMax: number) => boolean
    }
}

export interface ICopyToClipboard {
    (text: string): void
}

export interface IGetUserLocale {
    (options: { form: string }): string
}

export interface IGetStatusText {
    (statusCode: number): string
}

export interface IGetPhonesLength {
    (masks: Array<ICoutryMask>): {
        _lengths: number[],
        getMinMax: () => { min: number, max: number },
        getCurrent: () => number[]
    }
}

export interface IGetValidMask {
    (mask: {
        mask: string,
        placeholder: string
    } | Array<{
        mask: string,
        placeholder: string
    }>, input: string): string | void
}
