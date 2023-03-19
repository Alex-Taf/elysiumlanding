<script setup lang="ts">
    import RenderOnBreakpoint from "../utils/RenderOnBreakpoint.vue"
    import EventBlockTable from "../elements/EventBlockTable/EventBlockTable.vue"
    import EventBlockAccordions from "../elements/EventBlockAccordions/EventBlockAccordions.vue"

    import { useI18n } from "vue-i18n"
    import { messages } from "./EventBlock.i18n"

    const { t } = useI18n({ messages, useScope: 'global' })
</script>

<template>
    <section class="relative flex flex-col h-full bg-skin-default" id="token-sale-metrics">
        <div class="absolute xl:block sm:hidden bg-white h-[700px] w-full"></div>
        <div class="flex flex-col items-center w-full pt-[72px] mb-[72px] sm:px-3 z-10">
            <h2 class="font-black xl:text-[53px] sm:text-[27px] mb-9">{{ t('title') }}</h2>
            <RenderOnBreakpoint :pxMin="1280" :pxMax="4000">
                <EventBlockTable />
            </RenderOnBreakpoint>
            <RenderOnBreakpoint :pxMin="320" :pxMax="1280">
                <EventBlockAccordions />
            </RenderOnBreakpoint>
        </div>
    </section>
</template>
