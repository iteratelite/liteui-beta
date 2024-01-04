import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import LiteUI from './plugins/LiteUI'

const app = createApp(App)

app.use(createPinia())
app.use(LiteUI)
app.mount('#app')
