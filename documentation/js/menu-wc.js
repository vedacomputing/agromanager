'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">agromanager documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="link ">
                                        <a href="additional-documentation/introduction.html" data-type="entity-link" data-context-id="additional">Introduction</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/app-design.html" data-type="entity-link" data-context-id="additional">App-design</a>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/lib-design.html" data-type="entity-link" data-context-id="additional">Lib-design</a>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/db-design.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-94b6dcacadf2417716f009c7cae4a40e"' : 'data-target="#xs-additional-page-94b6dcacadf2417716f009c7cae4a40e"' }>
                                                <span class="link-name">DB-design</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-94b6dcacadf2417716f009c7cae4a40e"' : 'id="xs-additional-page-94b6dcacadf2417716f009c7cae4a40e"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/db-design/company.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">company</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/db-design/user.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">user</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/db-design/field.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">field</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/db-design/livestock.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">livestock</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/db-design/personnel.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">personnel</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/db-design/inventory.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">inventory</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/db-design/building.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">building</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/db-design/equipment.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">equipment</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-56f39fe66fb80481b1a9894f81909fbe"' : 'data-target="#xs-components-links-module-AppModule-56f39fe66fb80481b1a9894f81909fbe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-56f39fe66fb80481b1a9894f81909fbe"' :
                                            'id="xs-components-links-module-AppModule-56f39fe66fb80481b1a9894f81909fbe"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureApiAuthModule.html" data-type="entity-link">FeatureApiAuthModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureLazyAboutModule.html" data-type="entity-link">FeatureLazyAboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureLazyAboutModule-3dede72d4817c3b0106cbe097fbbee93"' : 'data-target="#xs-components-links-module-FeatureLazyAboutModule-3dede72d4817c3b0106cbe097fbbee93"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureLazyAboutModule-3dede72d4817c3b0106cbe097fbbee93"' :
                                            'id="xs-components-links-module-FeatureLazyAboutModule-3dede72d4817c3b0106cbe097fbbee93"' }>
                                            <li class="link">
                                                <a href="components/AboutPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureLazyHelpModule.html" data-type="entity-link">FeatureLazyHelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureLazyHelpModule-7974cf6ebf2c25858b0a89c740b860f1"' : 'data-target="#xs-components-links-module-FeatureLazyHelpModule-7974cf6ebf2c25858b0a89c740b860f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureLazyHelpModule-7974cf6ebf2c25858b0a89c740b860f1"' :
                                            'id="xs-components-links-module-FeatureLazyHelpModule-7974cf6ebf2c25858b0a89c740b860f1"' }>
                                            <li class="link">
                                                <a href="components/HelpPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureLazyHomeModule.html" data-type="entity-link">FeatureLazyHomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureLazyHomeModule-b902ba9c1557fc1e3943c046f11deb60"' : 'data-target="#xs-components-links-module-FeatureLazyHomeModule-b902ba9c1557fc1e3943c046f11deb60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureLazyHomeModule-b902ba9c1557fc1e3943c046f11deb60"' :
                                            'id="xs-components-links-module-FeatureLazyHomeModule-b902ba9c1557fc1e3943c046f11deb60"' }>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureLazyLoginModule.html" data-type="entity-link">FeatureLazyLoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureLazyLoginModule-8ad0722fc9651ad66f880c16d7d1c4bf"' : 'data-target="#xs-components-links-module-FeatureLazyLoginModule-8ad0722fc9651ad66f880c16d7d1c4bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureLazyLoginModule-8ad0722fc9651ad66f880c16d7d1c4bf"' :
                                            'id="xs-components-links-module-FeatureLazyLoginModule-8ad0722fc9651ad66f880c16d7d1c4bf"' }>
                                            <li class="link">
                                                <a href="components/LoginPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureLazyProfileModule.html" data-type="entity-link">FeatureLazyProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureLazyProfileModule-93dffc5ef2f2b7f1662e473dab8a0064"' : 'data-target="#xs-components-links-module-FeatureLazyProfileModule-93dffc5ef2f2b7f1662e473dab8a0064"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureLazyProfileModule-93dffc5ef2f2b7f1662e473dab8a0064"' :
                                            'id="xs-components-links-module-FeatureLazyProfileModule-93dffc5ef2f2b7f1662e473dab8a0064"' }>
                                            <li class="link">
                                                <a href="components/ProfilePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureLazySettingsModule.html" data-type="entity-link">FeatureLazySettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureLazySettingsModule-7a5730c2dd1d82fda6557d6be8eb74f5"' : 'data-target="#xs-components-links-module-FeatureLazySettingsModule-7a5730c2dd1d82fda6557d6be8eb74f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureLazySettingsModule-7a5730c2dd1d82fda6557d6be8eb74f5"' :
                                            'id="xs-components-links-module-FeatureLazySettingsModule-7a5730c2dd1d82fda6557d6be8eb74f5"' }>
                                            <li class="link">
                                                <a href="components/SettingsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureModulesAnimalsModule.html" data-type="entity-link">FeatureModulesAnimalsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureModulesAnimalsModule-4f5e82f7f3fbb586d070556396bf4d18"' : 'data-target="#xs-components-links-module-FeatureModulesAnimalsModule-4f5e82f7f3fbb586d070556396bf4d18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureModulesAnimalsModule-4f5e82f7f3fbb586d070556396bf4d18"' :
                                            'id="xs-components-links-module-FeatureModulesAnimalsModule-4f5e82f7f3fbb586d070556396bf4d18"' }>
                                            <li class="link">
                                                <a href="components/AnimalsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnimalsPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeatureModulesDashboardModule.html" data-type="entity-link">FeatureModulesDashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FeatureModulesDashboardModule-af24abf1e973b55a8b7d8e8e95253fbb"' : 'data-target="#xs-components-links-module-FeatureModulesDashboardModule-af24abf1e973b55a8b7d8e8e95253fbb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FeatureModulesDashboardModule-af24abf1e973b55a8b7d8e8e95253fbb"' :
                                            'id="xs-components-links-module-FeatureModulesDashboardModule-af24abf1e973b55a8b7d8e8e95253fbb"' }>
                                            <li class="link">
                                                <a href="components/DashboardPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiKitsMainModule.html" data-type="entity-link">UiKitsMainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiKitsMainModule-8059bee48a5b7d4826474d9d0e96c48e"' : 'data-target="#xs-components-links-module-UiKitsMainModule-8059bee48a5b7d4826474d9d0e96c48e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiKitsMainModule-8059bee48a5b7d4826474d9d0e96c48e"' :
                                            'id="xs-components-links-module-UiKitsMainModule-8059bee48a5b7d4826474d9d0e96c48e"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});