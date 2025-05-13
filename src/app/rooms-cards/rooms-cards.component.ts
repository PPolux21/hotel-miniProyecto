import { Component, Input, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Room } from '../model/rooms';
import { RoomsServiceService } from '../services/rooms-service.service';

@Component({
  selector: 'app-rooms-cards',
  imports: [MatCardModule, MatButtonModule, MatListModule, RouterModule],
  templateUrl: './rooms-cards.component.html',
  styleUrl: './rooms-cards.component.css'
})
export class RoomsCardsComponent {
  @Input() usuario: string = "";
  @Input() rooms: Room[] = [];
  @Input() searchString: string = "";
  index!: number[];

  ngOnChanges(changes: SimpleChanges){
    if(changes['searchString']){
      this.index = this.searchSauces(this.searchString);
    }
  }

  searchSauces(search: string): number[]{
    const normalizeString = (str: string) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");  //elimina las tildes
    };

    let searchString = normalizeString(search.toLowerCase());

    let index: number[] = this.rooms.map((room, roomIndex) => {
      const tipo = normalizeString(room.tipo.toLowerCase());
      const descripcion = normalizeString(room.descripcion.toLowerCase());

      if(tipo.includes(searchString) || descripcion.includes(searchString)){
        return roomIndex;
      }
      return -1;
    }).filter(bookIndex => bookIndex !== -1);
    return index;
  }

  getRoutes(destino: string, room: number): any[]{
    return this.usuario !== undefined ? ["/" + this.usuario, destino, room] : ["/" + destino, room];
  }
}
