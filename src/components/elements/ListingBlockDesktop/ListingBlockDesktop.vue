<script setup lang="ts">
    import { messages } from './ListingBlockDesktop.i18n'
    import { useI18n } from 'vue-i18n'

    const { t } = useI18n({ messages, useScope: 'global' })
</script>

<template>
    <section class="flex flex-col items-center gap-y-24 py-[22px] h-[434px] bg-white" id="listing">
        <span class="bg-black text-white text-[17px] py-[5px] px-[12px] rounded-[16px]">{{ t('listing') }}</span>
        <h2 class="text-[53px] font-black -mt-8">{{ t('text') }}</h2>
        <section class="flex xl:gap-x-8 2xl:gap-x-16">
            <img src="../../../assets/polygonscan.png" class="h-[40px]" />
            <img src="../../../assets/coinmarketcap.png" class="h-[40px]" />
            <img src="../../../assets/coingecko.png" class="h-[40px]" />
            <img src="../../../assets/watcherguru.png" class="h-[40px]" />
            <img src="../../../assets/nomics.png" class="h-[40px]" />
        </section>
    </section>
</template>
