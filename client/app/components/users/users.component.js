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
var User_1 = require('./User');
var UsersComponent = (function () {
    function UsersComponent(userService /*, private router : Router*/) {
        var _this = this;
        this.userService = userService;
        this.hide = true;
        this.registered = false;
        this.model = new User_1.User("-1", '', '', '', '', false, 0, 1);
        this.signed = false;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
            // console.log(tasks);
        });
        if (sessionStorage.getItem("logged") == "Yes") {
            this.signed = true;
        }
    }
    ;
    UsersComponent.prototype.addUser = function (event) {
        var _this = this;
        var exist = false;
        //console.log(this.users);
        //event.preventDefault();
        var newUser = {
            name: this.model.name,
            username: this.model.username,
            password: this.model.password,
            email: this.model.email,
            timezone: 0,
            age: 1
        };
        this.users.forEach(function (element) {
            //console.log(element.name);
            if (element.username == newUser.username) {
                exist = true;
            }
        });
        if (exist == false) {
            this.error = "";
            this.hide = true;
            this.registered = true;
            this.userService.addUser(newUser)
                .subscribe(function (user) {
                _this.users.push(user);
                _this.model.name = '';
                _this.model.username = '';
                _this.model.password = '';
                //this.model.email='';
            });
        }
        else {
            this.hide = false;
            this.registered = false;
            this.error = "This user exists";
        }
        //console.log(this.title);
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var users = this.users;
        this.userService.deleteUser(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i]._id == id) {
                        users.splice(i, 1);
                    }
                }
            }
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users',
            templateUrl: 'users.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map