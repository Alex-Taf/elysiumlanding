import { IUseDeviceWidth, ICopyToClipboard } from "./index.interface"

export const useDeviceWidth: IUseDeviceWidth = () => ({
    getWidth: () => document.documentElement.clientWidth,
    isEqual: (px) => px === document.documentElement.clientWidth,
    lessThan: (px) => document.documentElement.clientWidth <= px,
    moreThan: (px) => document.documentElement.clientWidth >= px,
    between: (pxMin, pxMax) => 
        document.documentElement.clientWidth >= pxMin && document.documentElement.clientWidth <= pxMax   
})

export const copyToClipboard: ICopyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
}
