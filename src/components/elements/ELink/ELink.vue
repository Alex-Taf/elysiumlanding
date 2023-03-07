<script setup lang="ts">
    const props = defineProps<{
        classList?: string,
        href: string,
        target?: string
    }>()

    const checkToAnchor = (href: string): boolean => {
        return href.charAt(0) === '#' || href.charAt(1) === '#' ? true : false
    }
</script>

<template>
    <span :class="props.classList">
        <router-link v-if="!checkToAnchor(props.href) && props.target !== '_blank'" :to="props.href">
            <slot></slot>
        </router-link>
        <a v-else :href="props.href">
            <slot></slot>
        </a>
    </span>
</template>
