<script setup lang="ts">
    import { onMounted, reactive, ref } from "vue"
    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    import { messages } from './ProductsBlock.i18n'
    import { useI18n } from "vue-i18n"

    const { t } = useI18n({ messages, useScope: 'global' })

    const productsCarousel = ref()

    defineExpose({ productsCarousel })

    onMounted(() => {
        productsCarousel.value.updateSlideWidth()
    })

    const state = reactive({
        currentSlide: 0
    })

    function setSlide(num: number): void {
        state.currentSlide = num
    }
</script>

<template>
    <section class="flex justify-center xl:px-[48px] sm:px-[16px] mb-[72px] pb-[72px] pt-[48px] bg-skin-default" id="products">
        <div class="relative xl:h-[578px] sm:h-[794px] sm:w-full xl:max-w-container bg-black rounded-xl">
            <Carousel id="productsCarousel" ref="productsCarousel" :items-to-show="1" v-model="state.currentSlide">
                <Slide :key="'slide'">
                    <div class="flex xl:flex-row sm:flex-col justify-between w-full xl:h-[516px] sm:h-[776px] pt-[200px] xl:pl-[74px] sm:pl-5 sm:pr-5 sm:pt-8">
                        <section class="flex flex-col items-start xl:justify-start sm:justify-between sm:gap-y-6">
                            <span class="text-skin-title bg-white text-[17px] rounded-[16px] py-[5px] px-[12px] xl:mb-4 w-fit">{{ t('products') }}</span>
                            <h3 class="text-white text-[36px] font-black xl:mb-4">{{ t('web') }}</h3>
                            <span class="text-white text-left xl:w-[547px] sm:w-full sm:leading-5 xl:mb-4">
                                {{ t('webDesc') }}
                            </span>
                            <a class="text-white text-xl" href="#">{{ t('viewDetails') }} <span class="font-bold">></span></a>
                        </section>
                        <section class="sm:mt-10 self-end">
                            <img class="md:hidden sm:block relative -right-5 bottom-10" src="../../assets/mobile/web.png">
                            <img class="md:block sm:hidden" src="../../assets/web.png">
                        </section>
                    </div>
                </Slide>
                <Slide :key="'slide'">
                    <div class="flex xl:flex-row sm:flex-col justify-between w-full xl:h-[516px] sm:h-[776px] pt-[200px] xl:pl-[74px] sm:pl-5 sm:pr-5 sm:pt-8">
                        <section class="flex flex-col items-start">
                            <span class="text-skin-title bg-white text-[17px] rounded-[16px] py-[5px] px-[12px] sm:mb-7 w-fit">{{ t('products') }}</span>
                            <h3 class="text-white text-[36px] font-black xl:mb-4 sm:mb-7">{{ t('app') }}</h3>
                            <span class="text-white text-left text-[14px] xl:w-[547px] sm:w-[296px] sm:leading-5 xl:mb-4 sm:mb-7">
                                {{ t('appDesc') }}
                            </span>
                            <section class="flex justify-between gap-x-4 sm:max-w-[328px]">
                                <img src="../../assets/gplay.png" class="sm:w-[147px] sm:h-[42px]">
                                <img src="../../assets/appstore.png" class="sm:w-[145px] sm:h-[42px]">
                            </section>
                        </section>
                        <section class="self-end">
                            <img class="md:hidden sm:block relative -right-5" src="../../assets/mobile/app.png">
                            <img class="md:block sm:hidden" src="../../assets/app.png">
                        </section>
                    </div>
                </Slide>
            </Carousel>
            <div class="md:static sm:absolute sm:bottom-[310px] flex gap-x-2 xl:pl-[74px] sm:pl-5 sm:pb-5 sm:mt-8 xl:mt-1 z-10">
                <button class="w-[11px] h-[11px] rounded-full transition-all"
                        :class="{ 'w-[31px] bg-white': state.currentSlide === 0, 'bg-gray-400': state.currentSlide !== 0 }"
                        @click="setSlide(0)">
                </button>
                <button class="w-[11px] h-[11px] rounded-full transition-all"
                        :class="{ 'w-[31px] bg-white': state.currentSlide === 1, 'bg-gray-400': state.currentSlide !== 1 }"
                        @click="setSlide(1)">
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
    #productsCarousel :deep(.carousel__viewport) {
        @apply xl:h-[538px]
    }

    #productsCarousel :deep(.carousel__track) {
        @apply xl:h-[538px]
    }
</style>
