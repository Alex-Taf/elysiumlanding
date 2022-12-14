<script setup lang="ts">
    import { defineEmits } from "vue"
    import ChevronLeft from "../../icons/ChevronLeft.vue"

    const props = defineProps<{
        isOpen: boolean,
    }>()

    const emit = defineEmits(['closeModal']) 

    const closeModal = (e: Event) => {
        const target = e.target as HTMLElement

        if (target.hasOwnProperty('id')) {
            const id = target.id

            if (id === 'modalBg' || id === 'close') {
                emit('closeModal', props.isOpen)
            }
        }
    }
</script>

<template>
    <teleport to="#app">
        <transition name="fade" mode="out-in">
            <div v-show="props.isOpen" 
                @click="closeModal"
                id="modalBg"
                class="fixed flex flex-col justify-center items-center z-30 w-screen xl:h-screen sm:h-full overflow-hidden bg-black/50"
            >
                <div class="bg-white rounded-xl xl:p-16 sm:p-6 sm:pt-10 sm:h-[647px] xl:h-[562px] z-50 sm:w-[360px] xl:w-full xl:max-w-[1116px]">
                    <section class="flex flex-col h-full">
                        <span @click="closeModal" id="close" class="flex gap-x-2 items-center cursor-pointer select-none font-bold text-xl mb-5">
                            <ChevronLeft fill="black" /> Volver atrás
                        </span>
                        <slot></slot>
                    </section>
                </div>
            </div>
        </transition>
    </teleport>
</template>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.2s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
