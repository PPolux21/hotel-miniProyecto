import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';
import { GastronomyComponent } from './gastronomy/gastronomy.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HotelServicesComponent } from './hotel-services/hotel-services.component';
import { ReservationComponent} from './reservation/reservation.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'rooms', component: RoomsComponent},
    {path: 'gastronomy', component: GastronomyComponent},
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'hotel-services', component: HotelServicesComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'reservation/:room', component: ReservationComponent},
    {path: ':user', children: [
        {path: 'home', component: HomeComponent},
        {path: 'rooms', component: RoomsComponent},
        {path: 'gastronomy', component: GastronomyComponent},
        {path: 'about', component: AboutComponent},
        {path: 'login', component: LoginComponent},         /* CAMBIAR A UN COMPONENTE PARA QUE EL ADMIN ACCEDA AL LOCALSTORAGE */
        {path: 'hotel-services', component: HotelServicesComponent},
        {path: 'reservation', component: ReservationComponent},
        {path: 'reservation/:room', component: ReservationComponent},
    ]},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
