import { Component } from '@angular/core';
import { SubNavService } from '../service/SubNav.s'

@Component({
    moduleId: module.id,
    selector: 'management',
    templateUrl: './management.html'
})
export class ManagementComponent {
    isactive = {
        dashboard: false,
        management: true,
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