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
var LfgService = (function () {
    function LfgService(http) {
        this.http = http;
        console.log('Preference Servcie Initialized ...');
    }
    LfgService.prototype.getLFG = function () {
        return this.http.get('lfg/lfgs')
            .map(function (res) { return res.json(); });
    };
    /*getCharactersForOne(username:any){
        return this.http.get('/pfr/character/'+username)
            .map(res => res.json());
    }*/
    LfgService.prototype.postLfg = function (newLfg) {
        //console.log(newGame);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/lfg/post', JSON.stringify(newLfg), { headers: headers })
            .map(function (res) { return res.json(); });
    }; /*
    deleteGame(id:any){
        return this.http.delete('/gm/game/'+id)
            .map(res => res.json());
    }
    updateStatus(game:any){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put('/gm/game/'+game._id, JSON.stringify(game),{headers:headers})
            .map(res => res.json());
        
    }*/
    LfgService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LfgService);
    return LfgService;
}());
exports.LfgService = LfgService;
//# sourceMappingURL=lfg.service.js.map