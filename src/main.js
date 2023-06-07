// import './assets/main.css'
import {createApp} from 'vue'
import {createPinia} from "pinia";
import App from './App.vue'
import router from './router'

import {getCategory} from "@/apis/testApi";

getCategory().then(res => {
    console.log(res)
})

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
