import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotPageFoundComponent
  ],
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
})
export class SharedModule { }
