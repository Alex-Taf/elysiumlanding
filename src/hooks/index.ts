import { IUseChart } from "./index.interface"

export const useChart: IUseChart = (options) => {
    return {
        id: options.id,
        legend: {
            show: options.legend.show
        },
        colors: options.colors,
        labels: options.labels,
        dataLabels: {
            enabled: options.dataLabels.enabled,
            style: {
                fontSize: options.dataLabels.style.fontSize
            },
            formatter: function (val: unknown, opts: any) {
                if (options.dataLabels.formatter.defaultString) {
                    return `${opts.seriesIndex !== 2 ? 3 : opts.w.config.series[opts.seriesIndex]}%`
                }

                if (options.dataLabels.formatter.customString) {
                    return options.dataLabels.formatter.customString
                }
            }
        },
        tooltip: {
            style: {
                fontSize: '12px'
            },
            custom: function({series, seriesIndex, dataPointIndex, w}) {
                const styles = `
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    padding: 10px;
                    background-color: white;
                    color: black;
                    font-size: 14px;
                `

                const getImageBySeriesName = (seriesName: string): string | undefined => {
                    switch (seriesName) {
                        case 'Reflections':
                            return '/reflections.png';
                            break;
                        case 'Development Manco Capac':
                            return '/dev.png'
                            break;
                        case 'Charity Fund':
                            return '/charity.png'
                            break;
                        case 'Diversification':
                            return '/divers.png'
                            break;
                        default:
                            break;
                    }
                }

                return `<div style="${styles}">
                            <img style="width: 22px; height: 22px;"
                                src="${getImageBySeriesName(w.globals.seriesNames[seriesIndex])}"
                            />
                            ${w.globals.seriesNames[seriesIndex]}
                        </div>`
            }
        },
        plotOptions: {
            pie: {
                startAngle: -80,
                endAngle: 280,
                donut: {
                    size: "55px",
                    labels: {
                        show: true,
                        fontSize: "24px",
                        value: {
                            show: true,
                            fontSize: options.donut.labelsFontSize
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: options.donut.label,
                            fontSize: '20px',
                            formatter: function () {
                                return options.donut.formatterString
                            }
                        },
                        name: {
                            show: true,
                            fontSize: '42px'
                        }
                    }
                }
            }
        }
    }
}
