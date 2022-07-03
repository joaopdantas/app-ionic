import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginadefinicoesPage } from './paginadefinicoes.page';

const routes: Routes = [
  {
    path: '',
    component: PaginadefinicoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginadefinicoesPageRoutingModule {}
