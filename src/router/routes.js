import Home from "../views/Home/Home.vue";
import BasicLayout from "@/components/TheLayout/BasicLayout";

export default [
  {
    path: "/",
    name: "Root",
    component: BasicLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      }
    ]
  }
];
