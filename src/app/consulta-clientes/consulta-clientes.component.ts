import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-consulta-clientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgxPaginationModule
  ],
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.css'
})
export class ConsultaClientesComponent {

  //atributos
  clientes: any[] = []; //array de objetos vazio
  mensagem: string = ''; //texto vazio
  pagina: number = 1; //número da página inicial
  
  //método construtor (inicilizando a biblioteca HttpClient)
  constructor(private httpClient: HttpClient) {      
  }

  //função executada ao abrir a página
  ngOnInit() {
    
    //fazendo uma chamada / requisição para consultar os clientes da API
    this.httpClient.get(environment.apiClientes)
      .subscribe({ //aguardando o retorno obtido da consulta
        next: (data) => { //capturando os dados da consulta
          //armazenar os dados obtidos da API dentro do array clientes
          this.clientes = data as any[];
        }
      });
  }

  //função para capturar o clique no botão de exclusão
  onDelete(id: string) {

    //exibindo uma janela de confirmação
    if(confirm('Deseja realmente excluir o cliente selecionado?')) {
      
        //fazendo uma requisição DELETE para a API
        this.httpClient.delete(environment.apiClientes + "/" + id)
          .subscribe({ //aguardando a resposta
            next: (data: any) => { //capturando a resposta obtida

              //exibindo a mensagem na página
              this.mensagem = data.mensagem;

              //fazer uma nova consulta na API
              this.ngOnInit();
            }
          })
    }
  }

  //função para avançar ou voltar na paginação
  onPaginate(event: any) {
    this.pagina = event;
  }

}
