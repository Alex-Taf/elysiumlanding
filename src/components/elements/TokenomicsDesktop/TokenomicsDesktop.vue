<script setup lang="ts">
    import { reactive } from "vue"
    
    import Icon1 from "../../icons/Icon1.vue"
    import Icon2 from "../../icons/Icon2.vue"
    import Icon3 from "../../icons/Icon3.vue"
    import Icon4 from "../../icons/Icon4.vue"
    import Icon5 from "../../icons/Icon5.vue"
    import Icon6 from "../../icons/Icon6.vue"

    import tokenomics from "../../../static/tokenomics.json"

    const options1 = {
        legend: {
            show: false
        },
        colors: ['#39568A', '#483D8B', '#800080'],
        labels: ['Reflections', 'Liquidity generation', 'Charity Fund'],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "27px"
            },
            formatter: function () {
                return "0,1%"
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "50px",
                    labels: {
                        show: true,
                        fontSize: "24px",
                        value: {
                            show: true,
                            fontSize: '14px'
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'TAX -0,3%',
                            fontSize: '20px',
                            formatter: function () {
                                return `Transaction from wallet to wallet`
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

    const series1 = [0.1, 0.1, 0.1]

    const options2 = {
        legend: {
            show: false
        },
        colors: ['#39568A', '#483D8B', '#353C45', '#208089', '#C71585'],
        labels: ['Reflections', 'Liquidity generation', 'Development Manco Capac', 'Diversification', 'Burn'],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "27px"
            },
            formatter: function (val: unknown, opts: any) {
                return `${opts.w.config.series[opts.seriesIndex]}%`
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: "50px",
                    labels: {
                        show: true,
                        fontSize: "24px",
                        value: {
                            show: true,
                            fontSize: '14px'
                        },
                        total: {
                            show: true,
                            showAlways: true,
                            label: 'TAX -13%',
                            fontSize: '20px',
                            formatter: function () {
                                return `For every buy and sale`
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

    const series2 = [5, 1, 1, 4, 2]
        
    const componentsArray = [
        Icon1,
        Icon2,
        Icon3,
        Icon4,
        Icon5,
        Icon6
    ]

    const state = reactive({tokenomics})
</script>

<template>
    <div class="relative">
        <section class="flex flex-col items-center gap-y-10 max-w-[1440px] w-full min-w-[1280px] h-[700px] pt-[80px] bg-gray-900 rounded-xl">
            <h2 class="text-white">Tokenomics</h2>
            <span class="text-center text-white text-xl mb-5">
                <p>Эмиссия токена ELYSIUM составляет 9 000 000 000 ELYS.</p>
                <p>Токен ELYSIUM имеет 2 механизма генерирующие пассивный доход для всех держателей токена:</p>
            </span>
            <div class="flex gap-x-32">
                <ul v-for="group in state.tokenomics.items" class="flex flex-col gap-y-6" v-auto-animate>
                    <template v-for="item in group.group">
                        <template v-if="item && item.popper">
                            <Popper :content="item.popper.text" :show="item.popper.show">
                                <li class="tokenomics-item" @mouseover="item.popper.show = true" @mouseleave="item.popper.show = false">
                                    <component :is="componentsArray[item.id - 1]" />
                                    <span class="font-bold text-[27px] text-white select-none">{{ item.title }}</span>
                                </li>
                            </Popper>
                        </template>
                        <template v-else>
                            <li class="tokenomics-item">
                                <component :is="componentsArray[item.id - 1]" />
                                <span class="font-bold text-[27px] text-white select-none">{{ item.title }}</span>
                            </li>
                        </template>
                    </template>
                </ul>
            </div>
        </section>
        <section class="relative bottom-28 flex justify-center gap-x-8 w-full">
            <div class="flex justify-center items-center w-[570px] h-[500px] bg-white shadow-lg rounded-xl">
                <apexchart width="570" type="donut" :options="options1" :series="series1"></apexchart>
            </div>
            <div class="flex justify-center items-center w-[570px] h-[500px] bg-white shadow-lg rounded-xl">
                <apexchart width="570" type="donut" :options="options2" :series="series2"></apexchart>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .tokenomics-item {
        @apply flex items-center gap-x-4 cursor-pointer fill-white hover:fill-[var(--blue-color)] transition-colors
    }

    .tokenomics-item:hover > span {
        @apply text-skin-blue
    }

    :deep(.popper) {
        background: white;
        padding: 20px;
        border-radius: 20px;
        color: #585757;
        font-weight: bold;
        min-width: 337px;
        max-width: 400px;
    }
</style>
