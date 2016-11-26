import { Component } from '@angular/core';
import { SubNavService } from '../service/SubNav.s'

@Component({
    moduleId: module.id,
    selector: 'cloud',
    templateUrl: './cloud.html'
})
export class CloudComponent {
    isactive = {
        dashboard: false,
        management: false,
        cloud: true,
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
