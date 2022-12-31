<script setup lang="ts">
    import { onMounted, ref } from "vue"
    import { ISocialItem } from "../../../interfaces/index"

    const props = defineProps<{
        items: Array<ISocialItem>,
        type: string
    }>()

    const socialsUrl = ref('')

    onMounted(() => {
        if (props.type === "header") {
            socialsUrl.value = '/header-social.png'
        }

        if (props.type === "footer") {
            socialsUrl.value = '/footer-social.png'
        }
    })
</script>

<template>
    <div class="flex xl:gap-x-2 sm:justify-between px-12">
        <template v-for="social in props.items" :key="social.id">
            <a :href="social.link" :class="social.className"></a>
        </template>
    </div>
</template>

<style scoped>
    .header-social {
        --sprite-px-value: -35px;
        display: inline-block;
        width: 28px;
        height: 22px;
        background: v-bind("'url(' + socialsUrl + ')'") no-repeat;
    }

    .header-social--twitter {
        background-position: 0px;
    }

    .header-social--telegram {
        background-position: var(--sprite-px-value);
    }

    .header-social--reddit {
        background-position: calc(var(--sprite-px-value) * 2);
    }

    .header-social--facebook {
        background-position: calc(var(--sprite-px-value) * 3);
    }

    .header-social--youtube {
        background-position: calc(var(--sprite-px-value) * 4);
    }

    .header-social--tiktok {
        background-position: calc(var(--sprite-px-value) * 5);
    }

    .header-social--inst {
        background-position: calc(var(--sprite-px-value) * 6);
    }

    .header-social--linkedin {
        background-position: calc(var(--sprite-px-value) * 7);
    }
</style>
