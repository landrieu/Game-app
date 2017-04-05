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
var lfg_service_1 = require('../../services/lfg.service');
//import { User } from '../../../User';
var Lfg_1 = require('./Lfg');
var PostComponent = (function () {
    function PostComponent(lfgService, gameService) {
        var _this = this;
        this.lfgService = lfgService;
        this.gameService = gameService;
        this.Lfg = new Lfg_1.Lfg("", "", "", "", "", "", "");
        this.startTime = new Array();
        this.duration = new Array();
        this.posted = false;
        var i;
        this.gameService.getGames()
            .subscribe(function (games) {
            _this.Games = games;
            console.log(games);
        });
        for (i = 1; i < 13; i++) {
            this.startTime.push(i.toString() + " AM");
        }
        for (i = 1; i < 13; i++) {
            this.startTime.push(i.toString() + " PM");
        }
        for (i = 0; i < 5; i++) {
            this.duration.push(i.toString() + ":00 hour(s)");
            this.duration.push(i.toString() + ":15 hour(s)");
            this.duration.push(i.toString() + ":30 hour(s)");
            this.duration.push(i.toString() + ":45 hour(s)");
        }
    }
    PostComponent.prototype.post = function () {
        var _this = this;
        console.log(this.Lfg.game);
        var newPost = {
            game: this.Lfg.game,
            type: this.Lfg.type,
            typeTeam: this.Lfg.typeTeam,
            timeStart: this.Lfg.timeStart,
            duration: this.Lfg.duration,
            description: this.Lfg.description
        };
        this.lfgService.postLfg(newPost)
            .subscribe(function (lfg) {
            _this.Lfg.game = '';
            _this.Lfg.timeStart = '';
            _this.Lfg.type = '';
            _this.Lfg.typeTeam = '';
            _this.Lfg.duration = '';
            _this.Lfg.description = '';
        });
        this.posted = true;
    };
    PostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'post',
            templateUrl: 'post.component.html',
        }), 
        __metadata('design:paramtypes', [lfg_service_1.LfgService, game_service_1.GameService])
    ], PostComponent);
    return PostComponent;
}());
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map