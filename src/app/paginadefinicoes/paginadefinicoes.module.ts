import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginadefinicoesPageRoutingModule } from './paginadefinicoes-routing.module';

import { PaginadefinicoesPage } from './paginadefinicoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginadefinicoesPageRoutingModule
  ],
  declarations: [PaginadefinicoesPage]
})
export class PaginadefinicoesPageModule {}
