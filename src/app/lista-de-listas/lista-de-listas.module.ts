import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeListasPageRoutingModule } from './lista-de-listas-routing.module';

import { ListaDeListasPage } from './lista-de-listas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeListasPageRoutingModule
  ],
  declarations: [ListaDeListasPage]
})
export class ListaDeListasPageModule {}
