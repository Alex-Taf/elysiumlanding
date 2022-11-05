<script setup lang="ts">
    const props = defineProps<{
        label: string,
        placeholder: string
    }>()
</script>

<template>
    <span>{{ props.label }}</span>
    <div class="flex items-center xl:w-[470px] sm:w-[296px] h-[48px] border rounded-md mt-[12px]">
        <input type="text" class="border-none w-full" :placeholder="props.placeholder"/>
    </div>
</template>
