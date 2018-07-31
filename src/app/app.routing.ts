import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
// Componentes
import { LoginComponent } from './components/login/login.component';

const appRoutes: Routes = [
    // { path, component}
    {
        path: 'login',
        component: LoginComponent
    }
];

export const appRoutinProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);