import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private dataProduto: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  getProdutos() {
    return new Observable (observer => {
      fetch('./assets/data/produto.json')
        .then(resposta => resposta.json())
        .then(json => {
          this.dataProduto = json;
          observer.next(json);
          observer.complete();
        });
    });
  }

  getInfoProdutos() {
    return new Observable (observer => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          observer.next(this.router.getCurrentNavigation().extras.state.produto);
          observer.complete();
        }
      });
    });
  }

  goToRota(numero: string, rota: string) {
    const extras: NavigationExtras = {
      state: {
        Produto: this.dataProduto[numero]
      }
    };
    this.router.navigate([rota], extras);
  }
}