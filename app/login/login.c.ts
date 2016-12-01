import { Component } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.c.v0.html',
    styleUrls: ['login.c.css']
})
export class LoginComponent {
    onSubmit(form) {
        console.log(form);
    }
}
