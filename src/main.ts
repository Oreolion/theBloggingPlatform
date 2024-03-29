import { createApp } from "vue";
import "./style.css";
import "vue3-toastify/dist/index.css";
import router from "../src/routes";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
