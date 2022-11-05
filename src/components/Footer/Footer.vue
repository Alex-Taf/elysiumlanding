<script setup lang="ts">
    import Socials from "../elements/Socials/Socials.vue"

    import footer from "../../static/footer.json"
    import socials from "../../static/social.json"
</script>

<template>
    <footer class="flex justify-center bg-white py-[48px] xl:px-[162px] sm:px-[20px]">
        <section class="flex xl:flex-row w-full xl:max-w-container sm:flex-col-reverse justify-between sm:gap-y-12">
            <ul class="flex flex-col gap-y-6">
                <h5>Pages</h5>
                <li v-for="page in footer.pages">
                    <a class="text-skin-text" :href="page.link">{{ page.title }}</a>
                </li>
            </ul>
            <ul class="flex flex-col gap-y-6">
                <h5>Service</h5>
                <li v-for="page in footer.service">
                    <a class="text-skin-text" :href="page.link">{{ page.title }}</a>
                </li>
            </ul>
            <ul class="flex flex-col gap-y-6">
                <h5>Contact</h5>
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
                <h5>Social media</h5>
                <Socials :items="socials.items" :type="'footer'" class="pl-0" />
            </ul>
        </section>
    </footer>
</template>
