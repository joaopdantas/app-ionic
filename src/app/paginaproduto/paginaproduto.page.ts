import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-paginaproduto',
  templateUrl: './paginaproduto.page.html',
  styleUrls: ['./paginaproduto.page.scss'],
})



export class PaginaprodutoPage implements OnInit {

  public dataProduto: any;


  constructor(private ProdutoServ: ProdutoService) { }

  ngOnInit() {
    this.ProdutoServ.getInfoProdutos().subscribe(infoProdutos => {
      this.dataProduto = infoProdutos;
    });
  }
}


