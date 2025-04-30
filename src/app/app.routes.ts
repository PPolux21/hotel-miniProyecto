import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'rooms', component: RoomsComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
