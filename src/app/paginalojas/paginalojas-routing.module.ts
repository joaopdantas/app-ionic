import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginalojasPage } from './paginalojas.page';

const routes: Routes = [
  {
    path: '',
    component: PaginalojasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginalojasPageRoutingModule {}
