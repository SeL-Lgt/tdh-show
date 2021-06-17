import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";

import "./style/main.scss";

Vue.config.productionTip = false;

Vue.use(ElementUI);

router.afterEach(() => {
  window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {
  document.title = "深圳市天地和网络有限公司";
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
