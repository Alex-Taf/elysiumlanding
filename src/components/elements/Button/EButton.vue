<script setup lang="ts">
    const props = defineProps<{
        disabled?: boolean
    }>()
</script>

<template>
    <button :class="{ 'flex justify-center items-center bg-skin-blue text-white': true,
                      'h-[56px] min-w-[60px] rounded-md transition-all': true,
                      'hover:brightness-75 active:brightness-110': !props.disabled,
                      'brightness-110 cursor-not-allowed': props.disabled 
                    }"
            :disabled="props.disabled"
    >
        <slot></slot>
    </button>
</template>
