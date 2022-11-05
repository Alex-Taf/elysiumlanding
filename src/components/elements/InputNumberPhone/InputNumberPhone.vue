<script setup lang="ts">
    import Maska from 'maska/types/maska';
import { reactive, ref } from 'vue'
    import CountryFlag from 'vue-country-flag-next'

    const props = defineProps<{
        label: string
    }>()

    const options = reactive([
        {
            countryCode: "rus",
            countryName: "Russia",
            countryMask: '+7 (###) ###-##-##',
            countryMaskPlaceholder: "+7 (___) ___ - __ - __"
        },
        {
            countryCode: "usa",
            countryName: "USA",
            countryMask: "+1 (###) ###-####",
            countryMaskPlaceholder: "+1 (___) ___-____"
        }
    ])

    const selected = ref({
            countryCode: "rus",
            countryName: "Russia",
            countryMask: '+7 (###) ###-##-##',
            countryMaskPlaceholder: "+7 (___) ___ - __ - __"
        })
</script>

<template>
    <span>{{ props.label }}</span>
    <div class="flex items-center xl:w-[470px] sm:w-[296px] h-[48px] border rounded-md mt-[12px]">
        <v-select v-model="selected" :options="options">
            <template v-slot:selected-option="selected">
                <span class="mt-5">
                    <country-flag :country='selected.countryCode'/>
                </span>
            </template>
            <template v-slot:option="option" slot-scope="option">
                <country-flag :country='option.countryCode'/>
                {{ option.countryName }}
            </template>
        </v-select>
        <input type="text" class="border-none w-full" :placeholder="selected.countryMaskPlaceholder" v-maska="selected.countryMask" />
    </div>
</template>

<style>
    .vs__dropdown-toggle {
        border: 0;
    }
</style>
