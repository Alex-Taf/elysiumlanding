import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import VueApexCharts from "vue3-apexcharts"
import Notifications from '@kyvg/vue3-notification'
import Popper from "vue3-popper"
import Maska from "maska"
import router from "./router"
import './style.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import App from './App.vue'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    allowComposition: true,
    globalInjection: true,
    legacy: false
})

createApp(App)
    .use(router)
    .use(i18n)
    .use(autoAnimatePlugin)
    .use(Notifications)
    .use(VueApexCharts)
    .use(Maska)
    .component("v-select", vSelect)
    .component("Popper", Popper)
    .mount('#app')
