import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeListasPage } from './lista-de-listas.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeListasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeListasPageRoutingModule {}
