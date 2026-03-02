import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recursos',
  imports: [CommonModule, RouterModule],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.css'
})
export class RecursosComponent {
  constructor() {}

  ngOnInit(): void {
    // Componente de recursos con enlaces útiles
  }
}
