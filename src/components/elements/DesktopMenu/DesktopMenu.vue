<script setup lang="ts">
    import { ref, watch, onMounted } from 'vue'
    import { IMenuItem } from '../../../interfaces/index'

    const props = defineProps<{
        items: IMenuItem[]
    }>()

    const detailsIsOpen = ref(false)

    const toggleDetails = () => {
        detailsIsOpen.value = !detailsIsOpen.value
    }

    const checkDetailsState = (e: Event) => {
        // ANTIPATTERN ????
        const details = document.querySelector('#menu-details')
        const target = e.target as HTMLElement

        if(!details.contains(target)){
            details.removeAttribute('open')
        }
    }

    onMounted(() => {
        document.addEventListener('click', checkDetailsState)
    })

    watch(detailsIsOpen, (value) => {
        if (!value) {
            document.removeEventListener('click', checkDetailsState)
        } else {
            document.addEventListener('click', checkDetailsState)
        }
    })
</script>

<template>
    <nav class="flex gap-x-12">
        <template v-for="menuItem in props.items" :key="menuItem">
            <li
                class="text-[#A8ABAF] flex items-center text-xl font-bold list-none select-none"
            >
                <a
                    class="hover:text-skin-text"
                    v-if="menuItem.link"
                    :href="menuItem.link"
                    >{{ menuItem.title }}</a
                >
                <details id="menu-details" class="relative" @toggle="toggleDetails" :open="detailsIsOpen" v-else>
                    <summary
                        class="list-none hover:text-skin-text cursor-pointer"
                    >
                        <div class="flex items-center">
                            <span class="detailer-title">{{
                                menuItem.title
                            }}</span>
                            <span class="detailer-icon--open">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.41 15.4199L12 10.8299L16.59 15.4199L18 13.9999L12 7.99992L6 13.9999L7.41 15.4199Z"
                                        fill="#141414"
                                    />
                                </svg>
                            </span>
                            <span class="detailer-icon--close">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.41 8.58008L12 13.1701L16.59 8.58008L18 10.0001L12 16.0001L6 10.0001L7.41 8.58008Z"
                                        fill="#A8ABAF"
                                    />
                                </svg>
                            </span>
                        </div>
                    </summary>
                    <nav
                        class="absolute flex flex-col bg-white min-w-[200px] mt-2 w-full shadow-md"
                    >
                        <template
                            v-for="subitem in menuItem.subitems"
                            :key="subitem"
                        >
                            <a
                                class="p-4 hover:bg-skin-default hover:text-skin-text"
                                :href="subitem.link"
                                >{{ subitem.title }}</a
                            >
                        </template>
                    </nav>
                </details>
            </li>
        </template>
    </nav>
</template>

<style scoped>
    details > summary {
        list-style-type: none;
    }

    details[open] > summary {
        list-style-type: none;
    }

    details > summary::-webkit-details-marker {
        display: none;
    }

    details .detailer-icon--close {
        display: block;
    }

    details .detailer-icon--open {
        display: none;
    }

    details[open] .detailer-title {
        @apply text-skin-title;
    }

    details[open] .detailer-icon--open {
        display: block;
    }

    details[open] .detailer-icon--close {
        display: none;
    }

    details[open] summary ~ * {
        transform-origin: top;
        animation: sweep 0.3s ease-in-out;
    }

    @keyframes sweep {
        0% {
            transform: scaleY(0);
        }
        50% {
            transform: scaleY(0.5);
        }
        100% {
            transform: scaleY(1);
        }
    }

    @keyframes unsweep {
        0% {
            transform: scaleY(1);
        }
        50% {
            transform: scaleY(0.5);
        }
        100% {
            transform: scaleY(0);
        }
    }
</style>
