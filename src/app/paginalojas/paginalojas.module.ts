import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginalojasPageRoutingModule } from './paginalojas-routing.module';

import { PaginalojasPage } from './paginalojas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginalojasPageRoutingModule
  ],
  declarations: [PaginalojasPage]
})
export class PaginalojasPageModule {}
