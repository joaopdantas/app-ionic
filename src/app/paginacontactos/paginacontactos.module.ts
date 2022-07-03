import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginacontactosPageRoutingModule } from './paginacontactos-routing.module';

import { PaginacontactosPage } from './paginacontactos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginacontactosPageRoutingModule
  ],
  declarations: [PaginacontactosPage]
})
export class PaginacontactosPageModule {}
