import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaprodutoPageRoutingModule } from './paginaproduto-routing.module';

import { PaginaprodutoPage } from './paginaproduto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaprodutoPageRoutingModule
  ],
  declarations: [PaginaprodutoPage]
})
export class PaginaprodutoPageModule {}
