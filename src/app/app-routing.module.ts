import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'paginaprincipal',
    loadChildren: () => import('./paginaprincipal/paginaprincipal.module').then( m => m.PaginaprincipalPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'mainproduto',
    loadChildren: () => import('./mainproduto/mainproduto.module').then( m => m.MainprodutoPageModule)
  },
  {
    path: 'paginalojas',
    loadChildren: () => import('./paginalojas/paginalojas.module').then( m => m.PaginalojasPageModule)
  },
  {
    path: 'pagina-faq',
    loadChildren: () => import('./pagina-faq/pagina-faq.module').then( m => m.PaginaFaqPageModule)
  },
  {
    path: 'paginadefinicoes',
    loadChildren: () => import('./paginadefinicoes/paginadefinicoes.module').then( m => m.PaginadefinicoesPageModule)
  },
  {
    path: 'paginacontactos',
    loadChildren: () => import('./paginacontactos/paginacontactos.module').then( m => m.PaginacontactosPageModule)
  },
  {
    path: 'paginaproduto',
    loadChildren: () => import('./paginaproduto/paginaproduto.module').then( m => m.PaginaprodutoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registo',
    loadChildren: () => import('./registo/registo.module').then( m => m.RegistoPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'lista-de-listas',
    loadChildren: () => import('./lista-de-listas/lista-de-listas.module').then( m => m.ListaDeListasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
