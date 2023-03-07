<script setup lang="ts">
    import { reactive } from "vue"
    import { iTeamMemberCardState, iFindIcon } from "./TeamMemberCard.interface"

    const props = defineProps<{
        desc: string,
        photo: string,
        name: string,
        post: string,
        socialLinks?: {
            social: string,
            link: string
        }[]
    }>()

    const state: iTeamMemberCardState = reactive({
        showDesc: false,
        socials: [
            {
                social: 'facebook',
                icon: `/socials/facebook.png`
            },
            {
                social: 'instagram',
                icon: `/socials/instagram.png`
            },
            {
                social: 'reddit',
                icon: `/socials/reddit.png`
            },
            {
                social: 'telegram',
                icon: `/socials/telegram.png`
            },
            {
                social: 'tiktok',
                icon: `/socials/tiktok.png`
            },
            {
                social: 'twitter',
                icon: `/socials/twitter.png`
            },
            {
                social: 'youtube',
                icon: `/socials/youtube.png`
            }
        ]
    })

    const findIcon: iFindIcon = (state, social) => {
        return state.socials.find(item => item.social === social)?.icon
    }
</script>

<template>
    <div @click="state.showDesc = !state.showDesc" class="relative flex flex-col xl:w-[407px] xl:h-[553px] sm:w-[328px] sm:h-[443px]
                bg-white shadow-sm rounded-xl cursor-pointer hover:scale-105 transition-transform">
        <div class="absolute top-0 flex flex-col justify-between w-full xl:h-[450px] sm:h-[363px] p-9 transition-opacity ease-in-out duration-400"
            :class="{ 'visible opacity-100': state.showDesc, 'invisible opacity-0': !state.showDesc }">
            <div class="absolute top-0 left-0 w-full h-full bg-skin-blue opacity-75 rounded-tl-xl rounded-tr-xl"></div>
            <span class="xl:text-[17px] sm:text-[14px] sm:leading-4 xl:leading-6 text-white z-10">
                {{ props.desc }}
            </span>
            <section v-if="props.socialLinks" class="flex items-center gap-x-2 z-10">
                <template v-for="social in props.socialLinks">
                    <a :href="social.link">
                        <img :src="findIcon(state, social.social)" class="hover:scale-110 transition-transform" />
                    </a>
                </template>
            </section>
        </div>
        <img :src="props.photo" class="xl:w-[407px] xl:h-[450px] sm:w-[328px] sm:h-[443px] rounded-tl-xl rounded-tr-xl" />
        <section class="flex flex-col xl:gap-y-2 sm:gap-y-0 w-full h-auto xl:py-[24px] sm:py-[14px] px-[36px]">
            <span class="text-xl font-bold">{{ props.name }}</span>
            <span>{{ props.post }}</span>
        </section>
    </div>
</template>
