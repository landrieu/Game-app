"use strict";
var Lfg = (function () {
    function Lfg(_id, game, typeTeam, type, timeStart, duration, description) {
        this._id = _id;
        this.game = game;
        this.typeTeam = typeTeam;
        this.type = type;
        this.timeStart = timeStart;
        this.duration = duration;
        this.description = description;
    }
    return Lfg;
}());
exports.Lfg = Lfg;
//# sourceMappingURL=Lfg.js.map