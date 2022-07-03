import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainprodutoPageRoutingModule } from './mainproduto-routing.module';

import { MainprodutoPage } from './mainproduto.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainprodutoPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MainprodutoPage]
})
export class MainprodutoPageModule {}
