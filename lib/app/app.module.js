<<<<<<< HEAD
import { NgModule, Component } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> dc4570b... 211th Commit
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
<<<<<<< HEAD
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
export { HomeComponent };
HomeComponent.decorators = [
    { type: Component, args: [{
                template: "\n    <h1>home works!</h1>\n  "
            },] },
];
/** @nocollapse */
HomeComponent.ctorParameters = function () { return []; };
var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
export { AboutComponent };
AboutComponent.decorators = [
    { type: Component, args: [{
                template: "\n    <h1>about works!</h1>\n  "
            },] },
];
/** @nocollapse */
AboutComponent.ctorParameters = function () { return []; };
=======
import { HomeView } from './home-view.component';
>>>>>>> dc4570b... 211th Commit
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
export { AppModule };
AppModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HttpModule,
                    RouterModule.forRoot([
<<<<<<< HEAD
                        { path: '', component: HomeComponent, pathMatch: 'full' },
                        { path: 'about', component: AboutComponent, pathMatch: 'full' }
=======
                        { path: '', component: HomeView, pathMatch: 'full' },
                        { path: 'lazy', loadChildren: './lazy.module#LazyModule' }
>>>>>>> dc4570b... 211th Commit
                    ])
                ],
                providers: [
                    { provide: APP_BASE_HREF, useValue: '/' }
                ],
<<<<<<< HEAD
                declarations: [
                    AppComponent,
                    HomeComponent,
                    AboutComponent
                ],
=======
                declarations: [AppComponent, HomeView],
>>>>>>> dc4570b... 211th Commit
                exports: [AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
