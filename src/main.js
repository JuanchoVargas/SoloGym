import "./assets/scss/globla.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import app from "./app.vue";
import router from "./router";
const app = createApp(app);
app.use(createPinia());
app.use(router);
app.mount("#app");
