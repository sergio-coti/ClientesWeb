import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cadastro-clientes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-clientes.component.html',
  styleUrl: './cadastro-clientes.component.css'
})
export class CadastroClientesComponent {

  //atributos
  mensagem: string = '';

  //método construtor para injeção de dependência
  //declarar e inicializar o objeto da classe HttpClient
  constructor(
    private httpClient: HttpClient
  ) {}

  //Estrutura do formulário (definindo os seus campos)
  form = new FormGroup({
    /* campo 'nome' */
    nome : new FormControl('', [
      Validators.required, Validators.minLength(8), Validators.maxLength(100)
    ]),
    /* campo 'email' */
    email : new FormControl('', [
      Validators.required, Validators.email
    ]),
    /* campo 'cpf' */
    cpf : new FormControl('', [
      Validators.required, Validators.pattern(/^[0-9]{11}$/)
    ]),
    /* campo 'tipo' */
    tipo : new FormControl('', [
      Validators.required, Validators.pattern(/^(Comum|Preferencial|VIP)$/)
    ])
  });

  //função auxiliar para verificarmos se os campos do formulário
  //estão com algum erro de validação
  get f() {
    return this.form.controls;
  }

  //função executada quando o usuário clicar
  //no botão SUBMIT do formulário
  onSubmit() {
    
      //fazendo a requisição POST para cadastro do cliente na API
      this.httpClient.post(environment.apiClientes, this.form.value)
        .subscribe({ //aguardando a resposta da API
          next: (data: any) => { //capturando a respostaq obtida
            //armazenando o valor da mensagem obtida
            this.mensagem = data.mensagem;
            //limpando os campos do formulário
            this.form.reset();
          }
        });
  }

}
