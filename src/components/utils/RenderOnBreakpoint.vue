<script setup lang="ts">
    import { useDeviceWidth } from '../../utils'

    const props = defineProps<{
        px?: number,
        pxMin?: number,
        pxMax?: number
    }>()
    
    const condition = (): boolean => {
        if (props.px) {
            return useDeviceWidth().lessThan(props.px)
        }

        if (props.pxMin && props.pxMax) {
            return useDeviceWidth().between(props.pxMin, props.pxMax)
        }

        return false
    } 
</script>
    
<template>
    <slot v-if="condition()"></slot>
</template>
