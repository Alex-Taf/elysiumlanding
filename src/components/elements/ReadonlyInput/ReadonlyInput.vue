<script setup lang="ts">
    const props = defineProps<{
        value: string
    }>()
</script>

<template>
    <div class="flex items-center gap-x-2 bg-skin-default h-[56px] min-w-[220px] max-w-[341px] pl-[24px] w-full rounded-md">
        <!-- <GroupIcon /> -->
        <img src="../../../assets/group.svg" class="w-[26px] h-[26px]">
        <input class="bg-transparent border-none focus:border-transparent focus:outline-none focus:ring-0 w-full text-xl text-skin-title"
                type="text" readonly aria-readonly="true" :value="props.value" />
    </div>
</template>
