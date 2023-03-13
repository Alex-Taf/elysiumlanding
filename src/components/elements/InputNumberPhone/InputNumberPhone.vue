<script setup lang="ts">
    import { ref, onMounted, watchEffect, reactive } from 'vue'
    import { IPhoneMaskInfo } from "../../../interfaces"
    import { IFilterate, IGetOptionLabel } from "../../../interfaces/index"
    import { getValidMask } from '../../../utils'
    import CountryFlag from 'vue-country-flag-next'

    const props = defineProps<{
        label: string,
        options: Array<IPhoneMaskInfo>,
        modelValue: IPhoneMaskInfo
    }>()

    const state = reactive({
        countryMask: {
            mask: '',
            placeholder: ''
        }
    })

    const select = ref(null)

    defineExpose({ select })

    const filtrate: IFilterate = (option, label, search) => {
        return (label || '').toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1
    }

    const getOptionLabel: IGetOptionLabel = (option) => option.countryName

    const emit = defineEmits(['update:modelValue'])

    const updateSelectValue = (value: IPhoneMaskInfo) => {
        if (!Array.isArray(value.countryMask)) {
            value.countryMask = {
                mask: value.countryMask.mask,
                placeholder: value.countryMask.placeholder
            }
            state.countryMask.mask = value.countryMask.mask
            state.countryMask.placeholder = value.countryMask.placeholder
        } else {
            value.countryMask = {
                mask: value.countryMask[0].mask,
                placeholder: value.countryMask[0].placeholder
            }

            state.countryMask.mask = value.countryMask.mask
            state.countryMask.placeholder = value.countryMask.placeholder
        }

        value.value = '' // init new value field
        emit('update:modelValue', value)
    }

    const updateInputValue = (e: Event) => {
        const input = e.target as HTMLInputElement

        const newVal = {
            countryCode: props.modelValue.countryCode,
            countryName: props.modelValue.countryName,
            countryMask: getValidMask(props.modelValue.countryMask, input.value),
            value: input.value
        }

        emit('update:modelValue', newVal)
    }

    onMounted(() => {
        if (Array.isArray(props.modelValue.countryMask)) {
            state.countryMask.mask = props.modelValue.countryMask[0].mask
            state.countryMask.placeholder = props.modelValue.countryMask[0].placeholder
        } else {
            state.countryMask.mask = props.modelValue.countryMask.mask
            state.countryMask.placeholder = props.modelValue.countryMask.placeholder
        }

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
            :placeholder="state.countryMask.placeholder"
            v-maska="state.countryMask.mask"
        />
    </div>
</template>