"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeatureLazyAboutModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var about_page_component_1 = require("./about-page/about-page.component");
var FeatureLazyAboutModule = /** @class */ (function () {
    function FeatureLazyAboutModule() {
    }
    FeatureLazyAboutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: '', pathMatch: 'full', component: about_page_component_1.AboutPageComponent }
                ]),
            ]
        })
    ], FeatureLazyAboutModule);
    return FeatureLazyAboutModule;
}());
exports.FeatureLazyAboutModule = FeatureLazyAboutModule;