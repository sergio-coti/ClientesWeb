import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-edicao-clientes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './edicao-clientes.component.html',
  styleUrl: './edicao-clientes.component.css'
})
export class EdicaoClientesComponent {

  //atributos
  mensagem: string = '';

  //método construtor
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
  }

  //função executada no momento em que a página é aberta
  ngOnInit() {
    //capturando o ID do cliente enviado na URL (rota)
    let id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
    //fazendo uma requisição para consultar 1 cliente na API através do ID
    this.httpClient.get(environment.apiClientes + "/" + id)
      .subscribe({
        next: (data: any) => {
          //preenchendo o formulário
          this.form.patchValue(data);
        }
      });
  }

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

  //função auxiliar para verificar os erros de validação
  get f() {
    return this.form.controls;
  }

  //função para executar o SUBMIT do formulário
  onSubmit() {
    
    //capturando o id do cliente na URL (rota)
    let id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    //enviando uma requisição PUT para atualizar os dados do cliente
    this.httpClient.put(environment.apiClientes + "/" + id, this.form.value)
      .subscribe({ //aguardando a resposta obtida da API
        next: (data: any) => { //capturando a resposta
          this.mensagem = data.mensagem; //exibindo mensagem
        }
      });
  }
}
