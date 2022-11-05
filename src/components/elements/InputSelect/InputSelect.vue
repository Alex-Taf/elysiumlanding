<script setup lang="ts">
    import { reactive, ref } from 'vue'

    const props = defineProps<{
        label: string,
        options: Array<Record<string, string>>,
        defaultValue: Record<string, string>
    }>()

    const options = reactive(props.options)

    const selected = ref(props.defaultValue)
</script>

<template>
    <span>{{ props.label }}</span>
    <div class="flex items-center xl:w-[470px] sm:w-[296px] h-[48px] border rounded-md mt-[12px]">
        <v-select v-model="selected" :options="options">
            <template v-slot:selected-option="selected">
                {{ selected.name }}
            </template>
            <template v-slot:option="option" slot-scope="option">
                {{ option.name }}
            </template>
        </v-select>
    </div>
</template>

<style scoped>
    .v-select {
        width: 100%;
    }

    .vs__dropdown-toggle {
        border: 0;
    }
</style>
