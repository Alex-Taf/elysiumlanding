<script setup lang="ts">
    import { computed } from "vue"
    import { VueCollapsiblePanelGroup, VueCollapsiblePanel } from '@dafcoe/vue-collapsible-panel'
    import '@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css'

    import events from "../../../static/events.json"

    import { useI18n } from "vue-i18n"
    const { locale } = useI18n({ useScope: 'global' })

    const items = computed(() => events[String(locale.value)].items)
</script>

<template>
    <section class="flex flex-col gap-y-4">
        <div v-for="row in items.rows" class="min-w-[328px] border-2 rounded-[10px]">
            <vue-collapsible-panel-group :expanded="true" base-color="#DBDBDB">
                <vue-collapsible-panel>
                    <template #title>
                        <span class="text-[17px] w-[239px]" v-html="row.title"></span>
                    </template>
                    <template #content>
                        <div v-for="(col, index) in row.cols" class="border-b border-t py-4">
                            <span v-if="row.cols.length === 1" class="font-bold text-[17px] text-center">
                                Round N°1, 2 y 3
                            </span>
                            <span v-else class="font-bold text-[17px] text-center">
                                Round N°{{index + 1}}
                            </span>
                            <br>
                            <span class="text-[17px] text-center" v-html="col.title"></span>
                        </div>
                    </template>
                </vue-collapsible-panel>
            </vue-collapsible-panel-group>
        </div>
    </section>
</template>
