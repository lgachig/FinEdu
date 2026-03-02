import { Component } from '@angular/core';
import { MatNavList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';
import { MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatExpansionPanelTitle } from '@angular/material/expansion';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [ MatNavList, MatListItem, MatExpansionPanel, MatExpansionPanelHeader,
    MatExpansionPanelTitle, NgIf, MatButton, CommonModule ],
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  modulo_1 = {
    "titulo": "FUNDAMENTOS DE EDUCACIÓN FINANCIERA",
    "preguntas": [
        {
            "pregunta": "¿Qué es la educación financiera?",
            "opciones": [
                "Conocer cómo funcionan los bancos",
                "Aprender a manejar el dinero y tomar decisiones financieras informadas",
                "Saber cuánto dinero tienen las empresas",
                "Evitar usar dinero en efectivo"
            ],
            "respuesta_correcta": "Aprender a manejar el dinero y tomar decisiones financieras informadas"
        },
        {
            "pregunta": "¿Cuál de los siguientes conceptos NO forma parte de la educación financiera?",
            "opciones": [
                "Ahorro",
                "Inversión",
                "Manejo de tarjetas de crédito",
                "Uso de redes sociales"
            ],
            "respuesta_correcta": "Uso de redes sociales"
        },
        {
            "pregunta": "¿Por qué es importante la educación financiera?",
            "opciones": [
                "Para evitar caer en deudas innecesarias",
                "Para evitar trabajar y ganar dinero",
                "Para aprender a gastar todo el dinero sin preocupaciones",
                "Para saber qué banco tiene las mejores promociones"
            ],
            "respuesta_correcta": "Para evitar caer en deudas innecesarias"
        },
        {
            "pregunta": "¿Cuál de los siguientes es un concepto clave de la educación financiera?",
            "opciones": [
                "El uso exclusivo de dinero en efectivo",
                "El conocimiento sobre ingresos, gastos, ahorro e inversión",
                "El evitar cualquier tipo de préstamo",
                "La eliminación del uso de tarjetas de débito"
            ],
            "respuesta_correcta": "El conocimiento sobre ingresos, gastos, ahorro e inversión"
        },
        {
            "pregunta": "¿Cuál es el primer paso para mejorar la educación financiera?",
            "opciones": [
                "Aprender sobre ingresos y gastos",
                "Invertir sin conocer los riesgos",
                "Ahorrar todo el dinero sin gastar nada",
                "Usar tarjetas de crédito sin límites"
            ],
            "respuesta_correcta": "Aprender sobre ingresos y gastos"
        },
        {
            "pregunta": "¿Qué es un ingreso?",
            "opciones": [
                "El dinero que se gasta mensualmente",
                "El dinero que una persona recibe regularmente",
                "El monto que se paga en impuestos",
                "Los gastos fijos mensuales"
            ],
            "respuesta_correcta": "El dinero que una persona recibe regularmente"
        },
        {
            "pregunta": "¿Qué es el ahorro?",
            "opciones": [
                "El dinero que se guarda para un propósito futuro",
                "El dinero que se usa solo para emergencias",
                "Lo que se invierte en la bolsa de valores",
                "Lo que se paga mensualmente por deudas"
            ],
            "respuesta_correcta": "El dinero que se guarda para un propósito futuro"
        },
        {
            "pregunta": "¿Qué es una meta financiera?",
            "opciones": [
                "Un objetivo claro sobre cómo gestionar el dinero",
                "Un gasto que se hace mensualmente",
                "La cantidad de dinero que se tiene en el banco",
                "Un préstamo a corto plazo"
            ],
            "respuesta_correcta": "Un objetivo claro sobre cómo gestionar el dinero"
        },
        {
            "pregunta": "¿Por qué es importante la inversión?",
            "opciones": [
                "Porque permite aumentar el patrimonio con el tiempo",
                "Porque garantiza ingresos fijos sin riesgo",
                "Porque evita la necesidad de ahorrar",
                "Porque asegura el acceso a tarjetas de crédito"
            ],
            "respuesta_correcta": "Porque permite aumentar el patrimonio con el tiempo"
        },
        {
            "pregunta": "¿Qué es la bancarización?",
            "opciones": [
                "El proceso de eliminar bancos en la economía",
                "El acceso y uso de servicios financieros como cuentas bancarias",
                "La creación de nuevas entidades bancarias",
                "Un sistema exclusivo para grandes empresas"
            ],
            "respuesta_correcta": "El acceso y uso de servicios financieros como cuentas bancarias"
        }
    ]
}
modulo_2 = {
  "titulo": "GESTIÓN DEL DINERO Y PRESUPUESTO",
  "preguntas": [
      {
          "pregunta": "¿Qué es un presupuesto?",
          "opciones": [
              "Un plan para administrar ingresos y gastos",
              "Una herramienta para gastar sin preocupaciones",
              "Un sistema bancario para préstamos",
              "Un documento exclusivo para empresarios"
          ],
          "respuesta_correcta": "Un plan para administrar ingresos y gastos"
      },
      {
          "pregunta": "¿Cuál es la mejor manera de gestionar los gastos?",
          "opciones": [
              "Hacer un presupuesto mensual",
              "Comprar sin comparar precios",
              "Pagar solo cuando hay deudas acumuladas",
              "Usar tarjetas de crédito sin restricciones"
          ],
          "respuesta_correcta": "Hacer un presupuesto mensual"
      },
      {
          "pregunta": "¿Cuál es la clave para un presupuesto exitoso?",
          "opciones": [
              "Gastar más de lo que se gana",
              "Ajustar los gastos a los ingresos",
              "No llevar un registro de los gastos",
              "Ahorrar solo si queda dinero al final del mes"
          ],
          "respuesta_correcta": "Ajustar los gastos a los ingresos"
      },
      {
          "pregunta": "¿Qué porcentaje recomienda la regla 50/30/20 para ahorro e inversión?",
          "opciones": [
              "50%",
              "30%",
              "20%",
              "10%"
          ],
          "respuesta_correcta": "20%"
      },
      {
          "pregunta": "¿Cuál de estos es un gasto fijo?",
          "opciones": [
              "Pago del alquiler",
              "Salidas a cenar",
              "Compras impulsivas",
              "Viajes"
          ],
          "respuesta_correcta": "Pago del alquiler"
      },
      {
          "pregunta": "¿Qué herramienta puede ayudarte a registrar gastos y controlar tu presupuesto?",
          "opciones": [
              "Una aplicación de finanzas",
              "Un diario de anécdotas",
              "Una libreta de recetas",
              "Un blog personal"
          ],
          "respuesta_correcta": "Una aplicación de finanzas"
      },
      {
          "pregunta": "¿Cuál es un error financiero común?",
          "opciones": [
              "No ahorrar ni planificar gastos",
              "Hacer un presupuesto mensual",
              "Controlar los ingresos y egresos",
              "Usar herramientas de planificación financiera"
          ],
          "respuesta_correcta": "No ahorrar ni planificar gastos"
      },
      {
          "pregunta": "¿Cuál es un método efectivo para evitar gastos innecesarios?",
          "opciones": [
              "Usar tarjetas de crédito sin límites",
              "Comprar solo lo necesario y seguir un presupuesto",
              "No comparar precios antes de comprar",
              "Evitar el uso del dinero en efectivo"
          ],
          "respuesta_correcta": "Comprar solo lo necesario y seguir un presupuesto"
      },
      {
          "pregunta": "¿Cómo se puede reducir el impacto de gastos inesperados?",
          "opciones": [
              "Creando un fondo de emergencia",
              "Pidiendo préstamos constantemente",
              "Usando todo el crédito disponible",
              "No pagando facturas a tiempo"
          ],
          "respuesta_correcta": "Creando un fondo de emergencia"
      },
      {
          "pregunta": "¿Qué es el control de gastos?",
          "opciones": [
              "Registrar y limitar los gastos para evitar desequilibrios financieros",
              "Gastar dinero sin restricciones",
              "Usar la tarjeta de crédito sin pagar intereses",
              "Ahorrar solo si sobra dinero"
          ],
          "respuesta_correcta": "Registrar y limitar los gastos para evitar desequilibrios financieros"
      }
  ]
}
modulo_3 = {
  "titulo": "INVERSIÓN Y CRECIMIENTO DEL DINERO",
  "preguntas": [
      {
          "pregunta": "¿Qué es una inversión?",
          "opciones": [
              "Usar dinero para obtener ganancias futuras",
              "Gastar dinero en compras",
              "Ahorrar en cuentas sin interés",
              "Usar tarjetas de crédito sin límites"
          ],
          "respuesta_correcta": "Usar dinero para obtener ganancias futuras"
      },
      {
          "pregunta": "¿Qué es la diversificación en inversiones?",
          "opciones": [
              "Poner todo el dinero en una sola inversión",
              "Invertir en diferentes activos para reducir riesgos",
              "Evitar la inversión en la bolsa de valores",
              "Invertir solo en bienes raíces"
          ],
          "respuesta_correcta": "Invertir en diferentes activos para reducir riesgos"
      },
      {
          "pregunta": "¿Cuál de las siguientes opciones es una inversión de bajo riesgo?",
          "opciones": [
              "Acciones de empresas emergentes",
              "Cuentas de ahorro con intereses",
              "Criptomonedas",
              "Préstamos a desconocidos"
          ],
          "respuesta_correcta": "Cuentas de ahorro con intereses"
      },
      {
          "pregunta": "¿Cuál es un principio clave de la inversión?",
          "opciones": [
              "Mientras más rápido inviertas, más seguro será el retorno",
              "A mayor riesgo, mayor potencial de ganancia",
              "Es mejor poner todo el dinero en una sola inversión",
              "Se debe invertir solo si se tiene mucho dinero"
          ],
          "respuesta_correcta": "A mayor riesgo, mayor potencial de ganancia"
      },
      {
          "pregunta": "¿Qué es un fondo de inversión?",
          "opciones": [
              "Una cuenta bancaria con intereses",
              "Un conjunto de inversiones administradas por expertos",
              "Una cuenta de ahorros para emergencias",
              "Un préstamo que otorgan los bancos"
          ],
          "respuesta_correcta": "Un conjunto de inversiones administradas por expertos"
      },
      {
          "pregunta": "¿Qué significa 'rentabilidad' en una inversión?",
          "opciones": [
              "La cantidad de dinero perdido",
              "El porcentaje de ganancia obtenido",
              "El tiempo que se tarda en recuperar la inversión",
              "La cantidad de dinero ahorrado"
          ],
          "respuesta_correcta": "El porcentaje de ganancia obtenido"
      },
      {
          "pregunta": "¿Qué es el interés compuesto?",
          "opciones": [
              "Ganancias generadas sobre intereses previos",
              "Una forma de pagar menos intereses",
              "Un tipo de cuenta bancaria",
              "Un préstamo a largo plazo"
          ],
          "respuesta_correcta": "Ganancias generadas sobre intereses previos"
      },
      {
          "pregunta": "¿Cuál de estas inversiones tiene mayor riesgo?",
          "opciones": [
              "Bonos del gobierno",
              "Acciones en empresas tecnológicas emergentes",
              "Cuenta de ahorros",
              "Depósito a plazo fijo"
          ],
          "respuesta_correcta": "Acciones en empresas tecnológicas emergentes"
      },
      {
          "pregunta": "¿Por qué es importante la educación financiera en inversiones?",
          "opciones": [
              "Para evitar tomar decisiones sin información",
              "Para invertir en cualquier oportunidad sin pensar",
              "Porque garantiza que nunca habrá pérdidas",
              "Porque solo los expertos pueden invertir"
          ],
          "respuesta_correcta": "Para evitar tomar decisiones sin información"
      },
      {
          "pregunta": "¿Cuál es un error común al invertir?",
          "opciones": [
              "No investigar antes de invertir",
              "Diversificar el portafolio",
              "Invertir a largo plazo",
              "Usar el interés compuesto"
          ],
          "respuesta_correcta": "No investigar antes de invertir"
      }
  ]
}
modulo_4 = {
  "titulo": "DEUDAS Y CRÉDITO RESPONSABLE",
  "preguntas": [
      {
          "pregunta": "¿Qué es una deuda?",
          "opciones": [
              "Un compromiso de pago adquirido por préstamo",
              "Una forma de recibir dinero gratis",
              "Un tipo de ahorro financiero",
              "Un pago adicional en el banco"
          ],
          "respuesta_correcta": "Un compromiso de pago adquirido por préstamo"
      },
      {
          "pregunta": "¿Cuál es un tipo común de deuda?",
          "opciones": [
              "Tarjeta de crédito",
              "Cuenta de ahorros",
              "Inversión en la bolsa",
              "Pago en efectivo"
          ],
          "respuesta_correcta": "Tarjeta de crédito"
      },
      {
          "pregunta": "¿Qué es el historial crediticio?",
          "opciones": [
              "Un registro de compras en efectivo",
              "Un reporte de cómo una persona maneja sus créditos y deudas",
              "Una lista de cuentas bancarias",
              "Un documento sin importancia financiera"
          ],
          "respuesta_correcta": "Un reporte de cómo una persona maneja sus créditos y deudas"
      },
      {
          "pregunta": "¿Por qué es importante pagar a tiempo las deudas?",
          "opciones": [
              "Para evitar intereses adicionales y mejorar el historial crediticio",
              "Para obtener más préstamos sin restricciones",
              "Para evitar tener que pagar impuestos",
              "Porque no afecta en nada"
          ],
          "respuesta_correcta": "Para evitar intereses adicionales y mejorar el historial crediticio"
      },
      {
          "pregunta": "¿Qué es una tasa de interés?",
          "opciones": [
              "Un porcentaje que se cobra por prestar dinero",
              "El dinero extra que da el banco",
              "Un costo fijo sin cambios",
              "Un impuesto adicional"
          ],
          "respuesta_correcta": "Un porcentaje que se cobra por prestar dinero"
      },
      {
          "pregunta": "¿Cómo puedes evitar endeudarte demasiado?",
          "opciones": [
              "Usando el crédito solo cuando sea necesario",
              "Solicitando muchos préstamos",
              "Pagando solo el mínimo mensual",
              "Ignorando las deudas pequeñas"
          ],
          "respuesta_correcta": "Usando el crédito solo cuando sea necesario"
      },
      {
          "pregunta": "¿Qué es el sobreendeudamiento?",
          "opciones": [
              "Tener más deudas de las que puedes pagar",
              "Ahorrar demasiado dinero",
              "Pedir dinero prestado sin intereses",
              "Usar solo tarjetas de débito"
          ],
          "respuesta_correcta": "Tener más deudas de las que puedes pagar"
      },
      {
          "pregunta": "¿Cuál es una ventaja del crédito bien administrado?",
          "opciones": [
              "Permite construir un buen historial crediticio",
              "Permite comprar sin límites",
              "No es necesario pagar a tiempo",
              "Evita el pago de intereses"
          ],
          "respuesta_correcta": "Permite construir un buen historial crediticio"
      },
      {
          "pregunta": "¿Qué es un préstamo personal?",
          "opciones": [
              "Un préstamo otorgado por bancos para uso libre",
              "Un tipo de inversión",
              "Un pago automático sin devolución",
              "Un método para ahorrar"
          ],
          "respuesta_correcta": "Un préstamo otorgado por bancos para uso libre"
      },
      {
          "pregunta": "¿Qué sucede si no pagas una deuda?",
          "opciones": [
              "Se generan intereses y afecta tu historial crediticio",
              "No pasa nada",
              "El banco cancela la deuda automáticamente",
              "Aumenta tu crédito disponible"
          ],
          "respuesta_correcta": "Se generan intereses y afecta tu historial crediticio"
      }
  ]
}

  moduloSeleccionado: string = '';
  constructor(private router: Router) {

  }

  seleccionarModulo(modulo: string) {
    this.moduloSeleccionado = this.moduloSeleccionado === modulo ? '' : modulo;
  }

  irAPrueba(modulo: string) {
    if(modulo === 'modulo1') {
      this.router.navigate([`pruebas`], { state: { data: this.modulo_1 } });
    }else if(modulo === 'modulo2') {
      this.router.navigate([`pruebas`], { state: { data: this.modulo_2 } });
    }else
    if(modulo === 'modulo3') {
      this.router.navigate([`pruebas`], { state: { data: this.modulo_3 } });
    }else
    if(modulo === 'modulo4') {
      this.router.navigate([`pruebas`], { state: { data: this.modulo_4 } });
    }
  }


}
