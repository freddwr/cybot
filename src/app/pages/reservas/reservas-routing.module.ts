import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CursoComponent } from './curso/curso.component';
import { ReservasComponent } from './reservas.component';
import { SugerenciaComponent } from './sugerencias/sugerencias.component';

const routes: Routes = [
  {
    path: '',
    component: ReservasComponent,
    children: [
      {
        path: 'sugerencias',
        component: SugerenciaComponent
      },
      {
        path: 'cursos',
        component: CursoComponent,
      },
      { path: '', redirectTo: 'cursos', pathMatch: 'full' },
      { path: '**', redirectTo: 'cursos' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasRoutingModule {
}
