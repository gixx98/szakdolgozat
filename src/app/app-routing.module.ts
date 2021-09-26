import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./shared/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./shared/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./shared/pages/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./shared/pages/overview/overview.module').then( m => m.OverviewPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
