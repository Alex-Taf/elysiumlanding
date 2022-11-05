export interface IUseDeviceWidth {
    (): {
        getWidth?: () => number,
        isEqual: (px: number) => boolean,
        lessThan: (px: number) => boolean,
        moreThan: (px: number) => boolean,
        between: (pxMin: number, pxMax: number) => boolean
    }
}

export interface ICopyToClipboard {
    (text: string): void
}
