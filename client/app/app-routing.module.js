"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tasks_component_1 = require('./components/tasks/tasks.component');
var users_component_1 = require('./components/users/users.component');
var login_component_1 = require('./components/login/login.component');
var profile_component_1 = require('./components/profile/profile.component');
var games_component_1 = require('./components/games/games.component');
var lfg_component_1 = require('./components/lfg/lfg.component');
var router_1 = require('@angular/router');
var appRoutes = [
    { path: 'home', component: tasks_component_1.TasksComponent },
    { path: 'signup', component: users_component_1.UsersComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'games', component: games_component_1.GamesComponent },
    { path: 'lfg', component: lfg_component_1.LfgComponent },
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: '**', component: users_component_1.UsersComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map