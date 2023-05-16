import VueApexCharts from 'vue3-apexchats'
import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
    app.use(VueApexCharts)
})