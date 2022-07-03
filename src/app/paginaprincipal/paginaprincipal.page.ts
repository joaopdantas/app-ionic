import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.page.html',
  styleUrls: ['./paginaprincipal.page.scss'],
})

export class PaginaprincipalPage implements OnInit{

  public dataProduto: any;

  constructor(public ProdutoServ: ProdutoService) {}

  ngOnInit() {
    this.ProdutoServ.getProdutos().subscribe(data => {
      this.dataProduto = data;
    });
  }

  verProduto(numero: string, rota: string) {
    this.ProdutoServ.goToRota(numero, rota);
  }

}