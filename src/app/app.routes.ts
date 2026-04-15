import { Routes } from '@angular/router';
import { UsersPage } from './pages/users-page/users-page';
import { LoginPage } from './pages/login-page/login-page';
import { ReportsPage } from './pages/reports-page/reports-page';
import { authGuard } from './guards/auth-guard';
import { AddPage } from './pages/add-page/add-page';
import { ChartsPage } from './pages/charts-page/charts-page';
import { MapPage } from './pages/map-page/map-page';

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
   },
   {
    path: 'add',
    component: AddPage,
    canActivate: [authGuard]
   },
   {
    path: 'update/:id',
    component: AddPage,
    canActivate: [authGuard]
   },
   {
    path: 'charts',
    component: ChartsPage
   },
   {
    path: 'map',
    component: MapPage
   }
];
