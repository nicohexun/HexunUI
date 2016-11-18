import { Component } from '@angular/core';
import { SubNavService } from '../service/SubNav.s'

@Component({
    moduleId: module.id,
    selector: 'tenants',
    templateUrl: './tenants.html'
})
export class TenantsComponent {
    isactive = {
        dashboard: false,
        management: false,
        cloud: false,
        tenants: true
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