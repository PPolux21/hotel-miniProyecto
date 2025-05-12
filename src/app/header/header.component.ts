import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'animate.css'
import { Admins } from '../model/admins';
import { AdminsServiceService } from '../services/admins-service.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userString: string = "";
  nombreUsuario: string = "";
  imgUsuario: string = "";
  userIndex!: number;
  iconLogged: boolean = false;

  constructor(private router: Router, public activatedRoute: ActivatedRoute, private adminService: AdminsServiceService){
    this.activatedRoute.params.subscribe(params => {
      this.userString = params['user'];
      if(!this.userString){
        this.nombreUsuario = "Iniciar Sesión";
      }else{
        this.userIndex = parseInt(this.userString.replace(/\D/g, ''), 10);
        this.nombreUsuario = this.adminService.getAdminUsername(this.userIndex);
        this.imgUsuario = this.adminService.getAdminImage(this.userIndex);
        this.iconLogged = true;
      }
    });
  }

  toLogin(){
    if(!this.iconLogged){
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/' + this.userString + '/admincontrol']);
    }
  }
}
