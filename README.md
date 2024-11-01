# ClientesWeb

Este projeto é o FrontEnd de uma API .NET chamada **ClientesApp**. Ele foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 18.2.10 e utiliza as seguintes bibliotecas para aprimorar a experiência de desenvolvimento e usuário:

- **Bootstrap**: para estilização e layout responsivo ([Bootstrap](https://getbootstrap.com/))
- **NgxSpinner**: para mostrar carregamento em ações assíncronas ([NgxSpinner](https://www.npmjs.com/package/ngx-spinner))
- **NgxPagination**: para implementação de paginação em listas e tabelas ([NgxPagination](https://www.npmjs.com/package/ngx-pagination))
- **NgxMask**: para aplicação de máscaras em campos de formulários ([NgxMask](https://www.npmjs.com/package/ngx-mask))

O projeto faz um CRUD de clientes, utiliza formulários reativos e o serviço **HttpClient** para comunicação com a API.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Criação de Componentes

Execute `ng generate component nome-do-componente` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para compilar o projeto. Os artefatos de build serão armazenados no diretório `dist/`.

## Executando Testes Unitários

Execute `ng test` para rodar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando Testes de Ponta a Ponta

Execute `ng e2e` para executar os testes de ponta a ponta através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de testes de ponta a ponta.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
