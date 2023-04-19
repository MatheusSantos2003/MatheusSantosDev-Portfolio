import { HomePageComponent } from './home-page/home-page.component';
import { Route } from "@angular/router";
import { HomeComponent } from "./home.component";

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: '**',
        component: HomePageComponent
      }
    ]
  }
]
