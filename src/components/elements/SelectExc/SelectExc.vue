<script setup lang="ts">
    import { reactive } from 'vue'
    import { ISelectExcValue } from './SelectExc.interface'

    const props = defineProps<{
        label: string,
        modelValue: ISelectExcValue
    }>()

    const options = reactive([
        {
            id: 1,
            name: 'Binance',
            value: '/exc/binance.png'
        }
    ])

    const emit = defineEmits(['update:modelValue'])

    const updateSelectValue = (value: ISelectExcValue) => {
        emit('update:modelValue', value)
    }
</script>

<template>
    <span>{{ props.label }}</span>
    <div class="flex items-center xl:w-[470px] sm:w-[296px] h-[48px] border rounded-md mt-[12px]">
        <v-select
            v-model="props.modelValue"
            :options="options"
            @option:selected="updateSelectValue"
        >
            <template v-slot:selected-option="selected">
                <img :src='selected.value'/>
            </template>
            <template v-slot:option="option" slot-scope="option">
                <img :src='option.value'/>
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
