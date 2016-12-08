import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { ChartModule } from 'angular2-highcharts';

import { AppComponent } from './app.component';
import { NavComponent } from '../app/nav/nav.component';
import { LoginComponent } from '../app/login/login.c';
import { HomeComponent } from '../app/home/home.c';
import { CloudComponent } from '../app/cloud/cloud';
import { DashboardComponent, DashboardContentComponent, DashboardSideNavComponent, DashboardHomeComponent, DashboardLinkComponent } from '../app/dashboard/dashboard.module';
import { ManagementComponent } from '../app/management/management';
import { TenantsComponent } from '../app/tenants/tenants';
import { SubNavService } from '../app/service/SubNav.s';
import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, ClarityModule, ChartModule, routing],
    declarations: [
        AppComponent, LoginComponent, HomeComponent, CloudComponent,
        DashboardComponent, DashboardContentComponent, DashboardSideNavComponent,
        DashboardHomeComponent, DashboardLinkComponent,
        ManagementComponent, TenantsComponent,
        NavComponent
    ],
    providers: [SubNavService],
    bootstrap: [AppComponent]
})

export class AppModule { }