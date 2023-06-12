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
      props: (route) => ({
        search: route.query.search || null,
        from: route.query.from || null,
        to: route.query.to || null,
        startDate: route.query.startDate || null,
        endDate: route.query.endDate || null,
      }),
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
      path: "/add-plan",
      name: "addItenarary",
      component: () => import("./views/AddPlan.vue"),
    },
    {
      path: "/edit-plan/:id",
      name: "editItenarary",
      component: () => import("./views/EditPlan.vue"),
    },
    {
      path: "/orders",
      name: "orders",
      component: () => import("./views/Orders.vue"),
    },
    
  ],
});

export default router;
