import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-control',
  imports: [MatButtonModule, SweetAlert2Module],
  templateUrl: './admin-control.component.html',
  styleUrl: './admin-control.component.css'
})
export class AdminControlComponent {
  usernames = ["Jose Luis", "Luis Alberto", "Brandon"];
  userString: string = "";
  userIndex!: number;
  nombreUsuario: string = "";

  constructor(public activatedRoute: ActivatedRoute, private router: Router){
    this.activatedRoute.parent?.params.subscribe(params => {
      this.userString = params['user'];
      this.userIndex = parseInt(this.userString.replace(/\D/g, ''), 10);
      this.nombreUsuario = this.usernames[this.userIndex];
    });
  }

  logOut(){
    Swal.fire({
      title: 'Cerrar sesión',
      text: '¿Seguro que quieres cerrar sesión?',
      icon: 'success',
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
