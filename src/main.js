import "./assets/scss/global.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import app from "./app.vue";
const appObj = createApp(app);
appObj.use(createPinia());
appObj.use(router);
appObj.mount("#app");
