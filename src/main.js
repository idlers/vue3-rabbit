import {createApp} from 'vue'
import {createPinia} from "pinia";

import App from './App.vue'
import router from './router'

// 引入初始化的样式文件
import '@/styles/common.scss'

// 测试接口函数
import {getCategory} from "@/apis/testApi";
getCategory().then(res => {
    console.log(res)
})

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.mount('#app')
