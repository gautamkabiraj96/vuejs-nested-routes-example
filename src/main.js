import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import UserRoot from "./UserRoot";
import UserHome from "./UserHome";
import UserProfile from "./UserProfile";
import UserPhotos from "./UserPhotos";

Vue.config.productionTip = false;

const routes = [
  {
    path: "/user/:user",
    component: UserRoot,
    children: [
      { path: "", component: UserHome },
      { path: "profile", component: UserProfile },
      { path: "photos", component: UserPhotos }
    ]
  }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
