import { Routes } from '@angular/router';
import { UsersPage } from './pages/users-page/users-page';
import { LoginPage } from './pages/login-page/login-page';
import { ReportsPage } from './pages/reports-page/reports-page';
import { authGuard } from './guards/auth-guard';

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
    component: ReportsPage,
    canActivate: [authGuard]
   }
];
