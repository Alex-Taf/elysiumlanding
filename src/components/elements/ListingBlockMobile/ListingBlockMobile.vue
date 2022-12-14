<script setup lang="ts">
    import { defineExpose, reactive, ref, watchEffect } from "vue"
    import { Carousel, Slide } from 'vue3-carousel'
    import 'vue3-carousel/dist/carousel.css'

    const listingCarousel = ref()

    defineExpose({ listingCarousel })

    const state = reactive({
        currentSlide: 0
    })

    function setSlide(num: number): void {
        state.currentSlide = num
        listingCarousel.value.slideTo(num)
    }

    watchEffect(() => {
        if (listingCarousel && listingCarousel.value?.data) state.currentSlide = listingCarousel.value.data.currentSlide.value
    })
</script>

<template>
    <section class="flex flex-col items-center justify-between py-[12px] h-[360px] bg-white" id="listing">
        <span class="bg-black text-white text-[17px] py-[5px] px-[12px] rounded-[16px]">Listing</span>
        <h3>Falta texto aqui</h3>
        <Carousel ref="listingCarousel" :items-to-show="1.55" :items-to-scroll="1" :snap-align="'start'">
            <Slide :key="'slide'">
                <img src="../../../assets/polygonscan.png" class="h-[40px]" />
            </Slide>
            <Slide :key="'slide'">
                <img src="../../../assets/coinmarketcap.png" class="h-[40px]" />
            </Slide>
            <Slide :key="'slide'">
                <img src="../../../assets/coingecko.png" class="h-[40px]" />
            </Slide>
            <Slide :key="'slide'">
                <img src="../../../assets/watcherguru.png" class="h-[40px]" />
            </Slide>
            <Slide :key="'slide'">
                <img src="../../../assets/nomics.png" class="h-[40px]" />
            </Slide>
        </Carousel>
        <div class="flex gap-x-2 xl:pl-[74px] sm:pl-5 sm:pb-5 z-10 mt-10">
            <button class="w-[11px] h-[11px] rounded-full transition-all"
                    :class="{ 'w-[31px] bg-black': state.currentSlide === 0, 'bg-gray-400': state.currentSlide !== 0 }"
                    @click="setSlide(0)">
            </button>
            <button class="w-[11px] h-[11px] rounded-full transition-all"
                    :class="{ 'w-[31px] bg-black': state.currentSlide === 1, 'bg-gray-400': state.currentSlide !== 1 }"
                    @click="setSlide(1)">
            </button>
            <button class="w-[11px] h-[11px] rounded-full transition-all"
                    :class="{ 'w-[31px] bg-black': state.currentSlide === 2, 'bg-gray-400': state.currentSlide !== 2 }"
                    @click="setSlide(2)">
            </button>
            <button class="w-[11px] h-[11px] rounded-full transition-all"
                    :class="{ 'w-[31px] bg-black': state.currentSlide === 3, 'bg-gray-400': state.currentSlide !== 3 }"
                    @click="setSlide(3)">
            </button>
            <button class="w-[11px] h-[11px] rounded-full transition-all"
                    :class="{ 'w-[31px] bg-black': state.currentSlide === 4, 'bg-gray-400': state.currentSlide !== 4 }"
                    @click="setSlide(4)">
            </button>
        </div>
    </section>
</template>
