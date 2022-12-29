export interface IUseChartOptions {
    id: string,
    legend?: {
        show: boolean
    },
    colors: Array<string>,
    images?: Array<string>,
    labels: Array<string>,
    dataLabels: {
        enabled: boolean,
        style: {
            fontSize: string
        },
        formatter: {
            customString?: string,
            defaultString?: boolean
        }
    },
    donut: {
        label: string,
        labelsFontSize: string, // in px
        formatterString: string,
    }
}

export interface IUseChart {
    (options: IUseChartOptions): Record<string, any>
}