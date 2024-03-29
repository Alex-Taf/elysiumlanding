<script setup lang="ts">
    // Utils
    import { reactive, computed, onMounted, ref } from "vue"
    import { useIntersectionObserver } from "../../utils"
    // Components
    import RenderOnBreakpoint from "../utils/RenderOnBreakpoint.vue"
    import Socials from "../elements/Socials/Socials.vue"
    import DesktopMenu from "../elements/DesktopMenu/DesktopMenu.vue"
    import MenuButton from "../elements/MenuButton/MenuButton.vue"
    import MobileMenu from "../elements/MobileMenu/MobileMenu.vue"
    import LangSwitcher from "../elements/LangSwitcher/LangSwitcher.vue"
    // DATA
    import socials from "../../static/social.json"
    import menu from "../../static/menu.json"

    import { useI18n } from 'vue-i18n'

    const { locale } = useI18n({ useScope: 'global' })

    const observer = useIntersectionObserver()
    const isObserved = ref(false)
    
    const menuSet = computed(() => menu.items[String(locale.value)])

    const state = reactive({
        menuOpen: false,
        overflowY: 'scroll'
    })

    const getMenuStatement = (e: Event) => {
        state.menuOpen = Boolean(e)
        
        if (Boolean(e)) {
            document.documentElement.style.overflowY = 'hidden'
        } else {
            document.documentElement.style.overflowY = 'scroll'
        }
    }

    const closeMenu = (e: Event) => {
        document.documentElement.style.overflowY = 'scroll'
        state.menuOpen = Boolean(e)
    }

    onMounted(() => {
        observer.observeElement(document.getElementById('observed-el'))
    })

    window.onscroll = () => {
        isObserved.value = !!observer.getEntryElement(true)?.getAttribute('in-entry-ratio') || false
    }
</script>

<template>
    <header class="bg-white flex flex-col justify-center w-full sm:z-20">
        <section class="h-[44px] w-full border-b-2 border-[#DFE0E1]">
            <section class="flex items-center justify-between h-[44px] w-full max-w-container m-auto">
                <LangSwitcher />
                <Socials class="sm:hidden xl:block" :items="socials.items" />
            </section>
        </section>
        <section :class="{ 'fixed w-full bg-white top-0 sm:h-10 xl:h-14': isObserved }">
            <section class="px-11 w-full shadow-md z-10 h-full" :class="{ 'py-4': !isObserved }">
                <section class="flex justify-between items-center max-w-container m-auto">
                    <router-link to="/">
                        <img
                            class="sm:w-[85px] sm:h-[32px] xl:w-[165px] xl:h-[62px]"
                            :class="{ 'sm:w-[65px] sm:h-[28px] xl:w-[125px] xl:h-[48px] mt-1': isObserved }"
                            src="../../assets/logo.png"
                        >
                    </router-link>
                    <section class="mt-1">
                        <RenderOnBreakpoint :px="1280">
                            <menu-button @is-open="getMenuStatement" :open="state.menuOpen" />
                        </RenderOnBreakpoint>
                        <RenderOnBreakpoint :pxMin="1280" :pxMax="4000">
                            <DesktopMenu :items="menuSet" />
                        </RenderOnBreakpoint>
                    </section>
                </section>
            </section>
            <RenderOnBreakpoint :px="1280">
                <MobileMenu :menu-open="state.menuOpen" :items="menuSet" @close="closeMenu" />
            </RenderOnBreakpoint>
        </section>
    </header>
</template>
