import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about-us',
  imports: [ MatCardModule ],
  templateUrl: './about-us.component.html',
  standalone: true, // Marca este componente como standalone
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
