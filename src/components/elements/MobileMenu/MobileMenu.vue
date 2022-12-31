<script setup lang="ts">
    import { IMenuItem } from "../../../interfaces/index"
    import socials from "../../../static/social.json"
    import Socials from "../Socials/Socials.vue"

    const props = defineProps<{
        menuOpen: boolean,
        items: IMenuItem[]
    }>()

    const emit = defineEmits(['close'])

    const closeMenu = () => {
        emit('close', false)
    } 
</script>

<template>
    <section class="xl:hidden flex-col justify-between relative bg-skin-default w-full h-screen py-9"
                :class="{ 'hidden overflow-y-scroll': !props.menuOpen, 'flex overflow-y-hidden': props.menuOpen }">
            <nav class="flex-col w-full">
                <template v-for="menuItem in props.items" :key="menuItem">
                    <li class="text-[#A8ABAF] flex items-center text-xl px-11 py-4 font-bold list-none"
                        :class="{ 'bg-[#D8D8D8]': menuItem.subitems?.length }">
                        <a v-if="menuItem.link" :href="menuItem.link" @click="closeMenu">{{ menuItem.title }}</a>
                        <details v-auto-animate v-else>
                            <summary class="list-none cursor-pointer">
                                <div class="flex items-center">
                                    <span class="detailer-title">{{ menuItem.title }}</span>
                                    <span class="detailer-icon--open">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.41 15.4199L12 10.8299L16.59 15.4199L18 13.9999L12 7.99992L6 13.9999L7.41 15.4199Z" fill="#141414"/>
                                        </svg>
                                    </span>
                                    <span class="detailer-icon--close">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z" fill="#A8ABAF"/>
                                        </svg>
                                    </span>
                                </div>
                            </summary>
                            <nav class="flex flex-col">
                                <template v-for="subitem in menuItem.subitems" :key="subitem">
                                    <a class="m-4" :href="subitem.link" @click="closeMenu">{{ subitem.title }}</a>
                                </template>
                            </nav>
                        </details>
                    </li>
                </template>
            </nav>
            <Socials :items="socials.header.items" :type="'header'" class="z-40 mb-12" />
        </section>
</template>

<style scoped>
    details .detailer-icon--close {
        display: open;
    }

    details .detailer-icon--open {
        display: none;
    }

    details[open] .detailer-title {
        @apply text-skin-title
    }

    details[open] .detailer-icon--open {
        display: block;
    }

    details[open] .detailer-icon--close {
        display: none;
    }
</style>
