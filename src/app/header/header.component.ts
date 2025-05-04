import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'animate.css'

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}

  toLogin(){
    this.router.navigate(['/login']);
  }
}
