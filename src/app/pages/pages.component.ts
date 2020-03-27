import { Component, OnDestroy } from '@angular/core';
import { NbMenuItem, NbIconLibraries } from '@nebular/theme';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <!-- <nb-menu [items]="menu"></nb-menu> -->
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnDestroy {

  menu = MENU_I;

  constructor(
    private iconLibraries: NbIconLibraries,
    ) {
    this.iconLibraries.registerFontPack('font-awesome', { packClass: 'fa', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('regular', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('solid', { packClass: 'fas', iconClassPrefix: 'fa' });

  }

  ngOnDestroy() {
  }
}

export const MENU_I = [];
// export const MENU_I: NbMenuItem[] = [
//   {
//     title: 'Configuracion',
//     icon: 'settings-outline',
//     children: [
//       {
//         title: 'Compra de Cueros',
//         link: '/pages/configuracion/entradacosto',
//       },
//       {
//         title: 'Cuero Acabado',
//         link: '/pages/configuracion/salidacosto',
//       },
//       {
//         title: 'Color',
//         link: '/pages/configuracion/color',
//       },
//     ],
//   },
//   {
//     title: 'Seguridad',
//     icon: 'lock-outline',
//     children: [
//       {
//         title: 'Roles - Privilegios',
//         link: '/pages/seguridad/rol',
//       },
//       {
//         title: 'Registro Usuario',
//         link: '/pages/seguridad/registrousuario',
//       },
//       {
//         title: 'Lista de Usuarios',
//         link: '/pages/seguridad/listausuario',
//       },
//     ],
//   },
//   {
//     title: 'Compra de Cuero',
//     icon: 'shopping-cart-outline',
//     children: [
//       {
//         title: 'Compra',
//         link: '/pages/entrada/principal',
//       },
//     ],
//   },
//   {
//     title: 'Venta de Cuero',
//     icon: 'shopping-cart-outline',
//     children: [
//       {
//         title: 'Venta de Cuero Acabado',
//         link: '/pages/salida/principal',
//       },

//     ],
//   },
//   {
//     title: 'Inventario',
//     icon: 'layers-outline',
//     children: [
//       {
//         title: 'Entrada de Cuero Acabado',
//         link: '/pages/inventario/listinventario',
//       },
//       {
//         title: 'Reporte',
//         link: '/pages/inventario/reportinv',
//       },
//       {
//         title: 'Etiquetado',
//         link: '/pages/inventario/reportetiq',
//       },
//     ],
//   },
//   {
//     title: 'Cliente o Proveedor',
//     icon: 'person-outline',
//     link: '/pages/cliente',
//   },
//   {
//     title: 'Ingreso-Egreso',
//     icon: 'log-in-outline',
//     link: '/pages/ingreso-egreso',
//   },
//   {
//     title: 'Devoluciones',
//     icon: 'shopping-bag-outline',
//     link: '/pages/devolucion',
//   },

//   {
//     title: 'Reportes',
//     icon: 'file-text-outline',
//     link: '/pages/reportes',
//     hidden: false

//   },

//   {
//     title: '',
//     icon: '',
//   },
//   {
//     title: '',
//     target: '_blank',
//     icon: 'ion ion-social-facebook',
//     link:'https://facebook.com/'
//   },
//   {
//     title: '',
//     icon: '',
//   },
// ]
