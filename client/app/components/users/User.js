"use strict";
var User = (function () {
    function User(_id, name, username, password, email, valid, timezone, age) {
        this._id = _id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.valid = valid;
        this.timezone = timezone;
        this.age = age;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map