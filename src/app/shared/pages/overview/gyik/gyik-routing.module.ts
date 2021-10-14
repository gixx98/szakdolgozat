import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GyikPage } from './gyik.page';

const routes: Routes = [
  {
    path: '',
    component: GyikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GyikPageRoutingModule {}
