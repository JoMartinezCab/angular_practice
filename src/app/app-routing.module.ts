import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotPageFoundComponent } from './shared/pages/not-page-found/not-page-found.component';

const routes: Routes = [{
  path: 'cli test',
  loadChildren: () => import('./01-cli-test/core/core.module').then(m=>m.CoreModule)
}, {
  path: 'Admin pro',
  loadChildren: () => import('./02-admin-pro/core/core.module').then(m=>m.CoreModule)
},{
  path: '404',
  component: NotPageFoundComponent
},{
  path: '**',
  redirectTo: 'cli-test'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
