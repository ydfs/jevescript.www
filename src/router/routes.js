import Home from "../views/Home/Home.vue";
import Login from "../views/Login.vue";
// import Post from "../views/Post.vue";
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
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];
