
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import {plugin, defaultConfig} from '@formkit/vue'

const app = createApp(App)
app.use(
    plugin,
    defaultConfig({
        theme: "genesis"
    })
)

createApp(App).mount('#app')
