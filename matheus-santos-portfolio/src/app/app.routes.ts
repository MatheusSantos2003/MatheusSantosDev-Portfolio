import { Route } from "@angular/router";

export const appRoutes: Route[] = [{
  path: '',
  children: [
    {
      path: 'home',
      loadChildren: () => import('./modules/home/home.routes').then(m => m.routes)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]

}]
