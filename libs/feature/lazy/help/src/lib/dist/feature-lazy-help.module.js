"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeatureLazyHelpModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var help_page_component_1 = require("./help-page/help-page.component");
var FeatureLazyHelpModule = /** @class */ (function () {
    function FeatureLazyHelpModule() {
    }
    FeatureLazyHelpModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: '', pathMatch: 'full', component: help_page_component_1.HelpPageComponent }
                ]),
            ],
            declarations: [help_page_component_1.HelpPageComponent]
        })
    ], FeatureLazyHelpModule);
    return FeatureLazyHelpModule;
}());
exports.FeatureLazyHelpModule = FeatureLazyHelpModule;
