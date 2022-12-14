<script setup lang="ts">
    import { ref, watch, watchEffect } from 'vue'
    import { ITokenomicsItem } from "../../../interfaces"
    import { Carousel, Slide } from 'vue3-carousel'

    import Button from '../Button/Button.vue'

    import ChevronLeft from '../../icons/ChevronLeft.vue'
    import ChevronRight from '../../icons/ChevronRight.vue'

    import Icon1 from '../../icons/Icon1.vue'
    import Icon2 from '../../icons/Icon2.vue'
    import Icon3 from '../../icons/Icon3.vue'
    import Icon4 from '../../icons/Icon4.vue'
    import Icon5 from '../../icons/Icon5.vue'
    import Icon6 from '../../icons/Icon6.vue'

    const props = defineProps<{
        modalTokenomics: Array<ITokenomicsItem>,
        slideNum: number
    }>()

    const componentsIconsArray = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6]

    const currentSlide = ref(0)
    const slidesCount = ref(0)
    const modalCarousel = ref()

    defineExpose({ modalCarousel })

    function setSlide(num: number) {
        currentSlide.value = num
    }

    function prev() {
        currentSlide.value--
    }

    function next() {
        currentSlide.value++
    }

    watch(props, async (newProps) => {
        currentSlide.value = newProps.slideNum
    })

    watchEffect(() => {
        if (modalCarousel.value?.data) {
            slidesCount.value = modalCarousel.value.data.slidesCount.value
        }
    })
</script>

<template>
    <Carousel
        id="modalCarousel"
        ref="modalCarousel"
        :key="currentSlide"
        v-model="currentSlide"
    >
        <Slide v-for="item in props.modalTokenomics" :key="'slide'">
            <section class="flex flex-col xl:gap-y-14 sm:gap-y-6 xl:h-[300px] sm:h-[400px]">
                <span class="flex items-center gap-x-3">
                    <component :is="componentsIconsArray[item.id - 1]" />
                    <span
                        class="font-bold text-[27px] text-black select-none"
                        >{{ item.title }}</span
                    >
                </span>
                <div
                    class="flex flex-col xl:justify-between sm:gap-y-4 text-left text-skin-text xl:h-[150px] sm:h-[400px]"
                >
                    <span>
                        <p class="sm:text-sm">
                            Токены ELYS являются полезными (utility) токенами.
                            Это цифровые жетоны, выпущенные и используемые для
                            доступа к определенным функциям продуктов и сервисов
                            платформы PeekTime, а также к другим цифровым
                            нефинансовым блокчейн-продуктам и приложениям,
                            которые будут разрабатываться в рамках развития
                            экосистемы Manco Capac.
                        </p>
                    </span>
                    <span>
                        <p class="sm:text-sm">
                            Токены ELYS являются лицензией на использование
                            сетевой утилиты и инструментом получения лицензии на
                            использование некоммерческих продуктов и сервисов.
                        </p>
                    </span>
                </div>
            </section>
        </Slide>
    </Carousel>
    <div class="flex xl:justify-between xl:flex-row sm:flex-col sm:mt-2">
        <div class="flex gap-x-2">
            <button
                v-for="slide in slidesCount"
                class="w-[11px] h-[11px] rounded-full transition-all"
                :class="{
                    'w-[31px] bg-black': currentSlide === slide - 1,
                    'bg-gray-500': currentSlide !== slide - 1,
                }"
                @click.prevent="setSlide(slide - 1)"
            ></button>
        </div>
        <div class="flex items-center gap-x-6 sm:self-end sm:mt-10 xl:mt-2">
            <span
                class="flex items-center gap-x-2 cursor-pointer select-none text-xl"
                @click="prev()"
            >
                <ChevronLeft fill="black" /> Anterior
            </span>
            <Button class="w-[161px]" @click="next()">
                <span class="flex items-center gap-x-2 text-white text-xl"
                    >Siguiente <ChevronRight fill="white"
                /></span>
            </Button>
        </div>
    </div>
</template>

<style scoped>
    #modalCarousel :deep(.carousel__viewport) {
        @apply xl:h-[320px] sm:h-[400px]
    }

    #modalCarousel :deep(.carousel__track) {
        @apply xl:h-[320px] sm:h-[400px]
    }
</style>
