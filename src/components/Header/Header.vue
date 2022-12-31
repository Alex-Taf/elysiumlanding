<script setup lang="ts">
    // Utils
    import { reactive, computed, watchEffect } from "vue"
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
</script>

<template>
    <header class="flex flex-col justify-center w-full">
        <section class="sm:hidden xl:block h-[44px] w-full border-b-2 border-[#DFE0E1]">
            <section class="flex items-center justify-between h-[44px] w-full max-w-container m-auto">
                <LangSwitcher />
                <Socials :items="socials.header.items" :type="'header'" />
            </section>
        </section>
        <section class="py-4 px-11 w-full shadow-md">
            <section class="flex justify-between items-center max-w-container m-auto">
                <router-link to="/">
                    <img class="sm:w-[85px] sm:h-[32px] xl:w-[165px] xl:h-[62px]" src="../../assets/logo.png">
                </router-link>
                <RenderOnBreakpoint :px="1280">
                    <menu-button @is-open="getMenuStatement" :open="state.menuOpen" />
                </RenderOnBreakpoint>
                <RenderOnBreakpoint :pxMin="1280" :pxMax="4000">
                    <DesktopMenu :items="menuSet" />
                </RenderOnBreakpoint>
            </section>
        </section>
        <RenderOnBreakpoint :px="1280">
            <MobileMenu :menu-open="state.menuOpen" :items="menuSet" @close="closeMenu" />
        </RenderOnBreakpoint>
    </header>
</template>
