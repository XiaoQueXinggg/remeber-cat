import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import plugin from "./plugins/index"
import { router } from "./routes/index";
createApp(App).use(plugin).use(router).mount("#app");
