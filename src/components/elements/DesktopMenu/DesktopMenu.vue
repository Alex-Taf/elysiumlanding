<script setup lang="ts">
    import { IMenuItem } from "../../../interfaces/index"

    const props = defineProps<{
        items: IMenuItem[]
    }>()
</script>

<template>
    <nav class="flex gap-x-12">
        <template v-for="menuItem in props.items" :key="menuItem">
            <li class="text-[#A8ABAF] flex items-center text-xl font-bold list-none">
                <a class="hover:text-skin-text" v-if="menuItem.link" :href="menuItem.link">{{ menuItem.title }}</a>
                <details class="relative" v-else>
                    <summary class="list-none hover:text-skin-text cursor-pointer">
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
                    <nav class="absolute flex flex-col bg-white min-w-[200px] w-full shadow-md" v-auto-animate>
                        <template v-for="subitem in menuItem.subitems" :key="subitem">
                            <a class="p-4 hover:bg-skin-default hover:text-skin-text" :href="subitem.link">{{ subitem.title }}</a>
                        </template>
                    </nav>
                </details>
            </li>
        </template>
    </nav>
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

