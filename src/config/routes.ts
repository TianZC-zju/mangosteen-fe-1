import { RouteRecordRaw } from "vue-router";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { First } from "../views/welcome/components/First";
import { Forth } from "../views/welcome/components/Forth";
import { Second } from "../views/welcome/components/Second";
import { Third } from "../views/welcome/components/Third";
import { Welcome } from "../views/welcome/Welcom";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Foo },
  { path: "/about", component: Bar },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "1", component: First },
      { path: "2", component: Second },
      { path: "3", component: Third },
      { path: "4", component: Forth },
    ],
  },
];
