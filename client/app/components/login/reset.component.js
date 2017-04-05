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
var user_service_1 = require('../../services/user.service');
//import { User } from '../../../User';
var User_1 = require('../users/User');
var router_1 = require('@angular/router');
var ResetComponent = (function () {
    function ResetComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.notFound = false;
        this.success = false;
        this.id = route.snapshot.url[2].path;
    }
    ResetComponent.prototype.reset = function () {
        var _this = this;
        var userGet;
        this.userService.getUser(this.id)
            .subscribe(function (user) {
            userGet = user;
            //console.log(user);
            if (user == null) {
                _this.notFound = true;
            }
            else {
                _this.notFound = false;
                var _user = new User_1.User("", "", "", "", "", false, 0, 0);
                _user = user;
                _user.password = _this.password;
                _this.userService.updateUser(_user).subscribe(function (data) {
                    console.log("Profile Updated");
                });
                _this.success = true;
            }
        });
    };
    ResetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reset',
            templateUrl: 'reset.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, user_service_1.UserService])
    ], ResetComponent);
    return ResetComponent;
}());
exports.ResetComponent = ResetComponent;
//# sourceMappingURL=reset.component.js.map