<script setup lang="ts">
    import { reactive, computed, ref, watchEffect } from "vue"
    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    import Modal from '../Modal/Modal.vue'
    import TokenomicsCarousel from '../TokenomicsCarousel/TokenomicsCarousel.vue'
    
    import Icon1 from "../../icons/Icon1.vue"
    import Icon2 from "../../icons/Icon2.vue"
    import Icon3 from "../../icons/Icon3.vue"
    import Icon4 from "../../icons/Icon4.vue"
    import Icon5 from "../../icons/Icon5.vue"
    import Icon6 from "../../icons/Icon6.vue"

    import tokenomics from "../../../static/tokenomics.json"

    import { ITokenomicsItem } from '../../../interfaces/index'
    import { useChart } from '../../../hooks'

    import { messages } from './TokenomicsMobile.i18n'
    import { useI18n } from 'vue-i18n'

    const { t, locale } = useI18n({ messages, useScope: 'global' })

    const tokenomicsSet = computed(() => tokenomics[String(locale.value)])

    const options1 = computed(() => useChart({
        id: 'chart1',
        legend: {
            show: false
        },
        colors: ['#483D8B', '#353C45'],
        images: ['/reflections.png', '/dev.png'],
        labels: [t('chart1.labels.reflections'), t('chart1.labels.dev')],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "27px"
            },
            formatter: {
                customString: "0,5%"
            }
        },
        donut: {
            label: `${t('chart1.donut.tax')}: 0,3%`,
            labelsFontSize: '12px',
            labelsFontWeight: 'bold',
            formatterString: t('chart1.donut.label'),
        }
    }))

    const options2 = computed(() => useChart({
        id: 'chart2',
        legend: {
            show: false
        },
        colors: ['#483D8B', '#353C45'],
        images: ['/reflections.png', '/dev.png'],
        labels: [t('chart2.labels.reflections'), t('chart2.labels.dev')],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "27px"
            },
            formatter: {
                defaultString: true
            }
        },
        donut: {
            label: `${t('chart2.donut.tax')}: 7%`,
            labelsFontSize: '12px',
            labelsFontWeight: 'bold',
            formatterString: t('chart2.donut.label'),
        }
    }))

    const series1 = [0.5, 0.5]
    const series2 = [0.5, 0.5]

    const tokenomicsCarousel = ref()

    const componentsArray = [
        Icon1,
        Icon2,
        Icon3,
        Icon4,
        Icon5,
        Icon6
    ]

    const modalTokenomics = computed(() => [
            ...tokenomicsSet.value.items[0].group,
            ...tokenomicsSet.value.items[1].group,
        ] as Array<ITokenomicsItem>)

    const state = reactive({
        modalOpen: false,
        slideNum: 0,
        currentSlide: 0
    })

    // Modal
    const openModal = (slideNum: number): void => {
        state.modalOpen = true
        state.slideNum = slideNum
    }

    const closeModal = () => {
        state.modalOpen = false
    }

    // Slider
    function setSlide(num: number): void {
        state.currentSlide = num
        tokenomicsCarousel.value.slideTo(num)
    }

    watchEffect(() => {
        if (tokenomicsCarousel && tokenomicsCarousel.value?.data) state.currentSlide = tokenomicsCarousel.value.data.currentSlide.value
    })
</script>

<template>
    <Modal :is-open="state.modalOpen" @close-modal="closeModal">
        <TokenomicsCarousel :modal-tokenomics="modalTokenomics" :slide-num="state.slideNum" />
    </Modal>
    <div class="relative">
        <section class="relative flex flex-col items-center gap-y-10 xl:h-[700px] sm:h-[520px] w-full py-[40px] bg-[#141414] rounded-xl sm:px-[16px]">
            <img class="absolute top-0 w-full bg-repeat sm:h-full" src="../../../assets/surikat-mobile.png" />
            <h4 class="text-white font-bold">{{ t('tokenomics') }}</h4>
            <span class="whitespace-pre-wrap text-center text-white text-[17px] mb-5">
                <p class="break-words">{{ t('emission') }}</p>
            </span>
            <div class="flex gap-x-32">
                <Carousel ref="tokenomicsCarousel">
                    <Slide :key="'slide'">
                        <ul v-for="group in tokenomicsSet.items[0]" :key="group" class="flex flex-col gap-y-6" v-auto-animate>
                            <template v-for="item in group">
                                <template v-if="item && item.popper">
                                    <Popper :content="item.popper.text" :show="item.popper.show">
                                        <li class="tokenomics-item"
                                            @mouseenter="item.popper.show = true"
                                            @mouseleave="item.popper.show = false"
                                            @click="openModal(item.id - 1)"
                                        >
                                            <component :is="componentsArray[item.id - 1]" />
                                            <span class="font-bold xl:text-[27px] sm:text-[xl] text-white select-none">{{ item.title }}</span>
                                        </li>
                                    </Popper>
                                </template>
                                <template v-else>
                                    <li class="tokenomics-item" @click="openModal(item.id - 1)">
                                        <component :is="componentsArray[item.id - 1]" />
                                        <span class="font-bold xl:text-[27px] sm:text-[xl] text-white select-none">{{ item.title }}</span>
                                    </li>
                                </template>
                            </template>
                        </ul>
                    </Slide>
                    <Slide :key="'slide'">
                        <ul v-for="group in tokenomicsSet.items[1]" :key="group" class="flex flex-col gap-y-6" v-auto-animate>
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
            <div class="flex gap-x-2 z-10">
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
