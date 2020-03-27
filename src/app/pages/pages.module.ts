import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReservasModule } from './reservas/reservas.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,

    ReservasModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
