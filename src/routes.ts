import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import AboutComp from "./VueMastery_RealWorldVue3/components/AboutComp.vue";
import AboutView from "./views/AboutView.vue";
import AccountView from "./views/AccountView.vue";
import EventDetails from "./VueMastery_RealWorldVue3/components/EventDetails.vue";
import EventList from "./VueMastery_RealWorldVue3/components/EventList.vue";
import ExamplesView from "./views/ExamplesView.vue";
import GridView from "./views/GridView.vue";
import protectedRoute from "./middlewares/protected";
import StartPageView from "./views/StartPageView.vue";
import VTableView from "./views/VTableView.vue";
import Vue3TableLiteView from "./views/Vue3TableLiteView.vue";
import VueMasteryRealWorldVue3 from "./views/VueMasteryRealWorldVue3.vue";
import VueMasterySocksView from "./views/VueMasterySocksView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "StartPage",
    component: StartPageView,
  },
  {
    path: "/examples",
    name: "Examples",
    component: ExamplesView,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountView,
  },
  {
    path: "/vtable",
    name: "VTable",
    component: VTableView,
    beforeEnter: protectedRoute,
  },
  {
    path: "/v3table",
    name: "V3TableLite",
    component: Vue3TableLiteView,
    beforeEnter: protectedRoute,
  },
  {
    path: "/socks",
    name: "Socks",
    component: VueMasterySocksView,
  },
  {
    path: "/grid",
    name: "Grid",
    component: GridView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/realworldvue3",
    name: "Real World Vue3",
    component: VueMasteryRealWorldVue3,
    children: [
      {
        path: "/realworldvue3/",
        name: "EventList",
        component: EventList,
      },
      {
        path: "/realworldvue3/event/:id",
        name: "EventDetails",
        props: true,
        component: EventDetails,
      },
      {
        path: "/realworldvue3/about",
        name: "About",
        component: AboutComp,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
