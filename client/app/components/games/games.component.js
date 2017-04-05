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
var router_1 = require('@angular/router');
//import { FileUploader } from 'ng2-file-upload';
// const URL = '/api/';
var URL = 'http://localho/';
var GamesComponent = (function () {
    function GamesComponent(route, gameService, userService) {
        var _this = this;
        this.route = route;
        this.gameService = gameService;
        this.userService = userService;
        this.notFound = false;
        this.dirname = __dirname + "/";
        this.gameService.getGames()
            .subscribe(function (games) {
            _this.allGame = games;
        });
    }
    GamesComponent.prototype.search = function () {
        var i, j, l;
        l = 0;
        var R = new Array;
        var X = new Array;
        var p = this.platformGame;
        var nameG = this.nameGame;
        if (this.platformGame != "All") {
            this.allGame.forEach(function (element) {
                element.platforms.forEach(function (element2) {
                    if (element2 == p) {
                        R.push(element);
                    }
                });
            });
            this.arrayGame = R;
        }
        else {
            this.arrayGame = this.allGame;
        }
        if (this.nameGame != undefined && this.nameGame != "") {
            this.arrayGame.forEach(function (element) {
                if (element.name == nameG) {
                    X.push(element);
                }
            });
            this.arrayGame = X;
        }
        if (this.arrayGame.length == 0) {
            this.notFound = true;
        }
        else {
            this.notFound = false;
        }
        //console.log(this.arrayGame);
    };
    GamesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'games',
            templateUrl: 'games.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, game_service_1.GameService, user_service_1.UserService])
    ], GamesComponent);
    return GamesComponent;
}());
exports.GamesComponent = GamesComponent;
//# sourceMappingURL=games.component.js.map