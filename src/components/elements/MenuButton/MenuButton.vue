<script setup lang="ts">
    import { reactive } from "vue"
    import { IMenuButton } from "./MenuButton.interface"

    const props = defineProps<{
        open: boolean
    }>()

    const state: IMenuButton = reactive({
        toggle: props.open,
        dOpen: "M25.5885 8.54699L23.7085 6.66699L16.2552 14.1203L8.80187 6.66699L6.92188 8.54699L14.3752 16.0003L6.92188 23.4537L8.80187 25.3337L16.2552 17.8803L23.7085 25.3337L25.5885 23.4537L18.1352 16.0003L25.5885 8.54699Z",
        dClose: "M4.25391 8H28.2539V10.6667H4.25391V8ZM4.25391 14.6667H28.2539V17.3333H4.25391V14.6667ZM4.25391 21.3333H28.2539V24H4.25391V21.3333Z"
    })

    const emit = defineEmits(['isOpen'])

    const toggleStatement = () => {
        state.toggle = !state.toggle
        emit('isOpen', state.toggle)
    }

</script>

<template>
    <div class="sm:block xl:hidden w-[32px] h-[32px] cursor-pointer" @click="toggleStatement()">
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path :d="props.open ? state.dOpen : state.dClose" :key="'path'" fill="#141414"/>
        </svg>
    </div>
</template>
