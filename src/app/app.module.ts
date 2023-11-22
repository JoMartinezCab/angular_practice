import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

/**
 * Projectos Angular adv
 */
import { CoreModule as CliTestModule } from '@app/01-cli-test/core/core.module';
import { CoreModule as AdminProModule } from '@app/02-admin-pro/core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    SharedModule,
    CliTestModule,
    AdminProModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
