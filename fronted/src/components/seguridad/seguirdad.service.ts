import { Usuario } from "./user.model";
import { LoginData } from "./login.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import {environment } from './../../environments/enviroment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SeguridadService {
  baseURl = environment.apiUrl;

  private usu: Usuario | null;

  seguridadCambio = new Subject<boolean>();

  constructor(private router:Router, private http: HttpClient) {
    this.usu = null;
  }

  registrarUsuario(usuario: Usuario) {
    console.log(usuario);
    this.http.post<{success: boolean, data: string | Usuario, token: string}>(this.baseURl + '/register', usuario)
    .subscribe({
      next: (res: any) => {
        if (res.success) {
          if (typeof res.data === 'string') {
            alert(res.data);
            return;
          }
          this.usu = {
            id: res.data.id,
            name: res.data.name,
            lname: res.data.lname,
            age: res.data.age,
            mail: res.data.mail,
            password: res.data.password
          };
          localStorage.setItem('token', res.token);
          this.seguridadCambio.next(true);
          alert('¡Registro exitoso! Bienvenido a FinEdu');
          this.router.navigate(['/home']);
        } else {
          alert(res.data || 'Error al registrar usuario');
        }
      },
      error: (error) => {
        console.error('Error de registro:', error);
        alert('Error al conectar con el servidor. Verifica tu conexión.');
      }
    });
  }

  login(loginData: LoginData) {
    this.http.post<{success: boolean, data: string | Usuario, token: string}>(this.baseURl + '/login', loginData)
    .subscribe({
      next: (res: any) => {
        if (res.success) {
          if (typeof res.data === 'string') {
            alert(res.data);
            return;
          }
          this.usu = {
            id: res.data.id,
            name: res.data.name,
            lname: res.data.lname,
            age: res.data.age,
            mail: res.data.mail,
            password: ""
          };
          localStorage.setItem('token', res.token);
          this.seguridadCambio.next(true);
          alert(`¡Bienvenido/a ${res.data.name}!`);
          this.router.navigate(['/home']);
        } else {
          alert(res.data || 'Error al iniciar sesión');
        }
      },
      error: (error) => {
        console.error('Error de login:', error);
        alert('Error al conectar con el servidor. Verifica: Que el backend esté corriendo en puerto 5009 Tu conexión a internet');
      }
    });
  }

  exitSesion() {
    this.usu = null;
    localStorage.removeItem('token');
    this.seguridadCambio.next(false);
    alert('Sesión cerrada correctamente');
    this.router.navigate(['/login']);
  }

  getUsuario() {
    return this.usu;
  }
}
