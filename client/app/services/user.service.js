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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
//import { AppConfig } from '../app.config';
//import { User } from '../models/index';
var UserService = (function () {
    function UserService(http /*, private config: AppConfig*/) {
        this.http = http;
        console.log('User Servcie Initialized ...');
    }
    UserService.prototype.getUsers = function () {
        return this.http.get('/usr/users')
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (newUser) {
        console.log(newUser);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/usr/user', JSON.stringify(newUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete('/usr/user/' + id)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get('/usr/user/' + id)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/usr/user/' + user._id, JSON.stringify(user), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.passwordForgot = function (emailTo, id) {
        var newUser = {
            email: emailTo,
            id: id
        };
        console.log("SERVICE" + newUser.id);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/usr/user/reset/', JSON.stringify(newUser), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.findUserByEmail = function (email) {
        //console.log("SERVICE"+email);
        return this.http.get('/usr/user/findByEmail/' + email)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map