import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BindingsComponent } from './bindings/bindings.component';
import {FormsComponent } from './forms/forms.component';

const routes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
  path: 'dashboard',
  component: DashboardComponent
},
{
path: 'bindings',
component: BindingsComponent
},
{
path: 'forms',
component: FormsComponent
},
{
  path: 'detail/:id',
  component: HeroDetailComponent
},
{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},

];

export const appRouterProviders = [
  provideRouter(routes)
];
