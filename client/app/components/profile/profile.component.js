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
var game_service_1 = require('../../services/game.service');
var preference_service_1 = require('../../services/preference.service');
//import { User } from '../../../User';
var User_1 = require('../users/User');
var Game_1 = require('../users/Game');
var ProfileComponent = (function () {
    function ProfileComponent(userService, gameService, preferenceService) {
        var _this = this;
        this.userService = userService;
        this.gameService = gameService;
        this.preferenceService = preferenceService;
        this.source = __dirname + '/photo/profile-default.jpg';
        this.signed = false;
        this.btnSubmit = false;
        this.testUsername = "cecile";
        this.testId = "58d85ce636bb0808e8b8a0ad";
        this.model = new User_1.User('-1', '', '', '', '', false, 0, 1);
        this.copyUser = new User_1.User('-1', '', '', '', '', false, 0, 1);
        this.errorAge = false;
        this.gameSelected = new Game_1.Game("1", "default", [], [], "", "", 0, "");
        var id = this.testId;
        var model = new User_1.User('-1', '', '', '', '', false, 0, 1);
        this.userService.getUser(id)
            .subscribe(function (user) {
            console.log(user);
            _this.model.name = user.name;
            _this.model.username = user.username;
            _this.model.email = user.email;
            _this.model._id = user._id;
            _this.model.age = user.age;
            _this.copyUser.name = user.name;
            _this.copyUser.username = user.username;
            _this.copyUser.email = user.email;
            _this.copyUser._id = user._id;
            _this.copyUser.age = user.age;
        });
        this.gameService.getGames()
            .subscribe(function (games) {
            _this.games = games;
        });
        if (sessionStorage.getItem("logged") == "Yes") {
            this.signed = true;
        }
    }
    ProfileComponent.prototype.edit = function () {
        this.btnSubmit = !this.btnSubmit;
        //console.log(this.model.name);
    };
    ProfileComponent.prototype.update = function () {
        if (this.model.age > 110 || this.model.age < 1) {
            this.errorAge = true;
        }
        else {
            this.errorAge = false;
            this.copy();
            this.btnSubmit = !this.btnSubmit;
            var _user = {
                _id: this.model._id,
                name: this.model.name,
                username: this.model.username,
                email: this.model.email,
                age: this.model.age,
            };
            this.userService.updateUser(_user).subscribe(function (data) {
                console.log("Profile Updated");
            });
        }
    };
    ProfileComponent.prototype.load = function () {
    };
    ProfileComponent.prototype.copy = function () {
        this.copyUser.name = this.model.name;
        this.copyUser.username = this.model.username;
        this.copyUser.email = this.model.email;
        this.copyUser.age = this.model.age;
        console.log("ab: " + this.copyUser.name);
    };
    ProfileComponent.prototype.onChange = function (gameSelectedName) {
        var gameSelected;
        var nb;
        this.games.forEach(function (element) {
            if (element.name == gameSelectedName) {
                gameSelected = element;
            }
        });
        this.gameSelected = gameSelected;
        //this.gameSelected.checked = [false,true];
        //this.gameSelected.checked.push(true);
        console.log(this.gameSelected);
        for (nb = 0; nb < gameSelected.characters.length; nb++) {
        }
        //gameSelected.push(this.array);
    };
    ProfileComponent.prototype.test = function () {
        var characters;
        var tab = new String();
        var j = 1;
        console.log("TEST");
        this.preferenceService.getCharactersForOne(this.model.username)
            .subscribe(function (character) {
            console.log(character);
            for (var i in character) {
                if (character.hasOwnProperty(i) && i != "username" && i != "_id") {
                    console.log(i + " -> " + character[i]);
                    j = +1;
                }
            }
        });
    };
    ProfileComponent.prototype.upload = function () {
        console.log("UP");
    };
    ProfileComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profile',
            templateUrl: 'profile.component.html',
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, game_service_1.GameService, preference_service_1.PreferenceService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map