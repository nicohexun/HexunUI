import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { NavComponent } from '../app/nav/nav.component';
import { SubNavComponent } from '../app/nav/subnav.component';
import { LoginComponent } from '../app/login/login.c';
import { HomeComponent } from '../app/home/home.c';
import { CloudComponent } from '../app/cloud/cloud';
import { DashboardComponent, DashboardContentComponent, DashboardSideNavComponent } from '../app/dashboard/dashboard.module';
import { ManagementComponent } from '../app/management/management';
import { TenantsComponent } from '../app/tenants/tenants';
import { SubNavService } from '../app/service/SubNav.s';
import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, ClarityModule, routing],
    declarations: [
        AppComponent, LoginComponent, HomeComponent, CloudComponent, DashboardComponent, DashboardContentComponent, DashboardSideNavComponent, ManagementComponent, TenantsComponent,
        NavComponent, SubNavComponent
    ],
    providers: [SubNavService],
    bootstrap: [AppComponent]
})

export class AppModule { }