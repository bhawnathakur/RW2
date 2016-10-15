import { Component }        from '@angular/core';
import { Auth }      from './auth.service';
@Component({
    templateUrl: './register.component.html',
    providers : [Auth ]
})
export class RegisterComponent {

    constructor(private auth: Auth) { }

}
