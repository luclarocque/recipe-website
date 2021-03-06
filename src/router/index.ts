import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "@/views/Homepage.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  // {
  //   path: "/about",
  //   name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/",
    name: "Home",
    component: Homepage
  },
  {
    path: "/recipe/:id", // creates variable id from path "/{ id }" and passes to Recipe.vue
    name: "Recipe",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/Recipe.vue")
  },
  {
    path: "/create", // creates variable id from path "/{ id }" and passes to Recipe.vue
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "recipe" */ "../views/UploadForm.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
