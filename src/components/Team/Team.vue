<script setup lang="ts">
    import { reactive } from "vue"
    import TeamMemberCard from "../elements/TeamMemberCard/TeamMemberCard.vue"
    import persons from "../../static/persons.json"

    const state = reactive({
        persons: persons.items
    })
</script>

<template>
    <section class="flex justify-center py-[72px] px-[28px] bg-skin-default" id="team">
        <section class="flex flex-wrap justify-center gap-x-16 gap-y-16 max-w-container">
            <template v-for="person in state.persons" :key="person.id">
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
