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
var game_service_1 = require('../../services/game.service');
var Game_1 = require('../users/Game');
var router_1 = require('@angular/router');
var DetailComponent = (function () {
    function DetailComponent(route, gameService) {
        var _this = this;
        this.route = route;
        this.gameService = gameService;
        this.game = new Game_1.Game("", "", [], [], "", "", 0, "");
        this.dirname = __dirname + "/";
        this.id = route.snapshot.url[2].path;
        console.log("ID: " + this.id);
        this.gameService.getGame(this.id)
            .subscribe(function (game) {
            _this.game = game;
        });
        this.game.path = __dirname + '/' + this.game.path;
    }
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail',
            templateUrl: 'detail.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, game_service_1.GameService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map