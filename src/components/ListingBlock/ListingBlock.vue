<script setup lang="ts">
    import RenderOnBreakpoint from "../utils/RenderOnBreakpoint.vue"
    import ListingBlockDesktop from "../elements/ListingBlockDesktop/ListingBlockDesktop.vue"
    import ListingBlockMobile from "../elements/ListingBlockMobile/ListingBlockMobile.vue"
</script>

<template>
    <RenderOnBreakpoint :pxMin="1280" :pxMax="4000">
        <ListingBlockDesktop />
    </RenderOnBreakpoint>
    <RenderOnBreakpoint :pxMin="320" :pxMax="1280">
        <ListingBlockMobile />
    </RenderOnBreakpoint>
</template>
