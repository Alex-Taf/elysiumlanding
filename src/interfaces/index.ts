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
