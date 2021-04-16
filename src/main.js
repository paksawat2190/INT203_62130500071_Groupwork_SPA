import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import box from './components/box.vue'
import bot from './components/bot.vue'

const app  = createApp(App)
app.component('box', box)
app.component('bot', bot)
app.use(router).mount('#app')

