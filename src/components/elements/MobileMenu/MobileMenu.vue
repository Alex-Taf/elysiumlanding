<script setup lang="ts">
    import { IMenuItem } from "../../../interfaces/index"
    import socials from "../../../static/social.json"
    import Socials from "../Socials/Socials.vue"

    import ELink from '../ELink/ELink.vue'
    import { onMounted, ref } from "vue";

    const props = defineProps<{
        menuOpen: boolean,
        items: IMenuItem[]
    }>()

    const detailsState = ref([])

    const toggleDetails = (num: number) => {
        detailsState.value.find(d => d.num === num).isOpen = !detailsState.value.find(d => d.num === num).isOpen
    }

    const detailIsOpen = (num: number) => {
        if (detailsState.value.length > 0) {
            return detailsState.value.find(d => d.num === num).isOpen
        }
    }

    const emit = defineEmits(['close'])

    const closeMenu = () => {
        emit('close', false)
    }

    onMounted(() => {
        const items = props.items.map((item, index) => {
            if (item.subitems?.length) {
                return {
                    id: index,
                    title: item.title,
                    subitems: item.subitems
                }
            } else {
                return {
                    id: index,
                    title: item.title,
                    link: item.link
                }
            }
        })

        const hasSubitems = items.filter((item) => item.subitems?.length)
        
        hasSubitems.forEach((value) => {
            detailsState.value.push({
                num: value.id,
                isOpen: false
            })
        })
    })
</script>

<template>
    <section class="xl:hidden flex-col justify-between relative bg-white w-full h-screen py-9"
                :class="{ 'hidden overflow-y-scroll': !props.menuOpen, 'flex overflow-y-hidden': props.menuOpen }">
            <nav class="flex-col w-full">
                <template v-for="(menuItem, index) in props.items" :key="menuItem">
                    <li class="text-[#A8ABAF] flex items-center text-xl font-bold list-none" :class="{ 'px-11 py-4': !menuItem.subitems?.length }">
                        <ELink v-if="menuItem.link" :href="menuItem.link" @click="closeMenu">
                            {{ menuItem.title }}
                        </ELink>
                        <details v-auto-animate @toggle="toggleDetails(index)" class="w-full" v-else>
                            <summary class="list-none cursor-pointer px-11 py-4 w-full" :class="{ 'bg-[#D8D8D8]': detailIsOpen(index) }">
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
                            <nav class="flex flex-col px-11 py-4">
                                <template v-for="subitem in menuItem.subitems" :key="subitem">
                                    <ELink classList="m-4" :href="subitem.link" @click="closeMenu">{{ subitem.title }}</ELink>
                                </template>
                            </nav>
                        </details>
                    </li>
                </template>
            </nav>
            <Socials :items="socials.items" class="z-40 mb-12" />
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

    details > summary::-webkit-details-marker {
        display: none;
    }

    details[open] .detailer-icon--open {
        display: block;
    }

    details[open] .detailer-icon--close {
        display: none;
    }
</style>
