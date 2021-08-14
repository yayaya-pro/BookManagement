import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import axios from 'axios'
import qs from 'qs'

const app = createApp(App)
installElementPlus(app)
app.config.globalProperties.$axios = axios
app.config.globalProperties.$qs = qs
app.use(store).use(router).mount('#app')