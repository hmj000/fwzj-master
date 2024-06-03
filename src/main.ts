import {createApp} from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import axios from "axios";
import {UserStore} from "@/stores/userStore";

const pinia = createPinia()
const app = createApp(App)
pinia.use(piniaPluginPersistedstate)
axios.defaults.baseURL='http://localhost:8080'

app.provide("axios",axios)
app.use(createPinia())
app.use(pinia)
app.use(router)
app.use(ElementPlus)

const userStore = UserStore()


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['token'] = userStore.token|| ""

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

app.mount('#app')
