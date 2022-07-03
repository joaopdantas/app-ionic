import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaFaqPage } from './pagina-faq.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaFaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaFaqPageRoutingModule {}
