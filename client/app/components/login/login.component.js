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
//import { LocalStorageModule } from 'angular-2-local-storage';
//import { LocalStorageService } from 'angular-2-local-storage'; 
//import * as sha1 from 'js-sha1';
var LoginComponent = (function () {
    function LoginComponent(route, router, userService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.loading = false;
        this.model = new User_1.User('-1', '', '', '', '', false, 0, 1);
        this.logged = false;
        this.problem = false;
        this.signed = false;
        this.valid = true;
        this.reset = false;
        this.sent = true;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            console.log(users);
        });
        console.log(this.users);
        if (sessionStorage.getItem("logged") == "Yes") {
            this.signed = true;
        }
    }
    LoginComponent.prototype.signIn = function () {
        var newUser = {
            username: this.model.username,
            password: this.model.password
        };
        var logged = false;
        var valid = true;
        this.users.forEach(function (element) {
            //console.log(element.name);
            if (element.username == newUser.username && element.password == newUser.password) {
                logged = true;
                if (element.valid) {
                    sessionStorage.setItem("user", element.username);
                    sessionStorage.setItem("id", element._id.toString());
                    sessionStorage.setItem("logged", "Yes");
                    console.log("V:" + logged);
                }
                else {
                    valid = false;
                }
            }
            //console.log("Log");
        });
        //console.log("A:"+logged+" B:"+valid);
        if (logged && valid) {
            //this.logged = true;
            this.problem = false;
            this.signed = true;
            this.valid = true;
        }
        if (logged && !valid) {
            this.valid = false;
            //this.logged = false;
            this.problem = false;
        }
        if (!logged) {
            //this.logged = false;
            this.problem = true;
            this.valid = true;
        }
    };
    LoginComponent.prototype.passwordForgot = function () {
        this.reset = !this.reset;
    };
    LoginComponent.prototype.sendEmail = function () {
        var _this = this;
        var id;
        console.log("HERE");
        //console.log("O?: "+this.email);
        this.userService.findUserByEmail(this.email)
            .subscribe(function (user1) {
            //console.log(user);
            //id=user._id;
            //console.log("ASq"+user._id);
            if (user1 != null) {
                _this.userService.passwordForgot(_this.email, user1._id)
                    .subscribe(function (user) {
                });
            }
            else {
                console.log("User not found");
            }
        });
        //console.log("AS"+id);
        this.reset = !this.reset;
        this.sent = !this.sent;
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: 'login.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map