import { createRouter, createWebHistory } from "vue-router";
// Import your page components
import Dashboard from "../views/Dashboard.vue";
import Settings from "../views/Settings.vue";
import Analytics from "../views/Analytics.vue";
import Users from "../views/Users.vue";
import Reports from "../views/Reports.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/analytics", component: Analytics },
  { path: "/users", component: Users },
  { path: "/reports", component: Reports },
  { path: "/settings", component: Settings },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  // Globally configure the Tailwind classes for active links
  linkActiveClass: "bg-blue-600 text-white shadow-lg",
  linkExactActiveClass: "bg-blue-600 text-white shadow-lg",
});
