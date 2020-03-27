import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'reservas',
      loadChildren: () => import('./reservas/reservas.module')
        .then(m => m.ReservasModule),
    },
    { path: '', redirectTo: 'reservas', pathMatch: 'full' },
    { path: '**', redirectTo: 'reservas' },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
