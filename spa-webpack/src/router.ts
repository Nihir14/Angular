// defines the structure of each route and implements the Router class to manage navigation and rendering of views based on the URL hash.

// ---/about (path) => aboutTemplate() (template function that returns HTML string)

// template functions return HTML strings that represent the content of each view. The Router class listens for changes in the URL hash and updates the content of the root element accordingly.

export interface Route {
    path: string;
    template: () => string;
}

// handle url changes and render the appropriate view based on the defined routes. It listens for hash changes and updates the content of the root element with the corresponding template. If no matching route is found, it displays a 404 error message.

export class Router {

    // stores the defined routes and available for navigation

    private routes: Route[]; 


     // html element where the content of the current view will be rendered

    private rootElement: HTMLElement;
 
    constructor(routes: Route[]) {
        this.routes = routes;
        this.rootElement = document.getElementById("app") as HTMLElement;

 
        // listen for hash changes and load the corresponding route

        // when url changes after the # symbol ---http://localhost:3000/#about

        // this automatically triggers the loadRoute method to render the correct view

        window.addEventListener("hashchange", () => this.loadRoute());


        // when the page loads initially and render the correct view   

        window.addEventListener("load", () => this.loadRoute()); 

        
    }

    // loads the appropriate route based on the current URL hash and updates the root element with the corresponding template
 
    private loadRoute() {

        // get the current path from the url after the # symbol, default to "/" if no hash is present

        const path = window.location.hash.slice(1) || "/";

        // find the route that matches the current path

        const route = this.routes.find(r => r.path === path);
 
        if (route) {

            // if a matching route is found, render its template in the root element

            this.rootElement.innerHTML = route.template();

        } else {

            // if no matching route is found, display a 404 error message

            this.rootElement.innerHTML = "<h2>404 - Page Not Found</h2>";
            
        }
    }
}