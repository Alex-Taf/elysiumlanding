<script setup lang="ts">
    const props = defineProps<{
        fill: string
    }>()
</script>

<template>
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.875 10.1983L5.07333 6L0.875 1.7925L2.1675 0.5L7.6675 6L2.1675 11.5L0.875 10.1983Z" :fill="props.fill" />
    </svg>
</template>
    