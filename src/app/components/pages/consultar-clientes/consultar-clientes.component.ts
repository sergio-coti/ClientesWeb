import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-consultar-clientes',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgxPaginationModule,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.css'
})
export class ConsultarClientesComponent {

  //atributos
  clientes: any[] = []; //array de objetos
  pagina: number = 1; //paginação
  mensagemSucesso: string = ''; //exibir mensagem

  //injeção de dependência
  constructor(
    private httpCLient: HttpClient,
    private spinnerService: NgxSpinnerService
  ) {}

  //função executada ao renderizar o componente
  ngOnInit() {

    //exibir a tela de carregamento
    this.spinnerService.show();
    
    //fazendo a requisição para o ENDPOINT de consulta de clientes
    this.httpCLient.get(environment.clientesApi)
      .subscribe({ //aguardando a resposta da API
        next: (data) => { //capturando os dados obtidos da API
          //armazenando os dados obtidos da API
          this.clientes = data as any[];
          //ocultando a tela de carregamento
          this.spinnerService.hide();
        }
      });
  }

  //função para excluir o cliente selecionado na consulta
  onDelete(id: string) {
    //verificar se o usuário deseja realizar a exclusão
    if(confirm('Deseja realmente excluir o cliente selecionado?')) {

      //exibir a tela de carregamento
      this.spinnerService.show();

      //enviando a requisição de exclusão para a API
      this.httpCLient.delete(environment.clientesApi + "/" + id)
        .subscribe({
          next: (data: any) => {
            this.mensagemSucesso = `O cliente ${data.nome} foi excluído com sucesso!`;
            this.ngOnInit(); //recarregando a consulta de clientes
            //ocultando a tela de carregamento
            this.spinnerService.hide();
          }
        })
    }
  }

  //função para navegar na paginação
  handlePageChange(event: any) {
    this.pagina = event;
  }

}
