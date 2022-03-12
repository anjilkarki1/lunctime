import Dashboard from "../pages/admin/Dashboard";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import Homepage from "../pages/customer/home";
import Items from "../pages/customer/items";

const routesConfig = [
  {
    path: "/",
    title: "Home",
    component: Homepage,
    roles: ["all"],
  },
  {
    path: "/menu",
    title: "Menu",
    component: Items,
    roles: ["all"],
  },
  {
    path: "/login",
    title: "Sign In",
    component: LoginPage,
    roles: [],
  },
  {
    path: "/register",
    title: "Register",
    component: RegisterPage,
    roles: [],
  },
  {
    path: "/",
    title: "Admin",
    component: Dashboard,
    roles: ["admin"],
  },
];

export default routesConfig;
