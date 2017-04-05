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
var GameService = (function () {
    function GameService(http) {
        this.http = http;
        console.log('Game Servcie Initialized ...');
    }
    GameService.prototype.getGames = function () {
        return this.http.get('/gm/games')
            .map(function (res) { return res.json(); });
    };
    GameService.prototype.getGame = function (id) {
        return this.http.get('/gm/game/' + id)
            .map(function (res) { return res.json(); });
    };
    GameService.prototype.addGame = function (newGame) {
        //console.log(newGame);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/gm/game', JSON.stringify(newGame), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GameService.prototype.deleteGame = function (id) {
        return this.http.delete('/gm/game/' + id)
            .map(function (res) { return res.json(); });
    };
    GameService.prototype.updateStatus = function (game) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/gm/game/' + game._id, JSON.stringify(game), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map