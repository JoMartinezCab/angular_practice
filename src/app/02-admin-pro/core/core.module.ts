import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from '../module/auth/auth.module';
import { DashboardModule } from '../module/dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    DashboardModule
  ]
})

export class CoreModule { }
