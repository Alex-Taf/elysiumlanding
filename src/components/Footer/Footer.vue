<script setup lang="ts">
    import { computed } from "vue"
    import Socials from "../elements/Socials/Socials.vue"

    import ELink from "../elements/ELink/ELink.vue"

    import footer from "../../static/footer.json"
    import socials from "../../static/social.json"

    import { messages } from './Footer.i18n'
    import { useI18n } from 'vue-i18n'

    const { t, locale } = useI18n({ messages, useScope: 'global' })
    const footerSet = computed(() => footer[String(locale.value)])
</script>

<template>
    <footer class="flex justify-center bg-white py-[48px] xl:px-[162px] sm:px-[20px]">
        <section class="flex text-g xl:flex-row w-full xl:max-w-container sm:flex-col-reverse justify-between sm:gap-y-12">
            <ul class="flex flex-col gap-y-6">
                <h5>{{ t('pages') }}</h5>
                <li v-for="page in footerSet.pages">
                    <ELink classList="text-skin-text hover:text-black" :href="page.link">{{ page.title }}</ELink>
                </li>
            </ul>
            <ul class="flex flex-col gap-y-6">
                <h5>{{ t('services') }}</h5>
                <li v-for="page in footerSet.service">
                    <ELink classList="text-skin-text hover:text-black" :href="page.link">{{ page.title }}</ELink>
                </li>
            </ul>
            <ul class="flex flex-col gap-y-6">
                <h5>{{ t('contact') }}</h5>
                <!-- <li class="flex items-center">
                    <img src="../../assets/phone.svg" />
                    <span class="text-skin-text ml-3">(603) 555-0123</span>
                </li> -->
                <li class="flex items-center">
                    <img src="../../assets/mail.svg" />
                    <span class="text-skin-text ml-3">ContactoElisiym@gmail.com</span>
                </li>
                <li class="flex items-center">
                    <img src="../../assets/location.svg" />
                    <span class="text-skin-text ml-4">6391 Elgin St. Celina, Delaware 10299</span>
                </li>
            </ul>
            <ul class="flex flex-col gap-y-6">
                <h5>{{ t('socialMedia') }}</h5>
                <Socials :items="socials.items" class="pl-0" />
            </ul>
        </section>
    </footer>
</template>
