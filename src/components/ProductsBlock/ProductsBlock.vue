<script setup lang="ts">
    import { defineExpose, reactive, ref, watchEffect } from "vue"
    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    const productsCarousel = ref(HTMLElement)

    defineExpose({ productsCarousel })

    const state = reactive({
        currentSlide: 0
    })

    function setSlide(num: number): void {
        state.currentSlide = num
        productsCarousel.value.slideTo(num)
    }

    watchEffect(() => {
        if (productsCarousel.value.data) state.currentSlide = productsCarousel.value.data.currentSlide.value
    })
</script>

<template>
    <section class="flex justify-center xl:px-[48px] sm:px-[16px] mb-[72px] pb-[72px] pt-[48px] bg-skin-default">
        <div class="relative xl:h-[578px] sm:h-full xl:max-w-container bg-black rounded-xl">
            <Carousel ref="productsCarousel" :items-to-show="1">
                <Slide :key="'slide'">
                    <div class="flex xl:flex-row sm:flex-col justify-between w-full mb-[100px] py-20 xl:pl-[74px] sm:pl-5 sm:pt-10">
                        <section class="flex flex-col items-start xl:justify-start sm:justify-between sm:gap-y-6">
                            <span class="text-skin-title bg-white text-[17px] rounded-[16px] py-[5px] px-[12px] xl:mb-4 w-fit">Productos</span>
                            <h3 class="text-white sm:text-[34px] xl:mb-4">PeekTime Web</h3>
                            <span class="text-white text-left xl:w-[547px] sm:w-full sm:leading-5 xl:mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed turpis dictum justo, elementum lectus vitae. Nec viverra ipsum amet a nam in. Tortor morbi nam pellentesque diam ullamcorper ut. Non commodo sagittis, gravida eleifend amet. Varius nunc tortor varius eget est, massa mus purus feugiat. Adipiscing ipsum, faucibus fames at. At ultrices pellentesque nisi, Ver más
                            </span>
                            <a class="text-white text-xl" href="#">Ver Detalles <span class="font-bold">></span></a>
                        </section>
                        <section class="sm:mt-20 self-end">
                            <img src="../../assets/web.png">
                        </section>
                    </div>
                </Slide>
                <Slide :key="'slide'">
                    <div class="flex xl:flex-row sm:flex-col justify-between w-full mb-[100px] sm:h-[700px] xl:pl-[74px] sm:pl-5 sm:pt-10">
                        <section class="flex flex-col items-start">
                            <span class="text-skin-title bg-white text-[17px] rounded-[16px] py-[5px] px-[12px] w-fit mb-12">Productos</span>
                            <h3 class="text-white sm:text-[34px] xl:mb-4">PeekTime App</h3>
                            <span class="text-white text-left xl:w-[547px] sm:w-full sm:leading-5 xl:mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sed turpis dictum justo, elementum lectus vitae. Nec viverra ipsum amet a nam in. Tortor morbi nam pellentesque diam ullamcorper ut. Non commodo sagittis, gravida eleifend amet. Varius nunc tortor varius eget est, massa mus purus feugiat. Adipiscing ipsum, faucibus fames at. At ultrices pellentesque nisi, Ver más
                            </span>
                            <section class="flex gap-x-4 mb-12 mt-5">
                                <img src="../../assets/gplay.png" class="sm:w-[140px] sm:h-[44px]">
                                <img src="../../assets/appstore.png" class="sm:w-[140px] sm:h-[44px]">
                            </section>
                        </section>
                        <section class="self-end">
                            <img src="../../assets/app.png">
                        </section>
                    </div>
                </Slide>
            </Carousel>
            <div class="flex gap-x-2 xl:pl-[74px] sm:pl-5 sm:pb-5 z-10">
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

<style>
    .carousel, .carousel__viewport, .carousel__inner {
        @apply xl:h-[538px]
    }
</style>