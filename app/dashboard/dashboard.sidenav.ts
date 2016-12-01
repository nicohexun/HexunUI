import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard-sidenav',
    templateUrl: './dashboard.sidenav.html',
    styleUrls: ['./dashboard.sidenav.css']
})
export class DashboardSideNavComponent {
    isactive = {
        link1: true,
        link2: false
    }
    reset = {
        link1: false,
        link2: false
    }
    setActive(link: string) {
        this.isactive = this.reset;
        if (link === 'link1') {
            this.isactive = {
                link1: true,
                link2: false,
            }
        } else if (link === 'link2') {
            this.isactive = {
                link2: true,
                link1: false,
            }
        }
    }
}