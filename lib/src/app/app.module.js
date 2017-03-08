var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, Component } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Component({
        template: "\n    <h1>home works!</h1>\n  "
    })
], HomeComponent);
export { HomeComponent };
var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Component({
        template: "\n    <h1>about works!</h1>\n  "
    })
], AboutComponent);
export { AboutComponent };
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [
            HttpModule,
            RouterModule.forRoot([
                { path: '', component: HomeComponent, pathMatch: 'full' },
                { path: 'about', component: AboutComponent, pathMatch: 'full' }
            ])
        ],
        providers: [
            { provide: APP_BASE_HREF, useValue: '/' }
        ],
        declarations: [
            AppComponent,
            HomeComponent,
            AboutComponent
        ],
        exports: [AppComponent]
    })
], AppModule);
export { AppModule };
