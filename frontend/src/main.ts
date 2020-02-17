import Vue, { VNode } from "vue";
import App from "./App.vue";
import { createHello } from "@vetur-monorepo/common";

console.log(createHello("Hello!"));

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(App)
}).$mount("#app");
