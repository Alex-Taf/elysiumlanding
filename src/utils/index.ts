import { IUseDeviceWidth, ICopyToClipboard } from "./index.interface"

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
