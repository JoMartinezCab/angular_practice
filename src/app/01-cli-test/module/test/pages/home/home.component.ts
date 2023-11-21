import { AuthService } from './../../../../core/service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  constructor( private AuthService: AuthService ) {}

}
