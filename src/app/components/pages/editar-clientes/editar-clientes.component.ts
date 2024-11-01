import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-editar-clientes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './editar-clientes.component.html',
  styleUrl: './editar-clientes.component.css'
})
export class EditarClientesComponent {

   //atributos
   mensagemSucesso: string = '';
   mensagemErro: string = '';
   id: string = '';
 
   //construtor (injeção de dependência)
   constructor(
     private httpClient: HttpClient,
     private activatedRoute: ActivatedRoute,
     private spinnerService: NgxSpinnerService
   ) {}

   //função executada no momento em que o componente é aberto
   ngOnInit() {
      //capturando o id enviado na URL do navegador (ROTA)
      this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;

      //exibindo o spinner
      this.spinnerService.show();

      //consultando os dados do cliente baseado no id
      this.httpClient.get(environment.clientesApi + "/" + this.id)
        .subscribe({
          next : (data) => {
            this.form.patchValue(data); //preenchendo o formulário
            this.spinnerService.hide(); //ocultando o spinner
          }
        })
   }
 
   //criando a estrutura do formulário
   form = new FormGroup({
     nome : new FormControl('', [
       Validators.required, Validators.minLength(6), Validators.maxLength(150)
     ]),
     email : new FormControl('', [
       Validators.required, Validators.email
     ]),
     cpf : new FormControl('', [
       Validators.required, Validators.pattern(/^\d{11}$/)
     ])
   }); 
 
   //função para verificar o 'estado' de cada campo do formulário
   get f() {
     return this.form.controls;
   }

   onSubmit() {

        //limpar as mensagens
        this.mensagemSucesso = '';
        this.mensagemErro = '';

        //exibindo o spinner
        this.spinnerService.show();
    
        //fazendo uma requisição POST para a API
        this.httpClient.put(environment.clientesApi + "/" + this.id, this.form.value)
          .subscribe({ //capturando o retorno
            next: (data: any) => { //capturando resposta de sucesso
              //gerando mensagem de sucesso
              this.mensagemSucesso = `Cliente ${data.nome} atualizado com sucesso.`;
              //ocultando o spinner
              this.spinnerService.hide();
            },
            error: (e) => { //capturando resposta de erro
              //capturando mensagem de erro
              this.mensagemErro = e.error.message;
              //ocultando o spinner
              this.spinnerService.hide();
            }
        });
   }
   
}
