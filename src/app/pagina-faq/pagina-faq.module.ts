import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaFaqPageRoutingModule } from './pagina-faq-routing.module';

import { PaginaFaqPage } from './pagina-faq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaFaqPageRoutingModule
  ],
  declarations: [PaginaFaqPage]
})
export class PaginaFaqPageModule {}
