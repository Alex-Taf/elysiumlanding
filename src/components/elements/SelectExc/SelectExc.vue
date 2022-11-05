<script setup lang="ts">
    import { reactive, ref } from 'vue'

    const props = defineProps<{
        label: string
    }>()

    const options = reactive([
        {
            name: 'Binance',
            value: '/exc/binance.png'
        }
    ])

    const selected = ref({
            name: 'Binance',
            value: '/exc/binance.png'
        })
</script>

<template>
    <span>{{ props.label }}</span>
    <div class="flex items-center xl:w-[470px] sm:w-[296px] h-[48px] border rounded-md mt-[12px]">
        <v-select v-model="selected" :options="options">
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
