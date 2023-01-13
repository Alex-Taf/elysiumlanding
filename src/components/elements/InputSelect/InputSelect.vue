<script setup lang="ts">
    import { ref, computed, onMounted } from 'vue'
    import { IFilterate, IGetOptionLabel } from "../../../interfaces/index"

    const props = defineProps<{
        label: string,
        options: Array<any>,
        modelValue: any,
        filterable?: true
    }>()

    const items = computed(() => props.options.filter(i => i.name !== props.modelValue.title))

    const emit = defineEmits(['update:modelValue'])
    const select = ref(null)

    defineExpose({ select })

    const updateSelectValue = (value: any) => {
        emit('update:modelValue', value)
    }

    const filtrate: IFilterate = (option, label, search) => {
        return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
    }

    const getOptionLabel: IGetOptionLabel = (option) => option.name

    onMounted(() => {
        // init default select value
        // default values not init, when :value binds modelValue in v-select lib
        // ISSUE
        select._value.$data._value = props.modelValue
    })
</script>

<template>
    <span>{{ props.label }}</span>
    <div class="flex items-center xl:w-[470px] sm:w-[296px] h-[48px] border rounded-md mt-[12px]">
        <v-select
            ref="select"
            :value="props.modelValue"
            :options="items"
            @option:selected="updateSelectValue"
            :filterable="props.filterable"
            :filterBy="filtrate"
            :get-option-label="getOptionLabel"
            autocomplete="on"
            :clearable="true"
        >
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
