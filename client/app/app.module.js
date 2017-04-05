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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var users_module_1 = require('./components/users/users.module');
var tasks_module_1 = require('./components/tasks/tasks.module');
var login_module_1 = require('./components/login/login.module');
var profile_module_1 = require('./components/profile/profile.module');
var games_module_1 = require('./components/games/games.module');
var lfg_module_1 = require('./components/lfg/lfg.module');
var http_1 = require('@angular/http');
var AppModule = (function () {
    function AppModule() {
        sessionStorage.setItem("logged", "No");
        sessionStorage.setItem("user", "");
    }
    AppModule = __decorate([
        core_1.NgModule({
            //imports:      [ RouterModule.forRoot(appRoutes),BrowserModule, HttpModule, FormsModule],
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, users_module_1.UsersModule,
                tasks_module_1.TasksModule, login_module_1.LoginModule, profile_module_1.ProfileModule, games_module_1.GamesModule,
                lfg_module_1.LfgModule, app_routing_module_1.AppRoutingModule],
            providers: [],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map