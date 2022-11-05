<script setup lang="ts">
    import { reactive } from "vue"
    import events from "../../../static/events.json"

    const state = reactive({
        items: events.items
    })
</script>

<template>
    <div class="max-w-[1116px] min-w-[360px] w-full">
        <!-- Table header -->
        <div class="flex bg-black h-[64px] rounded-tl-2xl rounded-tr-2xl">
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
        <div class="flex flex-col bg-white w-full min-w-[279px]">
            <div v-for="row in state.items.rows" class="flex">
                <div class="flex justify-center items-center border-2 border-t-0 p-4 w-[279px]">
                    <span class="text-[17px] w-[239px]" v-html="row.title"></span>
                </div>
                <div v-for="col in row.cols" class="flex justify-center items-center w-full border-2 border-l-0 border-t-0 p-4">
                    <span class="text-[17px] text-center" v-html="col.title"></span>
                </div>
            </div>
            <!-- <div class="flex">
                <div class="flex justify-center items-center border-2 border-t-0 p-4 w-[279px]">
                    <span class="text-[17px] w-[239px]">
                        Минимальный объем обмена stablecoin (USDT, USDC, BUSD) на токены ELYS
                    </span>
                </div>
                <div class="flex justify-center items-center w-full border-2 border-l-0 border-t-0 p-4">
                    <span class="text-[17px]">
                        10 000 USDT
                    </span>
                </div>
                <div class="flex justify-center items-center w-full border-2 border-l-0 border-t-0 p-4">
                    <span class="text-[17px]">
                        3 000 USDT
                    </span>
                </div>
                <div class="flex justify-center items-center w-full border-2 border-l-0 border-t-0 p-4">
                    <span class="text-[17px]">
                        1 000 USDT
                    </span>
                </div>
            </div> -->
        </div>
    </div>
</template>
