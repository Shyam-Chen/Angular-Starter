import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from '../app/app.module';
import { AppComponent } from '../app/app.component';

@NgModule({
  imports: [
    ServerModule,
    AppModule,
  ],
  bootstrap: [AppComponent]
})
export class AppBackendModule { }
