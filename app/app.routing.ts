import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.c'
import { HomeComponent } from '../app/home/home.c'
import { CloudComponent } from '../app/cloud/cloud';
import { DashboardComponent } from '../app/dashboard/dashboard';
import { ManagementComponent } from '../app/management/management';
import { TenantsComponent } from '../app/tenants/tenants';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'workspace',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'workspace',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            }, {
                path: 'cloud',
                component: CloudComponent
            }, {
                path: 'dashboard',
                component: DashboardComponent
            }, {
                path: 'management',
                component: ManagementComponent
            }, {
                path: 'tenants',
                component: TenantsComponent
            }
        ]
    }];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);