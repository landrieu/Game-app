"use strict";
var Game = (function () {
    function Game(_id, name, characters, platforms, path, abstract, players, description) {
        this._id = _id;
        this.name = name;
        this.characters = characters;
        this.platforms = platforms;
        this.path = path;
        this.abstract = abstract;
        this.players = players;
        this.description = description;
    }
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=Game.js.map