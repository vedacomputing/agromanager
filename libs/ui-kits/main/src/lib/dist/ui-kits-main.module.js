"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UiKitsMainModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var navbar_component_1 = require("./navbar/navbar.component");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var menu_1 = require("@angular/material/menu");
var button_1 = require("@angular/material/button");
var list_1 = require("@angular/material/list");
var divider_1 = require("@angular/material/divider");
var table_1 = require("@angular/material/table");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var paginator_1 = require("@angular/material/paginator");
var flex_layout_1 = require("@angular/flex-layout");
var UiKitsMainModule = /** @class */ (function () {
    function UiKitsMainModule() {
    }
    UiKitsMainModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                menu_1.MatMenuModule,
                button_1.MatButtonModule,
                list_1.MatListModule,
                divider_1.MatDividerModule,
                table_1.MatTableModule,
                progress_spinner_1.MatProgressSpinnerModule,
                paginator_1.MatPaginatorModule,
                flex_layout_1.FlexLayoutModule,
                router_1.RouterModule,
            ],
            declarations: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, navbar_component_1.NavbarComponent],
            exports: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, navbar_component_1.NavbarComponent]
        })
    ], UiKitsMainModule);
    return UiKitsMainModule;
}());
exports.UiKitsMainModule = UiKitsMainModule;
