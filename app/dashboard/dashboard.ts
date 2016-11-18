import { Component } from '@angular/core';
import { SubNavService } from '../service/SubNav.s'

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.html',
    styles: ['./dashboard.css']
})
export class DashboardComponent {
    isactive = {
        dashboard: true,
        management: false,
        cloud: false,
        tenants: false
    }

    constructor(private service: SubNavService) {
    }

    setActive(str: string) {
        this.service.setActive(str);
    }

    ngAfterContentChecked() {
        this.isactive = this.service.isactive;
    }

}