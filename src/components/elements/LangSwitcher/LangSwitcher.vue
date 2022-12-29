<script setup lang="ts">
    import { reactive } from 'vue'
    import { useI18n } from 'vue-i18n'
    import CountryFlag from 'vue-country-flag-next'
    import locales from '../../../static/locales.json'

    const { locale } = useI18n({ useScope: 'global' })

    const state = reactive({
        locales: locales.items,
        selectedLocale: locales.items.find(value => value.code === localStorage.getItem('locale'))
                        || locales.items.find(value => value.code === 'en')
    })

    const updateSelectValue = (value: Record<string, string>) => {
        localStorage.setItem('locale', value.code)
        locale.value = value.code
    }
</script>

<template>
    <v-select
        v-model="state.selectedLocale"
        @option:selected="updateSelectValue"
        @change="updateSelectValue"
        :options="state.locales"
        :clearable="false"
        :filterable="false"
        :searchable="false"
    >
        <template #selected-option="option: Record<string, string>" slot-scope="option">
            <span>
                <country-flag :country="option.flag" />
                <span class="relative bottom-1 ml-2">{{ option.title }}</span>
            </span>
        </template>
        <template #option="option: Record<string, string>" slot-scope="option">
            <country-flag :country="option.flag" />
            <span class="relative bottom-1 ml-2">{{ option.title }}</span>
        </template>
    </v-select>
</template>
