import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-mainproduto',
  templateUrl: './mainproduto.page.html',
  styleUrls: ['./mainproduto.page.scss'],
})


export class MainprodutoPage implements OnInit{

  public dataProduto: any;

  searchTerm: string;
  
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

