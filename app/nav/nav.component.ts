import { Component } from '@angular/core';
import { SubNavService } from '../service/SubNav.s'

@Component({
    moduleId: module.id,
    selector: 'nav-component',
    templateUrl: './nav.html'
})
export class NavComponent {
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