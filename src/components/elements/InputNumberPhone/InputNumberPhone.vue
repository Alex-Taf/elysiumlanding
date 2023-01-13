<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import { IPhoneMaskInfo } from "./inputNumberPhone.interface"
    import { IFilterate, IGetOptionLabel } from "../../../interfaces/index"
    import CountryFlag from 'vue-country-flag-next'

    const props = defineProps<{
        label: string,
        options: Array<IPhoneMaskInfo>,
        modelValue: IPhoneMaskInfo
    }>()

    const select = ref(null)

    defineExpose({ select })

    const filtrate: IFilterate = (option, label, search) => {
        return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
    }

    const getOptionLabel: IGetOptionLabel = (option) => option.countryName

    const emit = defineEmits(['update:modelValue'])

    const updateSelectValue = (value: IPhoneMaskInfo) => {
        value.value = '' // init new value field
        emit('update:modelValue', value)
    }

    const updateInputValue = (e: Event) => {
        const input = e.target as HTMLInputElement

        const newVal = {
            countryCode: props.modelValue.countryCode,
            countryName: props.modelValue.countryName,
            countryMask: props.modelValue.countryMask,
            countryMaskPlaceholder: props.modelValue.countryMaskPlaceholder,
            value: input.value
        }

        emit('update:modelValue', newVal)
    }

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
            class="w-[100px]"
            :value="props.modelValue"
            @option:selected="updateSelectValue"
            :options="props.options"
            :get-option-label="getOptionLabel"
            :filterable="true"
            :filterBy="filtrate"
            :clearable="false"
            autocomplete="on"
        >
            <template #selected-option="option: IPhoneMaskInfo" slot-scope="option">
                <span class="mt-5">
                    <country-flag :country='option.countryCode' />
                </span>
            </template>
            <template #option="option: IPhoneMaskInfo" slot-scope="option">
                <country-flag :country='option.countryCode'/>
                <span class="relative bottom-1 ml-2">{{ option.countryName }}</span>
            </template>
        </v-select>
        <input
            type="text"
            class="border-none w-full"
            @change="updateInputValue"
            :placeholder="modelValue.countryMaskPlaceholder"
            v-maska="modelValue.countryMask"
        />
    </div>
</template>