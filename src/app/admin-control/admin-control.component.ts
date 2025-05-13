import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
import { AdminsServiceService } from '../services/admins-service.service';
import { FormsModule } from '@angular/forms';
import { Room } from '../model/rooms';
import { RoomsServiceService } from '../services/rooms-service.service';

@Component({
  selector: 'app-admin-control',
  imports: [MatButtonModule, SweetAlert2Module, MatTabsModule, MatIconModule, FormsModule],
  templateUrl: './admin-control.component.html',
  styleUrl: './admin-control.component.css'
})
export class AdminControlComponent {
  userString: string = "";
  userIndex!: number;
  nombreUsuario: string = "";
  imagenUsuario: string = "";

  reserv:any;
  subs:any;
  tmpReserv!:any;
  tmpSubs!:any;
  editNum:any | null = null;
  editTable:any | null = null;
  habitaciones!: Room[];

  constructor(public activatedRoute: ActivatedRoute, private router: Router, private adminService: AdminsServiceService, public roomservice: RoomsServiceService){
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

  ngOnInit(){
    this.habitaciones = this.roomservice.getRooms();
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

  editReserv(i:number,table:number){
    this.editTable = table;
    this.editNum = i;
    if(table == 0){
      this.tmpReserv = this.reserv[i];
    }else{
      this.tmpSubs = this.subs[i];
    }
  }

  cancelReserv(i:number,table:number){
    this.editTable = null;
    this.editNum = null;

    if(table == 0){
      this.reserv = localStorage.getItem('reservacionTemplate');
      this.reserv = JSON.parse(this.reserv);
    }else{
      this.subs = localStorage.getItem('subsReactive');
      this.subs = JSON.parse(this.subs);
    }

  }

  saveReserv(i:number,table:number){
    this.editTable = null;
    this.editNum = null;
    if(table == 0){
      this.reserv[i] = this.tmpReserv; 
      localStorage.setItem('reservacionTemplate', JSON.stringify(this.reserv));
    }else{
      if ((this.tmpSubs.start == '' && this.tmpSubs.start == this.tmpSubs.end) || (this.tmpSubs.start != '' && this.tmpSubs.end != '')) {
        this.subs[i] = this.tmpSubs; 
        localStorage.setItem('subsReactive', JSON.stringify(this.subs));  
      } else {
        Swal.fire({
          title: "Error",
          text: "Ambos valores de las fechas deben de estar registrados",
          icon: "error"
        });
        this.subs = localStorage.getItem('subsReactive');
        this.subs = JSON.parse(this.subs);
      }
      
    }
  } 

  deleteReserv(i:number,table:number){
    Swal.fire({
      title: "¿Eliminar?",
      text: "¿Seguro que desea aliminar el elemento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if(table == 0){
        this.reserv.splice(i,1);
        this.reserv = [...this.reserv];
        localStorage.setItem('reservacionTemplate', JSON.stringify(this.reserv));
      }else{
        this.subs.splice(i,1);
        localStorage.setItem('subsReactive', JSON.stringify(this.subs));
      }
      this.editTable = null;
      this.editNum = null;
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
