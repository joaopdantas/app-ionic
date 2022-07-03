import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Principal', url: '/paginaprincipal', icon: 'home' },
    { title: 'Produtos', url: '/mainproduto', icon: 'basket' },
    { title: 'Lojas', url: '/paginalojas', icon: 'storefront' },
    { title: 'Listas', url: '/lista-de-listas', icon: 'list-circle' },
    { title: 'FAQ', url: '/pagina-faq', icon: 'information-circle' },
    { title: 'Definições', url: '/paginadefinicoes', icon: 'settings' },
    { title: 'Contactos', url: '/paginacontactos', icon: 'call' },
    

    
   
  ];
 
  constructor() {}
}
