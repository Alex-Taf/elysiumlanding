<script setup lang="ts">
    // Utils
    import { reactive } from "vue"
    // Components
    import RenderOnBreakpoint from "../utils/RenderOnBreakpoint.vue"
    import Socials from "../elements/Socials/Socials.vue"
    import DesktopMenu from "../elements/DesktopMenu/DesktopMenu.vue"
    import MenuButton from "../elements/MenuButton/MenuButton.vue"
    import MobileMenu from "../elements/MobileMenu/MobileMenu.vue"
    // DATA
    import socials from "../../static/social.json"
    import menu from "../../static/menu.json"

    const state = reactive({
        menuOpen: false,
        overflowY: 'scroll'
    })

    const getMenuStatement = (e: Event) => {
        state.menuOpen = Boolean(e)

        console.log(state.overflowY)
        
        if (Boolean(e)) {
            state.overflowY = 'scroll'
        } else {
            state.overflowY = 'hidden'
        }
    }
</script>

<template>
    <header class="flex flex-col justify-center w-full">
        <section class="sm:hidden xl:block h-[44px] w-full border-b-2 border-[#DFE0E1]">
            <section class="flex items-center justify-end h-[44px] w-full max-w-container m-auto">
                <Socials :items="socials.items" :type="'header'" />
            </section>
        </section>
        <section class="py-4 px-11 w-full shadow-md">
            <section class="flex justify-between items-center max-w-container m-auto">
                <img class="sm:w-[85px] sm:h-[32px] xl:w-[165px] xl:h-[62px]" src="../../assets/logo.png">
                <RenderOnBreakpoint :px="1280">
                    <menu-button @is-open="getMenuStatement" />
                </RenderOnBreakpoint>
                <RenderOnBreakpoint :pxMin="1280" :pxMax="4000">
                    <DesktopMenu :items="menu.items" />
                </RenderOnBreakpoint>
            </section>
        </section>
        <RenderOnBreakpoint :px="1280">
            <MobileMenu :menu-open="state.menuOpen" :items="menu.items" :socials="socials.items" />
        </RenderOnBreakpoint>
    </header>
</template>

<style>
    body, #app {
        overflow-y: v-bind("state.overflowY");
    }
</style>
