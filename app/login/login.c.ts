import { Component, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.c.v0.html',
    styleUrls: ['login.c.css']
})
export class LoginComponent {
    constructor(public router: Router) {

    }

    onSubmit(form) {
        console.log(form);
        this.router.navigateByUrl('/workspace');
    }
}
