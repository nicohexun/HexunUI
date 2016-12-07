import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dashboard-home',
    //host属性中添加的字段将添加到 <dashboard-home ... 中>  <dashboard-home class="test"> ...
    host: {
        class: 'test'
    },
    templateUrl: './dashboard.home.html'
})
export class DashboardHomeComponent {

}