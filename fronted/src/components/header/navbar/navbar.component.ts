import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeguridadService } from '../../seguridad/seguirdad.service';
import { NgIf, NgClass } from '@angular/common';
import { RouterLinkActive } from '@angular/router';

/**
 * Componente NavbarComponent
 *
 * Responsable de:
 * - Mostrar la barra de navegación principal
 * - Manejar la apertura/cierre del menú en dispositivos móviles
 * - Mostrar diferentes opciones según si el usuario está autenticado
 * - Integrar con el servicio de seguridad para la gestión de sesiones
 */
@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, NgIf, NgClass, RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  // Controla si el usuario está autenticado
  statusUser : boolean = false;

  // Controla si el menú hamburguesa está abierto
  isMenuOpen: boolean = false;

  // Suscripción a cambios de estado del usuario
  usuarioSubs: Subscription | undefined;

  constructor(private seguirdadServicio: SeguridadService) { }

  /**
   * ngOnInit - Inicializa el componente
   *
   * Se suscribe a los cambios de estado del usuario desde el servicio de seguridad
   * para actualizar la interfaz dinámicamente cuando el usuario inicia/cierra sesión
   */
  ngOnInit(): void {
    this.usuarioSubs=this.seguirdadServicio.seguridadCambio.subscribe(status =>{
      this.statusUser = status;
      // Cierra el menú cuando cambia el estado del usuario
      this.isMenuOpen = false;
    })
  }

  /**
   * toggleMenu - Alterna la apertura/cierre del menú hamburguesa
   *
   * Utilizado en dispositivos móviles para mostrar/ocultar el menú de navegación
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * closeMenu - Cierra el menú hamburguesa
   *
   * Se llama cuando el usuario hace clic en un enlace para mejorar la experiencia
   * de usuario cerrando automáticamente el menú
   */
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  /**
   * exitSesion - Cierra la sesión del usuario
   *
   * Delega al servicio de seguridad para limpiar tokens, datos de usuario
   * y redirigir a la página de login
   */
  exitSesion(){
    this.seguirdadServicio.exitSesion();
  }
}

