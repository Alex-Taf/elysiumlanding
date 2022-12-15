<script setup lang="ts">
    import { reactive } from 'vue'

    import Modal from '../Modal/Modal.vue'
    import TokenomicsCarousel from '../TokenomicsCarousel/TokenomicsCarousel.vue'

    import Icon1 from '../../icons/Icon1.vue'
    import Icon2 from '../../icons/Icon2.vue'
    import Icon3 from '../../icons/Icon3.vue'
    import Icon4 from '../../icons/Icon4.vue'
    import Icon5 from '../../icons/Icon5.vue'
    import Icon6 from '../../icons/Icon6.vue'

    import tokenomics from '../../../static/tokenomics.json'

    import { ITokenomicsItem } from '../../../interfaces/index'
    import { useChart } from '../../../hooks'

    const options1 = useChart({
        id: 'chart1',
        legend: {
            show: false
        },
        colors: ['#208089', '#800080', '#353C45'],
        labels: ['Reflections', 'Charity Fund', 'Development Manco Capac'],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "27px"
            },
            formatter: {
                customString: "0,1%"
            }
        },
        donut: {
            label: 'TAX -0,3%',
            labelsFontSize: '14px',
            formatterString: `Transaction from wallet to wallet`,
        }
    })

    const options2 = useChart({
        id: 'chart2',
        legend: {
            show: false
        },
        colors: ['#208089', '#483D8B', '#353C45'],
        labels: ['Reflections', 'Diversification', 'Development Manco Capac'],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: "27px"
            },
            formatter: {
                defaultString: true
            }
        },
        donut: {
            label: 'TAX -7%',
            labelsFontSize: '14px',
            formatterString: `For every buy and sale`,
        }
    })

    const series1 = [0.1, 0.1, 0.1]
    const series2 = [1, 1, 1]

    const componentsIconsArray = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6]

    const state = reactive({
        modalOpen: false,
        slideNum: 0,
        tokenomics: tokenomics as any,
        modalTokenomics: [
            ...tokenomics.items[0].group,
            ...tokenomics.items[1].group,
        ] as Array<ITokenomicsItem>,
    })

    // Modal
    const openModal = (slideNum: number): void => {
        state.modalOpen = true
        state.slideNum = slideNum
    }

    const closeModal = () => {
        state.modalOpen = false
    }
</script>

<template>
    <Modal :is-open="state.modalOpen" @close-modal="closeModal">
        <TokenomicsCarousel :modal-tokenomics="state.modalTokenomics" :slide-num="state.slideNum" />
    </Modal>
    <div class="relative">
        <section
            class="flex flex-col items-center gap-y-10 max-w-[1440px] w-full min-w-[1280px] h-[700px] pt-[80px] bg-gray-900 rounded-xl"
        >
            <h2 class="text-white">Tokenomics</h2>
            <span class="text-center text-white text-xl mb-5">
                <p>Эмиссия токена ELYSIUM составляет 9 000 000 000 ELYS.</p>
                <p>
                    Токен ELYSIUM имеет 2 механизма генерирующие пассивный доход
                    для всех держателей токена:
                </p>
            </span>
            <div class="flex gap-x-32">
                <ul
                    v-for="group in state.tokenomics.items"
                    class="flex flex-col gap-y-6"
                    v-auto-animate
                >
                    <template v-for="item in group.group">
                        <template v-if="item.popper">
                            <Popper
                                :content="item.popper.text"
                                :show="item.popper.show"
                            >
                                <li
                                    class="tokenomics-item"
                                    @mouseover="item.popper.show = true"
                                    @mouseleave="item.popper.show = false"
                                    @click="openModal(item.id - 1)"
                                >
                                    <component
                                        :is="componentsIconsArray[item.id - 1]"
                                    />
                                    <span
                                        class="font-bold text-[27px] text-white select-none"
                                        >{{ item.title }}</span
                                    >
                                </li>
                            </Popper>
                        </template>
                        <template v-else>
                            <li
                                class="tokenomics-item"
                                @click="openModal(item.id - 1)"
                            >
                                <component
                                    :is="componentsIconsArray[item.id - 1]"
                                />
                                <span
                                    class="font-bold text-[27px] text-white select-none"
                                    >{{ item.title }}</span
                                >
                            </li>
                        </template>
                    </template>
                </ul>
            </div>
        </section>
        <section class="relative bottom-28 flex justify-center gap-x-8 w-full" id="token-sale-metrics">
            <div
                class="flex justify-center items-center w-[570px] h-[500px] bg-white shadow-lg rounded-xl"
            >
                <apexchart
                    width="570"
                    type="donut"
                    :options="options1"
                    :series="series1"
                ></apexchart>
            </div>
            <div
                class="flex justify-center items-center w-[570px] h-[500px] bg-white shadow-lg rounded-xl"
            >
                <apexchart
                    width="570"
                    type="donut"
                    :options="options2"
                    :series="series2"
                ></apexchart>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .tokenomics-item {
        @apply flex items-center gap-x-4 cursor-pointer fill-white hover:fill-[var(--blue-color)] transition-colors;
    }

    .tokenomics-item:hover > span {
        @apply text-skin-blue;
    }

    :deep(.popper) {
        background: white;
        padding: 20px;
        border-radius: 20px;
        color: #585757;
        font-weight: bold;
        min-width: 337px;
        max-width: 400px;
    }
</style>
