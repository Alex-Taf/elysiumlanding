<script setup lang="ts">
    import Header from '../components/Header/Header.vue'
    import Hero from '../components/Hero/Hero.vue'
    import Tokenomics from "../components/Tokenomics/Tokenomics.vue"
    import EventBlock from "../components/EventBlock/EventBlock.vue"
    import ProductsBlock from "../components/ProductsBlock/ProductsBlock.vue"
    import ListingBlock from "../components/ListingBlock/ListingBlock.vue"
    import Team from "../components/Team/Team.vue"
    import Footer  from "../components/Footer/Footer.vue"
</script>

<template>
    <div class="relative flex flex-col">
        <notifications position="bottom center"
                        classes="bg-black opacity-70 text-white text-xl p-4 mb-10 rounded-xl text-center select-none" />
        <Header />
        <Hero />
        <Tokenomics />
        <EventBlock />
        <ProductsBlock />
        <ListingBlock />
        <Team />
        <Footer />
    </div>
</template>
