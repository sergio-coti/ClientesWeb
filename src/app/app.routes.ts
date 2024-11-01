import { Routes } from '@angular/router';
import { CadastrarClientesComponent } from './components/pages/cadastrar-clientes/cadastrar-clientes.component';
import { ConsultarClientesComponent } from './components/pages/consultar-clientes/consultar-clientes.component';
import { EditarClientesComponent } from './components/pages/editar-clientes/editar-clientes.component';

export const routes: Routes = [
    {
        path: 'pages/cadastrar-clientes', //ROTA
        component: CadastrarClientesComponent //COMPONENTE
    },
    {
        path: 'pages/consultar-clientes', //ROTA
        component: ConsultarClientesComponent //COMPONENTE
    },
    {
        path: 'pages/editar-clientes/:id', //ROTA
        component: EditarClientesComponent //COMPONENTE
    },
    {
        path: '', pathMatch: 'full', //ROTA RAIZ DO PROJETO
        redirectTo: '/pages/consultar-clientes'
    }
];
