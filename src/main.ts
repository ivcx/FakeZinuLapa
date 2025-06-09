import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
document.title = "Latvijas Neuzticamo ziņu portāls" 
app.mount('#app')
