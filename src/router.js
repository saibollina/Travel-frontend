import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue"),
    },
    {
      path: "/places",
      name: "places",
      component: () => import("./views/PlaceList.vue"),
    },
    {
      path: "/plans",
      name: "plans",
      component: () => import("./views/PlanList.vue"),
    },
    {
      path: "/plan/:planId",
      name: "plan",
      component: () => import("./views/Plan.vue"),
    },
    {
      path: "/place/:placeId",
      name: "place",
      component: () => import("./views/Place.vue"),
    },
    {
      path: "/recipes",
      name: "recipes",
      component: () => import("./views/RecipeList.vue"),
    },
    {
      path: "/events",
      name: "events",
      component: () => import("./views/EventList.vue"),
    },
    {
      path: "/event/:eventId",
      name: "event",
      component: () => import("./views/Event.vue"),
    },
    {
      path: "/hotels",
      name: "hotels",
      component: () => import("./views/HotelList.vue"),
    },
    {
      path: "/hotel/:hotelId",
      name: "hotel",
      component: () => import("./views/Hotel.vue"),
    },
    {
      path: "/recipe/:id",
      name: "editRecipe",
      props: true,
      component: () => import("./views/EditRecipe.vue"),
    },
    {
      path: "/ingredients",
      name: "ingredients",
      component: () => import("./views/IngredientList.vue"),
    },
    
  ],
});

export default router;
