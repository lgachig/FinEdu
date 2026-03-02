import {Component, ChangeDetectionStrategy} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule
import {MatButtonModule} from '@angular/material/button';
import { SeguridadService } from '../seguirdad.service';

@Component({
  selector: 'app-login',
  imports: [ MatSelectModule, MatInputModule, MatFormFieldModule, NgIf,FormsModule, MatButtonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  constructor(private seguridadService: SeguridadService) {}

  onSubmit(form: NgForm){
    this.seguridadService.login
    (  {mail: form.value.email,
      password: form.value.password});
  }
}
