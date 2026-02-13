import type { Route } from "./router";
import { Home } from "./views/home";
import { About } from "./views/about";
import { Contact } from "./views/contact";
 
export const routes: Route[] = [
    { path: "/", template: Home },
    { path: "/about", template: About },
    { path: "/contact", template: Contact }
];