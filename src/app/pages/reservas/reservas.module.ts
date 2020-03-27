import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbInputModule,
  NbRadioModule,
  NbButtonModule,
  NbIconModule,
  NbSpinnerModule,
  NbAccordionModule,
  NbSelectModule,

} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservasComponent } from './reservas.component';
import { CursoComponent } from './curso/curso.component';
import { ReservasRoutingModule } from './reservas-routing.module';
import { SugerenciaComponent } from './sugerencias/sugerencias.component';

@NgModule({
  imports: [
    ReservasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbCardModule,
    NbInputModule,
    NbRadioModule,
    NbButtonModule,
    NbIconModule,
    NbSpinnerModule,
    NbAccordionModule,

    NbSelectModule,

  ],
  declarations: [
    ReservasComponent,
    CursoComponent,
    SugerenciaComponent

  ]
})
export class ReservasModule {}
