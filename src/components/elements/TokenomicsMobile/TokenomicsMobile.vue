<script setup lang="ts">
    import { reactive, ref, watchEffect } from "vue"
    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'
    
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
                    size: "55px",
                    labels: {
                        show: true,
                        fontSize: "24px",
                        value: {
                            show: true,
                            fontSize: '12px'
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
                    size: "55px",
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

    const tokenomicsCarousel = ref(HTMLElement)

    const componentsArray = [
        Icon1,
        Icon2,
        Icon3,
        Icon4,
        Icon5,
        Icon6
    ]

    const state = reactive({tokenomics, currentSlide: 0})

    function setSlide(num: number): void {
        state.currentSlide = num
        tokenomicsCarousel.value.slideTo(num)
    }

    watchEffect(() => {
        if (tokenomicsCarousel.value.data) state.currentSlide = tokenomicsCarousel.value.data.currentSlide.value
    })
</script>

<template>
    <div class="relative">
        <section class="flex flex-col items-center gap-y-10 xl:h-[700px] sm:h-[520px] w-full py-[40px] bg-gray-900 rounded-xl sm:px-[16px]">
            <h4 class="text-white">Tokenomics</h4>
            <span class="text-center text-white text-[17px] leading-5 mb-5">
                <p>Эмиссия токена ELYSIUM составляет 9 000 000 000 ELYS.
                Токен ELYSIUM имеет 2 механизма генерирующие пассивный доход для всех держателей токена:</p>
            </span>
            <div class="flex gap-x-32">
                <Carousel ref="tokenomicsCarousel">
                    <Slide :key="'slide'">
                        <ul v-for="group in state.tokenomics.items[0]" class="flex flex-col gap-y-6" v-auto-animate>
                            <template v-for="item in group">
                                <template v-if="item && item.popper">
                                    <Popper :content="item.popper.text" :show="item.popper.show">
                                        <li class="tokenomics-item" @mouseover="item.popper.show = true" @mouseleave="item.popper.show = false">
                                            <component :is="componentsArray[item.id - 1]" />
                                            <span class="font-bold xl:text-[27px] sm:text-[xl] text-white select-none">{{ item.title }}</span>
                                        </li>
                                    </Popper>
                                </template>
                                <template v-else>
                                    <li class="tokenomics-item">
                                        <component :is="componentsArray[item.id - 1]" />
                                        <span class="font-bold xl:text-[27px] sm:text-[xl] text-white select-none">{{ item.title }}</span>
                                    </li>
                                </template>
                            </template>
                        </ul>
                    </Slide>
                    <Slide :key="'slide'">
                        <ul v-for="group in state.tokenomics.items[1]" class="flex flex-col gap-y-6" v-auto-animate>
                            <template v-for="item in group">
                                <template v-if="item && item.popper">
                                    <Popper :content="item.popper.text" :show="item.popper.show">
                                        <li class="tokenomics-item" @mouseover="item.popper.show = true" @mouseleave="item.popper.show = false">
                                            <component :is="componentsArray[item.id - 1]" />
                                            <span class="font-bold xl:text-[27px] sm:text-[xl] text-white select-none">{{ item.title }}</span>
                                        </li>
                                    </Popper>
                                </template>
                                <template v-else>
                                    <li class="tokenomics-item">
                                        <component :is="componentsArray[item.id - 1]" />
                                        <span class="font-bold xl:text-[27px] sm:text-[xl] text-white select-none">{{ item.title }}</span>
                                    </li>
                                </template>
                            </template>
                        </ul>
                    </Slide>
                </Carousel>
            </div>
            <div class="flex gap-x-2">
                <button class="w-[11px] h-[11px] rounded-full transition-all"
                        :class="{ 'w-[31px] bg-white': state.currentSlide === 0, 'bg-gray-400': state.currentSlide !== 0 }"
                        @click="setSlide(0)">
                </button>
                <button class="w-[11px] h-[11px] rounded-full transition-all"
                        :class="{ 'w-[31px] bg-white': state.currentSlide === 1, 'bg-gray-400': state.currentSlide !== 1 }"
                        @click="setSlide(1)">
                </button>
            </div>
        </section>
        <section class="flex xl:flex-row sm:flex-col justify-center gap-x-5 w-full">
            <div class="flex justify-center items-center xl:w-[570px] sm:min-w-[348px] sm:w-full h-[500px] bg-white shadow-lg rounded-xl sm:mt-[18px]">
                <apexchart width="448" type="donut" :options="options1" :series="series1"></apexchart>
            </div>
            <div class="flex justify-center items-center xl:w-[570px] sm:min-w-[348px] sm:w-full h-[500px] bg-white shadow-lg rounded-xl sm:mt-[18px]">
                <apexchart width="448" type="donut" :options="options2" :series="series2"></apexchart>
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
