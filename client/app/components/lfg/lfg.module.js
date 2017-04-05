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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var lfg_component_1 = require('./lfg.component');
var post_component_1 = require('./post.component');
var user_service_1 = require('../../services/user.service');
var lfg_service_1 = require('../../services/lfg.service');
var lfg_routing_module_1 = require('./lfg-routing.module');
var LfgModule = (function () {
    function LfgModule() {
    }
    LfgModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                lfg_routing_module_1.LfgRoutingModule
            ],
            declarations: [
                lfg_component_1.LfgComponent,
                post_component_1.PostComponent
            ],
            providers: [lfg_service_1.LfgService, user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [])
    ], LfgModule);
    return LfgModule;
}());
exports.LfgModule = LfgModule;
//# sourceMappingURL=lfg.module.js.map