import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class SharedModule { }