import { Component } from '@angular/core';
import { SubNavService } from '../service/SubNav.s'

@Component({
    moduleId: module.id,
    selector: 'subnav-component',
    templateUrl: './subnav.html'
})
export class SubNavComponent {
    isactive = {
        dashboard: false,
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