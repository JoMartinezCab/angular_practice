import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'cli-test',
  loadChildren: () => import('./01-cli-test/core/core.module').then(m=>m.CoreModule)
}, {
  path: '**',
  redirectTo: 'cli-test'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
