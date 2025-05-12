import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { AdminsServiceService } from '../services/admins-service.service';

@Component({
  selector: 'app-admin-control',
  imports: [MatButtonModule, SweetAlert2Module, MatTabsModule, MatIconModule],
  templateUrl: './admin-control.component.html',
  styleUrl: './admin-control.component.css'
})
export class AdminControlComponent {
  userString: string = "";
  userIndex!: number;
  nombreUsuario: string = "";
  imagenUsuario: string = "";

  reserv;
  subs;

  constructor(public activatedRoute: ActivatedRoute, private router: Router, private adminService: AdminsServiceService){
    this.activatedRoute.parent?.params.subscribe(params => {
      this.userString = params['user'];
      this.userIndex = parseInt(this.userString.replace(/\D/g, ''), 10);
      this.nombreUsuario = this.adminService.getAdminUsername(this.userIndex);
      this.imagenUsuario = this.adminService.getAdminImage(this.userIndex);
    });

    this.reserv = localStorage.getItem('reservacionTemplate');
    this.subs = localStorage.getItem('subsReactive');

    if(this.reserv){
      this.reserv = JSON.parse(this.reserv);
    }

    if(this.subs){
      this.subs = JSON.parse(this.subs);
    }
  }

  logOut(){
    Swal.fire({
      title: 'Cerrar sesión',
      text: '¿Seguro que quieres cerrar sesión?',
      icon: 'question',
      confirmButtonText: 'Continuar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire({
          title: "Sesión cerrada",
          text: "Se cerró la sesión correctamente",
          icon: "success",
          confirmButtonText: "Aceptar"
        });
        this.router.navigate(['/home']);
      }
    });
  }
}
