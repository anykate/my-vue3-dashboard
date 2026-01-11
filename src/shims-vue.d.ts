declare module "*.vue" {
  import { ComponentOptions } from "vue";
  const component: ComponentOptions;
  export default component;
}

declare module "vue-router" {
  import { RouteRecordRaw } from "vue-router";
  export const routes: RouteRecordRaw[];

  export function createWebHistory() {
    throw new Error("Function not implemented.");
  }

  export function createRouter(arg0: {
    history: void;
    routes: { path: string; component: ComponentOptions }[];
    linkActiveClass: string;
    linkExactActiveClass: string;
  }) {
    throw new Error("Function not implemented.");
  }
}
