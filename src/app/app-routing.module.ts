import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
// import {
//   NbAuthComponent,
//   NbLoginComponent,
//   NbLogoutComponent,
//   NbRegisterComponent,
//   NbRequestPasswordComponent,
//   NbResetPasswordComponent,
//   NbRegisterOkeyComponent,
// } from './auth';

const routes: Routes = [
  {
    path: 'pagina',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  // {
  //   path: 'auth',
  //   component: NbAuthComponent,
  //   // canActivate: [GuardServiceLogin],
  //   children: [
  //     // {
  //     //   path: '',
  //     //   component: NbLoginComponent,
  //     // },
  //     {
  //       path: 'login',
  //       component: NbLoginComponent,
  //       // canActivate: [GuardServiceLogin]
  //     },
  //     {
  //       path: 'register',
  //       component: NbRegisterComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'register-okey',
  //       component: NbRegisterOkeyComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: NbRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: NbResetPasswordComponent,
  //     },
  //     { path: '', redirectTo: 'login', pathMatch: 'full' },
  //     { path: '**', redirectTo: 'login' },
  //   ],
  // },
  { path: '', redirectTo: 'pagina', pathMatch: 'full' },
  { path: '**', redirectTo: 'pagina' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
