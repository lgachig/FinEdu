import { Component } from '@angular/core';
import { AboutUsComponent } from '../about-us/about-us.component';

@Component({
  selector: 'app-home',
  standalone: true, // Marca el componente como standalone
  imports: [AboutUsComponent], // Importa el componente AboutUsComponent
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
