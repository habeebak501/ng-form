import { Routes } from '@angular/router';
export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/auth/sign-in'
    },
];
