import { createApp } from "vue";
import { createPinia } from "pinia";
import { IonicVue } from "@ionic/vue";
import { Amplify } from "aws-amplify";
import AmplifyVue from "@aws-amplify/ui-vue";
import App from "./App.vue";
import router from "./router";
import awsConfig from "./aws-exports";

Amplify.configure(awsConfig);

// Ionic CSS
import "./assets/styles/main.css";
import "@ionic/vue/css/core.css";
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(IonicVue);
app.use(AmplifyVue);

router.isReady().then(() => app.mount("#app"));
