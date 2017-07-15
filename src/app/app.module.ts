import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdInputModule, MdButtonModule, MdCardModule, MdListModule, MdDialogModule, MdProgressBarModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { AppListEditDialogComponent } from './components/app-list-edit-dialog.component';

import { ListService } from './services/list.service';
import { BroadcasterService } from './services/broadcaster.service';

import { HiddenDirective } from './directives/hidden.directive';

import { ReversePipe } from './pipes/reverse.pipe';

import { CounterComponent } from './containers/counter.container';
import { counterReducer, CounterEffects } from './containers/counter';

@NgModule({
  declarations: [
    AppComponent,
    AppListEditDialogComponent,
    CounterComponent,

    HiddenDirective,

    ReversePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'mean-stack-restful-api' }),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    MdInputModule,
    MdButtonModule,
    MdCardModule,
    MdListModule,
    MdDialogModule,
    MdProgressBarModule,

    StoreModule.provideStore(counterReducer),
    EffectsModule.run(CounterEffects),
  ],
  entryComponents: [
    AppListEditDialogComponent,
  ],
  providers: [
    ListService,
    BroadcasterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
