import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ServerTransferStateModule } from '../transfer-state.server.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    ServerModule,
    ServerTransferStateModule,
    AppModule
  ]
})
export class ServerAppModule { }
