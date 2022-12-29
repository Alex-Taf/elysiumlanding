<script setup lang="ts">
    import { computed } from "vue"
    import { useI18n } from "vue-i18n"
    import TeamMemberCard from "../elements/TeamMemberCard/TeamMemberCard.vue"
    import persons from "../../static/persons.json"

    const { locale } = useI18n({ useScope: 'global' })

    const personsSet = computed(() => persons[String(locale.value)].items)
</script>

<template>
    <section class="flex justify-center py-[72px] px-[28px] bg-skin-default" id="team">
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
