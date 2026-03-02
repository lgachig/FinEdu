import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-edu-fin-cart',
  imports: [ MatCardModule ],
  templateUrl: './edu-fin-cart.component.html',
  styleUrl: './edu-fin-cart.component.css'
})
export class EduFinCartComponent {
  @Input() module: any;
}
