"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var main_1 = require("@agromanager/ui-kits/main");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                main_1.UiKitsMainModule,
                flex_layout_1.FlexLayoutModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('@agromanager/feature/lazy/home'); }).then(function (module) { return module.FeatureLazyHomeModule; });
                        }
                    },
                    {
                        path: 'login',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('@agromanager/feature/lazy/login'); }).then(function (module) { return module.FeatureLazyLoginModule; });
                        }
                    },
                    {
                        path: 'about',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('@agromanager/feature/lazy/about'); }).then(function (module) { return module.FeatureLazyAboutModule; });
                        }
                    },
                    {
                        path: 'help',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('@agromanager/feature/lazy/help'); }).then(function (module) { return module.FeatureLazyHelpModule; });
                        }
                    },
                    {
                        path: 'settings',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('@agromanager/feature/lazy/settings'); }).then(function (module) { return module.FeatureLazySettingsModule; });
                        }
                    },
                    {
                        path: 'profile',
                        loadChildren: function () {
                            return Promise.resolve().then(function () { return require('@agromanager/feature/lazy/profile'); }).then(function (module) { return module.FeatureLazyProfileModule; });
                        }
                    },
                ], { initialNavigation: 'enabled' }),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
