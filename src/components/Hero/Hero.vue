<script setup lang="ts">
    import { reactive } from "vue"
    import { notify } from "@kyvg/vue3-notification"
    import { copyToClipboard } from "../../utils/index"
    import { useI18n } from "vue-i18n"
    import { messages } from "./Hero.i18n"
    import ReadonlyInput from "../elements/ReadonlyInput/ReadonlyInput.vue"
    import EButton from "../elements/Button/EButton.vue"

    const { t } = useI18n({ messages, useScope: 'global' })

    const state = reactive({
        token: '0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5'
    })

    function copy(text: string) {
        copyToClipboard(text)
        notify({
            title: t('copiedText'),
        })
    }
</script>

<template>
    <section class="flex sm:flex-col xl:flex-row xl:max-w-container m-auto" id="about-token">
        <section class="flex flex-col xl:justify-between sm:gap-y-4 w-full py-[72px] px-[48px]">
            <span class="bg-skin-title text-white text-[17px] rounded-[16px] py-[5px] px-[12px] w-fit">{{ t('token') }}</span>
            <h2 class="text-4xl font-black">{{ t('aboutToken') }}</h2>
            <span>
                <span class="sm:text-sm xl:text-[17px] text-skin-text">
                    <p>{{ t('tokenDesc') }}</p>
                </span><br>
                <span class="sm:text-sm xl:text-[17px] text-skin-text">
                    <p>{{ t('tokenDesc2') }}</p>
                </span>
            </span>
            <span class="text-[17px] font-[800] tracking-[-0.2px] mt-20 leading-5">Elysium Contract</span>
            <section class="flex gap-x-2">
                <ReadonlyInput :value="state.token" />
                <EButton @click="copy(state.token)">
                    <img src="../../assets/copy.svg">
                </EButton>
            </section>
        </section>
        <img src="../../assets/Oficial.png">
    </section>
</template>
