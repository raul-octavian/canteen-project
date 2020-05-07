import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recepies from "../views/Recepies.vue";
import Contact from "../views/contact.vue";
import Food from "../views/food.vue";
import Drinks from "../views/drinks.vue";
import Deserts from "../views/deserts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/Recepies",
    name: "Recepies",
    component: Recepies,
    props: true
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/Food",
    name: "Food",
    component: Food,
    props: true
  },
  {
    path: "/Drinks",
    name: "Drinks",
    component: Drinks,
    props: true
  },
  {
    path: "/Deserts",
    name: "Deserts",
    component: Deserts,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
