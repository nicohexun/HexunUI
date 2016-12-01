import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.c'
import { HomeComponent } from '../app/home/home.c'
import { CloudComponent } from '../app/cloud/cloud';
import { DashboardComponent } from '../app/dashboard/dashboard';
import { DashboardHomeComponent } from '../app/dashboard/dashboard.home';
import { DashboardLinkComponent } from '../app/dashboard/dashboard.link';
import { ManagementComponent } from '../app/management/management';
import { TenantsComponent } from '../app/tenants/tenants';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
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
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }, {
                path: 'cloud',
                component: CloudComponent
            }, {
                path: 'dashboard',
                component: DashboardComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    }, {
                        path: 'home',
                        component: DashboardHomeComponent
                    }, {
                        path: 'link',
                        component: DashboardLinkComponent
                    }
                ]
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