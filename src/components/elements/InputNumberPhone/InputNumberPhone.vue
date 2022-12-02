<script setup lang="ts">
    import { watchEffect } from 'vue';
    import CountryFlag from 'vue-country-flag-next'

    const props = defineProps<{
        label: string,
        options: Array<Record<string, string>>,
        modelValue: Record<string, string>
    }>()

    const emit = defineEmits(['update:modelValue'])

    const updateSelectValue = (value: any) => {
        console.log(value)
        emit('update:modelValue', value)
    }
</script>

<template>
    <span>{{ props.label }}</span>
    <div class="flex items-center xl:w-[470px] sm:w-[296px] h-[48px] border rounded-md mt-[12px]">
        <v-select :value="modelValue" @option:selected="updateSelectValue" :options="props.options">
            <template v-slot:selected-option="selected">
                <span class="mt-5">
                    <country-flag :country='selected.countryCode' />
                </span>
            </template>
            <template v-slot:option="option" slot-scope="option">
                <country-flag :country='option.countryCode'/>
                {{ option.countryName }}
            </template>
        </v-select>
        <input type="text" class="border-none w-full" :placeholder="modelValue.countryMaskPlaceholder"
                v-maska="modelValue.countryMask" />
    </div>
</template>

<style>
    .vs__dropdown-toggle {
        border: 0;
    }
</style>
