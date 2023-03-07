<script setup lang="ts">
    import { computed } from "vue"
    import { useI18n } from "vue-i18n"
    import TeamMemberCard from "../elements/TeamMemberCard/TeamMemberCard.vue"
    import persons from "../../static/persons.json"
    import { messages } from './Team.i18n'

    const { locale, t } = useI18n({ messages, useScope: 'global' })

    const personsSet = computed(() => persons[String(locale.value)].items)
</script>

<template>
    <section class="flex flex-col items-center justify-center py-[72px] px-[28px] bg-skin-default" id="team">
        <span class="bg-black text-white text-[17px] py-[5px] px-[12px] rounded-[16px] mb-[52px]">{{ t('teamTitle') }}</span>
        <h2 class="font-black text-[36px] sm:text-[27px] mb-[52px]">{{ t('teamLabel') }}</h2>
        <section class="flex flex-wrap justify-center gap-x-16 gap-y-16 max-w-container">
            <template v-for="person in personsSet" :key="person.id">
                <TeamMemberCard
                    :desc="person.desc"
                    :photo="person.photo"
                    :name="person.name"
                    :post="person.post"
                    :social-links="person.socialLinks"
                />
            </template>
        </section>
    </section>
</template>
