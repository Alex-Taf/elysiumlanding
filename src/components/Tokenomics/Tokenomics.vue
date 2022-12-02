<script setup lang="ts">
    import RenderOnBreakpoint from "../utils/RenderOnBreakpoint.vue"
    import TokenomicsDesktop from "../elements/TokenomicsDesktop/TokenomicsDesktop.vue"
    import TokenomicsMobile from "../elements/TokenomicsMobile/TokenomicsMobile.vue"
</script>

<template>
    <section class="xl:flex xl:justify-center xl:py-[72px] xl:px-[48px] sm:py-[48px] sm:px-[16px] bg-skin-default" id="tokenomics">
        <RenderOnBreakpoint :pxMin="1280" :pxMax="4000">
            <TokenomicsDesktop />
        </RenderOnBreakpoint>
        <RenderOnBreakpoint :pxMin="320" :pxMax="1280">
            <TokenomicsMobile />
        </RenderOnBreakpoint>
    </section>    
</template>
