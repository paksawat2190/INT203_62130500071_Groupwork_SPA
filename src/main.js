import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import box from './components/box.vue'

const app  = createApp(App)
app.use(router).mount('#app')
app.component('box', box)
