import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-cadastrar-clientes',
  standalone: true,
  imports: [
    CommonModule, //diretivas básicas do Angular
    FormsModule, //bilbioteca para construção de formulários
    ReactiveFormsModule, //bilbioteca para construção de formulários
    NgxMaskDirective //biblioteca para máscara de campos
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './cadastrar-clientes.component.html',
  styleUrl: './cadastrar-clientes.component.css'
})
export class CadastrarClientesComponent {

  //atributos
  mensagemSucesso: string = '';
  mensagemErro: string = '';

  //construtor (injeção de dependência)
  constructor(
    private httpClient: HttpClient,
    private spinnerService: NgxSpinnerService
  ) {}

  //criando a estrutura do formulário
  form = new FormGroup({
    //campo 'nome'
    nome : new FormControl('', [
      Validators.required, Validators.minLength(6), Validators.maxLength(150)
    ]),
    //campo 'email'
    email : new FormControl('', [
      Validators.required, Validators.email
    ]),
    //campo 'cpf'
    cpf : new FormControl('', [
      Validators.required, Validators.pattern(/^\d{11}$/)
    ])
  }); 

  //função para verificar o 'estado' de cada campo do formulário
  get f() {
    return this.form.controls;
  }

  //função para capturar o evento SUBMIT do formulário
  onSubmit() {

    //limpar as mensagens
    this.mensagemSucesso = '';
    this.mensagemErro = '';

    //exibir o spinner
    this.spinnerService.show();

    //fazendo uma requisição POST para a API
    this.httpClient.post(environment.clientesApi, this.form.value)
      .subscribe({ //capturando o retorno
        next: (data: any) => { //capturando resposta de sucesso
          //gerando mensagem de sucesso
          this.mensagemSucesso = `Parabéns, o cliente ${data.nome} foi cadastrado com sucesso.`;
          //limpar o formulário
          this.form.reset();
          //ocultar o spinner
          this.spinnerService.hide();
        },
        error: (e) => { //capturando resposta de erro
          //capturando mensagem de erro
          this.mensagemErro = e.error.message;
          //ocultar o spinner
          this.spinnerService.hide();
        }
      });
  }

}
