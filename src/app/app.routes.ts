import { Routes } from '@angular/router';
import { UsersPage } from './pages/users-page/users-page';
import { LoginPage } from './pages/login-page/login-page';
import { ReportsPage } from './pages/reports-page/reports-page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
   {
    path: 'users',
    component: UsersPage
   },
   {
    path: 'login',
    component: LoginPage
   },
   {
    path: 'reports',
    component: ReportsPage
   }
];
