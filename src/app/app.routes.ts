import { Routes } from '@angular/router';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';

export const routes: Routes = [
    {
        path: 'app/cadastro-clientes', /* rota */
        component: CadastroClientesComponent
    },
    {
        path: 'app/consulta-clientes', /* rota */
        component: ConsultaClientesComponent
    }
];
