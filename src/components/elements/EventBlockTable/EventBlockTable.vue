<script setup lang="ts">
    import { computed } from "vue"
    import { useI18n } from "vue-i18n"
    import events from "../../../static/events.json"

    const { locale } = useI18n({ useScope: 'global' })

    const items = computed(() => events[String(locale.value)].items)
</script>

<template>
    <div class="max-w-[1116px] min-w-[360px] w-full">
        <!-- Table header -->
        <div class="flex bg-black h-[64px] rounded-tl-[20px] rounded-tr-[20px]">
            <!-- Column header shim -->
            <span class="w-full min-w-[279px]"></span>
            <!-- -->
            <span class="flex items-center justify-center w-full min-w-[279px]">
                <span class="font-bold text-xl text-white">Round N°1</span>
            </span>
            <span class="flex items-center justify-center w-full min-w-[279px]">
                <span class="font-bold text-xl text-white">Round N°2</span>
            </span>
            <span class="flex items-center justify-center w-full min-w-[279px]">
                <span class="font-bold text-xl text-white">Round N°3</span>
            </span>
        </div>
        <!-- Table Body -->
        <div class="flex flex-col bg-white rounded-[20px] w-full min-w-[279px]">
            <div v-for="(row, rowIndex) in items.rows" :key="rowIndex" class="flex">
                <div
                    :class="rowIndex === items.rows.length - 1 ? 'rounded-bl-[20px]' : '' "
                    class="flex justify-center items-center border-2 border-t-0 p-4 min-h-fit w-[279px]"
                >
                    <span class="text-[17px] leading-[21px] -tracking-[0.2px] w-[239px]" v-html="row.title"></span>
                </div>
                <template v-for="(col, colIndex) in row.cols">
                    <div
                        :class="{ 'rounded-br-[20px]': rowIndex === items.rows.length - 1 && colIndex === 0, 'h-[150px]': rowIndex === items.rows.length - 1 }"
                        class="flex justify-center items-center min-h-fit w-full border-2 border-l-0 border-t-0 p-4"
                    >
                        <span class="text-[17px] leading-[21px] -tracking-[0.2px] text-center" :class="{ 'w-[600px]': rowIndex === items.rows.length - 1 }" v-html="col.title"></span>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
