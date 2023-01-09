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
