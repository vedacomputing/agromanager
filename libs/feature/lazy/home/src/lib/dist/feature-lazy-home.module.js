"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FeatureLazyHomeModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var home_page_component_1 = require("./home-page/home-page.component");
var FeatureLazyHomeModule = /** @class */ (function () {
    function FeatureLazyHomeModule() {
    }
    FeatureLazyHomeModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: '', pathMatch: 'full', component: home_page_component_1.HomePageComponent }
                ]),
            ],
            declarations: [home_page_component_1.HomePageComponent]
        })
    ], FeatureLazyHomeModule);
    return FeatureLazyHomeModule;
}());
exports.FeatureLazyHomeModule = FeatureLazyHomeModule;
