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
                fontSize: options.dataLabels.style.fontSize,
                fontFamily: options.dataLabels.style.fontFamily,
                fontWeight: options.dataLabels.style.fontWeight
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
                return `<div style="${styles}">
                            <img style="width: 22px; height: 22px;"
                                src="${options.images[seriesIndex]}"
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
                            fontWeight: options.donut.labelsFontWeight,
                            fontSize: '20px',
                            formatter: function () {
                                return options.donut.formatterString
                            }
                        },
                        name: {
                            show: true,
                            fontSize: '42px',
                        }
                    }
                }
            }
        }
    }
}
