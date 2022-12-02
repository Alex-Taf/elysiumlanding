<script setup lang="ts">
    import { reactive } from "vue"
    import { notify } from "@kyvg/vue3-notification"
    import { copyToClipboard } from "../../utils/index"
    import ReadonlyInput from "../elements/ReadonlyInput/ReadonlyInput.vue"
    import Button from "../elements/Button/Button.vue"

    const state = reactive({
        token: '0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5'
    })

    function copy(text: string) {
        copyToClipboard(text)
        notify({
            title: "Copied to clipboard",
        })
    }
</script>

<template>
    <section class="flex sm:flex-col xl:flex-row xl:max-w-container m-auto" id="about-token">
        <section class="flex flex-col xl:justify-between sm:gap-y-4 w-full py-[72px] px-[48px]">
            <span class="bg-skin-title text-white text-[17px] rounded-[16px] py-[5px] px-[12px] w-fit">Token</span>
            <h2 class="text-4xl">About Token</h2>
            <span>
                <span class="sm:text-sm xl:text-[17px] text-skin-text">
                    <p>Токены ELYS являются полезными (utility) токенами. Это цифровые жетоны,</p>
                    <p>выпущенные и используемые для доступа к определенным функциям</p>
                    <p>продуктов и сервисов платформы PeekTime, а также к другим цифровым</p>
                    <p>нефинансовым блокчейн-продуктам и приложениям, которые будут</p>
                    <p>разрабатываться в рамках развития экосистемы Manco Capac.</p>
                </span><br>
                <span class="sm:text-sm xl:text-[17px] text-skin-text">
                    <p>Токены ELYS являются лицензией на использование сетевой утилиты и</p>
                    <p>инструментом получения лицензии на использование некоммерческих</p>
                    <p>продуктов и сервисов.</p>
                </span>
            </span>
            <span class="text-[17px] font-bold">Elysium Contract</span>
            <section class="flex gap-x-2">
                <ReadonlyInput :value="state.token" />
                <Button @click="copy(state.token)">
                    <img src="../../assets/copy.svg">
                </Button>
            </section>
        </section>
        <img src="../../assets/Oficial.png">
    </section>
</template>
