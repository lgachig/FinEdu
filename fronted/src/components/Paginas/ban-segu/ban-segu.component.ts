import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';  // Importa el módulo de expansión
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { IContenido } from './ban-segu.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/enviroment';


@Component({
  selector: 'app-ban-segu',
  standalone: true,
  imports: [ MatExpansionModule, MatButtonModule, NgFor ],
  templateUrl: './ban-segu.component.html',
  styleUrl: './ban-segu.component.css'
})
export class BanSeguComponent implements OnInit {

  baseUrl = environment.apiUrl;

  contenidos: IContenido[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ success: boolean; data: IContenido[] }>(`${this.baseUrl}/combanco/ban-segu`)
      .subscribe(
        (response) => {
          this.contenidos = response.data || [];
        },
        (error) => {
          console.error('Error fetching contenido:', error);
          this.contenidos = [];
        }
      );
    }

}
