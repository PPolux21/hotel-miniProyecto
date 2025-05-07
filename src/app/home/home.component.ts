import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { DomseguroPipe } from '../pipes/domseguro.pipe';

@Component({
  selector: 'app-home',
  imports: [MatExpansionModule, DomseguroPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  preguntas = [
    {pregunta: "¿A qué hora es el check-in y check-out?", respuesta: "El check-in es a partir de las 3:00 PM y el check-out a las 12:00 PM."},
    {pregunta: "¿Se admiten mascotas?", respuesta: "No se admiten mascotas en el hotel."},
    {pregunta: "¿Cuál es el código de vestimenta de los restaurantes?", respuesta: "El código de vestimenta de los restaurantes es casual. Se permite pantalones o bermudas, camisas de vestir y sandalias formales. No está permitido el uso de ropa mojada, bañador ni chanclas"},
    {pregunta: "¿A qué distancia está el hotel del aeropuerto?", respuesta: "El hotel se encuentra a 15 minutos del Aeropuerto Internacional de Puerto Vallarta."},
    {pregunta: "¿Se puede fumar en las habitaciones?", respuesta: "No se puede fumar dentro de las habitaciones, ya que se le cobrará una sanción económica. Puede fumar en los espacios designados."},
    {pregunta: "¿Qué sucede si se presenta algún accidente en la piscina?", respuesta: "Dependiendo del nivel del accidente se realizarán acciones para mantener la integridad y la salud de las personas involucradas. En caso de algún daño al área de la piscina puede repercutir en una sanción económica."},
  ]

  videoCode:string = "0980RPeZUwg?playlist=0980RPeZUwg&loop=1&autoplay=1&mute=1&controls=0&showinfo=0";
}
