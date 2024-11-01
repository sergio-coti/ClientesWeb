import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar', //seletor para exibir o componente em HTML
  standalone: true, //componente independente
  imports: [
    RouterLink
  ], //importar bibliotecas ou outros componentes
  templateUrl: './navbar.component.html', //define a página HTML do componente
  styleUrl: './navbar.component.css' //define a folha de estilos CSS do componente
})
export class NavbarComponent {

}
