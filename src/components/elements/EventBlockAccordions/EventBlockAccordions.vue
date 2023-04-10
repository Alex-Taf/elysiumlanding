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
    <section class="w-full flex flex-col gap-y-4">
        <div v-for="row in items.rows" class="min-w-full border-2 rounded-[10px]">
            <vue-collapsible-panel-group :expanded="true" base-color="#DBDBDB">
                <vue-collapsible-panel>
                    <template #title>
                        <span class="text-[17px] w-full" v-html="row.title"></span>
                    </template>
                    <template #content>
                        <div v-for="(col, index) in row.cols" class="border-t">
                            <div class="py-4 px-3">
                                <span v-if="row.cols.length === 1" class="font-bold text-[17px] text-center">
                                    Round N°1, 2 y 3
                                </span>
                                <span v-else class="font-bold text-[17px] text-center">
                                    Round N°{{index + 1}}
                                </span>
                                <br>
                                <span class="text-[17px] text-center" v-html="col.title"></span>
                            </div>
                        </div>
                    </template>
                </vue-collapsible-panel>
            </vue-collapsible-panel-group>
        </div>
    </section>
</template>

<style>
.vcp__header {
    height: 100% !important;
}

.vcpg {
    width: 100% !important;
}

.vcp__body-content {
    padding: 0 !important
}
</style>
