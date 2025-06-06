import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RoomsServiceService } from "../services/rooms-service.service";
import { MatListModule } from '@angular/material/list';
import { Room } from "../model/rooms";
import 'animate.css'
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { RoomsCardsComponent } from "../rooms-cards/rooms-cards.component";

@Component({
  selector: 'app-rooms',
  imports: [MatCardModule, MatButtonModule, MatListModule, RouterModule, SearchComponent, RoomsCardsComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  rooms!: Room[];
  usuario: string = "";
  searchString: string = "";

  constructor(public roomservice: RoomsServiceService, public activatedRoute: ActivatedRoute){
    this.activatedRoute.parent?.params.subscribe(params => {
      this.usuario = params['user'];
    });
  }

  ngOnInit(){
    this.rooms = this.roomservice.getRooms();
  }

  getRoutes(destino: string, room: number): any[]{
    return this.usuario !== undefined ? ["/" + this.usuario, destino, room] : ["/" + destino, room];
  }

  receiveSearch(search: string){
    this.searchString = search;
  }
}
