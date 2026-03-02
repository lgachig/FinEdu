import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/enviroment';
import {Usuario } from '../user.model';
import { SeguridadService } from '../seguirdad.service';


@Component({
  selector: 'app-registrar',
  imports: [ MatSelectModule, MatInputModule, MatFormFieldModule,
     NgIf,FormsModule, MatButtonModule ],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  baseUrl = environment.apiUrl;
  usu: Usuario | null;
  constructor(private seguridadService: SeguridadService) {
    this.usu = null;
  }

  onSubmit(form: NgForm){
    this.usu  = {
      id: "",
      name: form.value.name,
      lname: form.value.lname,
      age: form.value.age,
      mail: form.value.mail,
      password: form.value.password
    }
    this.seguridadService.registrarUsuario(this.usu);
  }

}
