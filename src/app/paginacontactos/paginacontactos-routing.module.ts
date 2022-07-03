import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginacontactosPage } from './paginacontactos.page';

const routes: Routes = [
  {
    path: '',
    component: PaginacontactosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginacontactosPageRoutingModule {}
