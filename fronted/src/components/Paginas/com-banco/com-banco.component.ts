import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {IPestania} from './com-banco-pes.model';
import {IInstitucion} from './com-banco-inst.model';
import { environment } from './../../../environments/enviroment';


@Component({
  selector: 'app-com-banco',
  imports: [ MatTabsModule, MatTableModule, MatSortModule, MatInputModule, MatFormFieldModule, NgFor ],
  templateUrl: './com-banco.component.html',
  styleUrl: './com-banco.component.css'
})
export class ComBancoComponent {
  baseUrl = environment.apiUrl;

  displayedColumns: string[] = ['institucion', 'tipo', 'tarifa', 'beneficios', 'requisitos', 'enlace'];
  contenidosInst: IInstitucion[] = [];
  Institucion = new MatTableDataSource(this.contenidosInst);
  pestanias: IPestania[] = [];
  ;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.Institucion.filter = filterValue;
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ success: boolean; dataPes: IPestania[]; dataInst: IInstitucion[] }>(`${this.baseUrl}/combanco/inspes`)
      .subscribe(
        (response) => {
          this.pestanias = response.dataPes || [];
          this.contenidosInst = response.dataInst || [];

          // Actualizar la fuente de datos de la tabla
          this.Institucion.data = this.contenidosInst;
        },
        (error) => {
          console.error('Error fetching contenido:', error);
          this.pestanias = [];
          this.contenidosInst = [];

          // Asegurar que la tabla se vacíe en caso de error
          this.Institucion.data = [];
        }
      );
  }

}
