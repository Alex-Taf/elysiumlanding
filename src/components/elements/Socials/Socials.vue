<script setup lang="ts">
    // import { onMounted, ref } from "vue"
    import { ref } from "vue"
    import { ISocialItem } from "../../../interfaces/index"

    const props = defineProps<{
        items: Array<ISocialItem>,
        // type: string
    }>()

    /** In Old realization - ref('') is a void string **/
    const socialsUrl = ref('/social.png')
    
    /** Old social type realization, .png files in public directory **/
    // onMounted(() => {
    //     if (props.type === "header") {
    //         socialsUrl.value = '/header-social.png'
    //     }

    //     if (props.type === "footer") {
    //         socialsUrl.value = '/footer-social.png'
    //     }
    // })
</script>

<template>
    <div class="flex xl:gap-x-2 sm:justify-between px-12">
        <template v-for="social in props.items" :key="social.id">
            <a :href="social.link" :class="social.className"></a>
        </template>
    </div>
</template>

<style scoped>
    .social {
        --sprite-px-value: -35px;
        --raw-filter: brightness(180%) hue-rotate(38deg) saturate(163%);
        --hover-filter: brightness(46%) hue-rotate(38deg) saturate(163%);
        display: inline-block;
        width: 28px;
        height: 22px;
        background: v-bind("'url(' + socialsUrl + ')'") no-repeat;
    }

    .social--twitter {
        background-position: 0px;
        filter: var(--raw-filter);
    }

    .social--twitter:hover {
        filter: var(--hover-filter);
    }

    .social--telegram {
        background-position: var(--sprite-px-value);
        filter: var(--raw-filter);
    }

    .social--telegram:hover {
        filter: var(--hover-filter);
    }

    .social--reddit {
        background-position: calc(var(--sprite-px-value) * 2);
        filter: var(--raw-filter);
    }

    .social--reddit:hover {
        filter: var(--hover-filter);
    }

    .social--facebook {
        background-position: calc(var(--sprite-px-value) * 3);
        filter: var(--raw-filter);
    }

    .social--facebook:hover {
        filter: var(--hover-filter);
    }

    .social--youtube {
        background-position: calc(var(--sprite-px-value) * 4);
        filter: var(--raw-filter);
    }

    .social--youtube:hover {
        filter: var(--hover-filter);
    }

    .social--tiktok {
        background-position: calc(var(--sprite-px-value) * 5);
        filter: var(--raw-filter);
    }

    .social--tiktok:hover {
        filter: var(--hover-filter);
    }

    .social--inst {
        background-position: calc(var(--sprite-px-value) * 6);
        filter: var(--raw-filter);
    }

    .social--inst:hover {
        filter: var(--hover-filter);
    }

    .social--linkedin {
        background-position: calc(var(--sprite-px-value) * 7);
        filter: var(--raw-filter);
    }

    .social--linkedin:hover {
        filter: var(--hover-filter);
    }
</style>
