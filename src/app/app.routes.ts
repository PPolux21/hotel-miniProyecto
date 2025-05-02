import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { GastronomyComponent } from './gastronomy/gastronomy.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'rooms', component: RoomsComponent},
    {path: 'gastronomy', component: GastronomyComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
