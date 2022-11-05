<script setup lang="ts">
    import RenderOnBreakpoint from "../utils/RenderOnBreakpoint.vue"
    import EventBlockTable from "../elements/EventBlockTable/EventBlockTable.vue"
    import EventBlockAccordions from "../elements/EventBlockAccordions/EventBlockAccordions.vue"
</script>

<template>
    <section class="relative flex flex-col h-full bg-white">
        <div class="sm:hidden absolute bg-white h-[700px] w-full"></div>
        <div class="flex flex-col items-center w-full pt-[72px] mb-[72px] sm:px-3 z-10">
            <span class="font-black xl:text-[53px] sm:text-[27px] mb-9">Token generating event</span>
            <RenderOnBreakpoint :pxMin="1280" :pxMax="4000">
                <EventBlockTable />
            </RenderOnBreakpoint>
            <RenderOnBreakpoint :pxMin="320" :pxMax="1280">
                <EventBlockAccordions />
            </RenderOnBreakpoint>
        </div>
    </section>
</template>
