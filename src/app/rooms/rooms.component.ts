import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RoomsServiceService } from "../services/rooms-service.service";
import { MatListModule } from '@angular/material/list';
import { Room } from "../model/rooms";
import 'animate.css'

@Component({
  selector: 'app-rooms',
  imports: [MatCardModule, MatButtonModule,MatListModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  rooms!: Room[];

  constructor(public roomservice: RoomsServiceService){ }

  ngOnInit(){
    this.rooms = this.roomservice.getRooms();
  }
}
