import { Routes } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';
import { EdicaoClientesComponent } from './edicao-clientes/edicao-clientes.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';

export const routes: Routes = [
    {
        path: 'app/login-usuario',
        component: LoginUsuarioComponent
    },
    {
        path: 'app/cadastro-clientes', /* rota */
        component: CadastroClientesComponent
    },
    {
        path: 'app/consulta-clientes', /* rota */
        component: ConsultaClientesComponent
    },
    {
        path: 'app/edicao-clientes/:id',
        component: EdicaoClientesComponent
    },
    {
        path: '', //raiz do projeto (default)
        pathMatch: 'full',
        redirectTo: 'app/login-usuario'
    }
];
