import { Component } from '@angular/core';
import { Auth }      from './pages/auth.service';
@Component({
    selector: 'body',
    template:` 
<router-outlet></router-outlet>`,
providers : [Auth]
})
export class AppComponent {  constructor(private auth: Auth) {}

}
