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
                    <a href="index.html" data-type="index-link">szakdolgozat documentation</a>
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
                                <a href="modules/AccountPageModule.html" data-type="entity-link" >AccountPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountPageModule-0b1f4433b8c8be9441bb9f1aff14bb69"' : 'data-target="#xs-components-links-module-AccountPageModule-0b1f4433b8c8be9441bb9f1aff14bb69"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountPageModule-0b1f4433b8c8be9441bb9f1aff14bb69"' :
                                            'id="xs-components-links-module-AccountPageModule-0b1f4433b8c8be9441bb9f1aff14bb69"' }>
                                            <li class="link">
                                                <a href="components/AccountPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountPageRoutingModule.html" data-type="entity-link" >AccountPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AddCalendarPageModule.html" data-type="entity-link" >AddCalendarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddCalendarPageModule-b48e11daa9f74aa88b507a018b466768"' : 'data-target="#xs-components-links-module-AddCalendarPageModule-b48e11daa9f74aa88b507a018b466768"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddCalendarPageModule-b48e11daa9f74aa88b507a018b466768"' :
                                            'id="xs-components-links-module-AddCalendarPageModule-b48e11daa9f74aa88b507a018b466768"' }>
                                            <li class="link">
                                                <a href="components/AddCalendarPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCalendarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddCalendarPageRoutingModule.html" data-type="entity-link" >AddCalendarPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AddSubjectPageModule.html" data-type="entity-link" >AddSubjectPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AddSubjectPageModule-096edaf4603f8c6e664d2c6204ffdfdb"' : 'data-target="#xs-components-links-module-AddSubjectPageModule-096edaf4603f8c6e664d2c6204ffdfdb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AddSubjectPageModule-096edaf4603f8c6e664d2c6204ffdfdb"' :
                                            'id="xs-components-links-module-AddSubjectPageModule-096edaf4603f8c6e664d2c6204ffdfdb"' }>
                                            <li class="link">
                                                <a href="components/AddSubjectPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddSubjectPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AddSubjectPageRoutingModule.html" data-type="entity-link" >AddSubjectPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0fec441c00fb775d4720978fd9f9382f"' : 'data-target="#xs-components-links-module-AppModule-0fec441c00fb775d4720978fd9f9382f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0fec441c00fb775d4720978fd9f9382f"' :
                                            'id="xs-components-links-module-AppModule-0fec441c00fb775d4720978fd9f9382f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalculatorPageModule.html" data-type="entity-link" >CalculatorPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalculatorPageModule-3761ae539bdcf9b3297fb6e6e9809524"' : 'data-target="#xs-components-links-module-CalculatorPageModule-3761ae539bdcf9b3297fb6e6e9809524"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalculatorPageModule-3761ae539bdcf9b3297fb6e6e9809524"' :
                                            'id="xs-components-links-module-CalculatorPageModule-3761ae539bdcf9b3297fb6e6e9809524"' }>
                                            <li class="link">
                                                <a href="components/CalculatorPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalculatorPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalculatorPageRoutingModule.html" data-type="entity-link" >CalculatorPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarPageModule.html" data-type="entity-link" >CalendarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalendarPageModule-d882cb0cb4c5b8d8b77ade50d1596f7b"' : 'data-target="#xs-components-links-module-CalendarPageModule-d882cb0cb4c5b8d8b77ade50d1596f7b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalendarPageModule-d882cb0cb4c5b8d8b77ade50d1596f7b"' :
                                            'id="xs-components-links-module-CalendarPageModule-d882cb0cb4c5b8d8b77ade50d1596f7b"' }>
                                            <li class="link">
                                                <a href="components/CalendarPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalendarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalendarPageRoutingModule.html" data-type="entity-link" >CalendarPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EditSubjectPageModule.html" data-type="entity-link" >EditSubjectPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EditSubjectPageModule-2bad81d86b481c48aea43f3605867b13"' : 'data-target="#xs-components-links-module-EditSubjectPageModule-2bad81d86b481c48aea43f3605867b13"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EditSubjectPageModule-2bad81d86b481c48aea43f3605867b13"' :
                                            'id="xs-components-links-module-EditSubjectPageModule-2bad81d86b481c48aea43f3605867b13"' }>
                                            <li class="link">
                                                <a href="components/EditSubjectPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditSubjectPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EditSubjectPageRoutingModule.html" data-type="entity-link" >EditSubjectPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageModule.html" data-type="entity-link" >ForgotPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ForgotPasswordPageModule-959aa72c22fa33aa60dd0ae7b0ecdd91"' : 'data-target="#xs-components-links-module-ForgotPasswordPageModule-959aa72c22fa33aa60dd0ae7b0ecdd91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ForgotPasswordPageModule-959aa72c22fa33aa60dd0ae7b0ecdd91"' :
                                            'id="xs-components-links-module-ForgotPasswordPageModule-959aa72c22fa33aa60dd0ae7b0ecdd91"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ForgotPasswordPageRoutingModule.html" data-type="entity-link" >ForgotPasswordPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GyikPageModule.html" data-type="entity-link" >GyikPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GyikPageModule-e8b8786d1f5ebb7f8bc054b3e80e5f4e"' : 'data-target="#xs-components-links-module-GyikPageModule-e8b8786d1f5ebb7f8bc054b3e80e5f4e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GyikPageModule-e8b8786d1f5ebb7f8bc054b3e80e5f4e"' :
                                            'id="xs-components-links-module-GyikPageModule-e8b8786d1f5ebb7f8bc054b3e80e5f4e"' }>
                                            <li class="link">
                                                <a href="components/GyikPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GyikPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GyikPageRoutingModule.html" data-type="entity-link" >GyikPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-7fb49560799fc59e98a9546b8d88591e"' : 'data-target="#xs-components-links-module-HomePageModule-7fb49560799fc59e98a9546b8d88591e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-7fb49560799fc59e98a9546b8d88591e"' :
                                            'id="xs-components-links-module-HomePageModule-7fb49560799fc59e98a9546b8d88591e"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-fd5e2ff9e71c9ee41a438a58913003d7"' : 'data-target="#xs-components-links-module-LoginPageModule-fd5e2ff9e71c9ee41a438a58913003d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-fd5e2ff9e71c9ee41a438a58913003d7"' :
                                            'id="xs-components-links-module-LoginPageModule-fd5e2ff9e71c9ee41a438a58913003d7"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LogoModule.html" data-type="entity-link" >LogoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LogoModule-2b23a1a3a291b3d153b601f325d0f233"' : 'data-target="#xs-components-links-module-LogoModule-2b23a1a3a291b3d153b601f325d0f233"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogoModule-2b23a1a3a291b3d153b601f325d0f233"' :
                                            'id="xs-components-links-module-LogoModule-2b23a1a3a291b3d153b601f325d0f233"' }>
                                            <li class="link">
                                                <a href="components/LogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OverviewHeaderModule.html" data-type="entity-link" >OverviewHeaderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OverviewHeaderModule-83d13fe6f837df16a2c1051d57547139"' : 'data-target="#xs-components-links-module-OverviewHeaderModule-83d13fe6f837df16a2c1051d57547139"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OverviewHeaderModule-83d13fe6f837df16a2c1051d57547139"' :
                                            'id="xs-components-links-module-OverviewHeaderModule-83d13fe6f837df16a2c1051d57547139"' }>
                                            <li class="link">
                                                <a href="components/OverviewHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverviewHeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OverviewPageModule.html" data-type="entity-link" >OverviewPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OverviewPageModule-e1b58ce938aed912c9f9f831cba50c75"' : 'data-target="#xs-components-links-module-OverviewPageModule-e1b58ce938aed912c9f9f831cba50c75"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OverviewPageModule-e1b58ce938aed912c9f9f831cba50c75"' :
                                            'id="xs-components-links-module-OverviewPageModule-e1b58ce938aed912c9f9f831cba50c75"' }>
                                            <li class="link">
                                                <a href="components/OverviewPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OverviewPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OverviewPageRoutingModule.html" data-type="entity-link" >OverviewPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageModule.html" data-type="entity-link" >RegisterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterPageModule-724858ab75e8f949c013c28625270937"' : 'data-target="#xs-components-links-module-RegisterPageModule-724858ab75e8f949c013c28625270937"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterPageModule-724858ab75e8f949c013c28625270937"' :
                                            'id="xs-components-links-module-RegisterPageModule-724858ab75e8f949c013c28625270937"' }>
                                            <li class="link">
                                                <a href="components/RegisterPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageRoutingModule.html" data-type="entity-link" >RegisterPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectsPageModule.html" data-type="entity-link" >SubjectsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SubjectsPageModule-6fa2c6ae88c9ad20c88e01efbac057ab"' : 'data-target="#xs-components-links-module-SubjectsPageModule-6fa2c6ae88c9ad20c88e01efbac057ab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SubjectsPageModule-6fa2c6ae88c9ad20c88e01efbac057ab"' :
                                            'id="xs-components-links-module-SubjectsPageModule-6fa2c6ae88c9ad20c88e01efbac057ab"' }>
                                            <li class="link">
                                                <a href="components/SubjectsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubjectsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubjectsPageRoutingModule.html" data-type="entity-link" >SubjectsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyEmailPageModule.html" data-type="entity-link" >VerifyEmailPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VerifyEmailPageModule-d8e37aa2a042c1c4c89b4399f1ef68c2"' : 'data-target="#xs-components-links-module-VerifyEmailPageModule-d8e37aa2a042c1c4c89b4399f1ef68c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VerifyEmailPageModule-d8e37aa2a042c1c4c89b4399f1ef68c2"' :
                                            'id="xs-components-links-module-VerifyEmailPageModule-d8e37aa2a042c1c4c89b4399f1ef68c2"' }>
                                            <li class="link">
                                                <a href="components/VerifyEmailPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VerifyEmailPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VerifyEmailPageRoutingModule.html" data-type="entity-link" >VerifyEmailPageRoutingModule</a>
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
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CalendarService.html" data-type="entity-link" >CalendarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SemesterService.html" data-type="entity-link" >SemesterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubjectService.html" data-type="entity-link" >SubjectService</a>
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
                                <a href="interfaces/Event.html" data-type="entity-link" >Event</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Subject.html" data-type="entity-link" >Subject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Test.html" data-type="entity-link" >Test</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
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
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
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