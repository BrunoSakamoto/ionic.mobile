import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LengthPage } from './length.page';

const routes: Routes = [
  {
    path: '',
    component: LengthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LengthPageRoutingModule {}
