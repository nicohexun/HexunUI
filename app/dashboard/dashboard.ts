import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: './dashboard.html',
    //style优先级高与index.html中的 link中的css样式
    styleUrls: ['./dashboard.css']
})
export class DashboardComponent {

}