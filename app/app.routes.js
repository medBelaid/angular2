"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes/heroes.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var hero_detail_component_1 = require('./hero-detail/hero-detail.component');
var bindings_component_1 = require('./bindings/bindings.component');
var forms_component_1 = require('./forms/forms.component');
var routes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'bindings',
        component: bindings_component_1.BindingsComponent
    },
    {
        path: 'forms',
        component: forms_component_1.FormsComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map