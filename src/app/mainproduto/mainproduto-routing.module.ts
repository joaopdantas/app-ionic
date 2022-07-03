import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainprodutoPage } from './mainproduto.page';

const routes: Routes = [
  {
    path: '',
    component: MainprodutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainprodutoPageRoutingModule {}
