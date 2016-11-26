import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.c.v0.html',
    styleUrls: ['home.c.css']
})
export class HomeComponent {
    isactive = {
        dashboard: true,
        management: false,
        cloud: false,
        tenants: false
    }

    setActive(menu: string) {
        if (menu === 'dashboard') {
            this.isactive = {
                dashboard: true,
                management: false,
                cloud: false,
                tenants: false
            }
        } else if (menu === 'management') {
            this.isactive = {
                dashboard: false,
                management: true,
                cloud: false,
                tenants: false
            }
        } else if (menu === 'cloud') {
            this.isactive = {
                dashboard: false,
                management: false,
                cloud: true,
                tenants: false
            }
        } else if (menu === 'tenants') {
            this.isactive = {
                dashboard: false,
                management: false,
                cloud: false,
                tenants: true
            }
        }

    }
}
