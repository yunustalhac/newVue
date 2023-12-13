// import {createApp} from 'vue'
// import App from './App.vue'
// import {plugin, defaultConfig} from '@formkit/vue'
//
//
// app.use(plugin, defaultConfig({
//     theme: "genesis"
// }))
// app.mount('#app')
//
import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App)

app.use(plugin, defaultConfig({
    theme: "genesis"
}))

app.mount('#app') // Sadece bir kez createApp çağrılmalıdır.
