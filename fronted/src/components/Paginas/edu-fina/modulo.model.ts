export interface Tema {
  titulo: string;
  descripcion: string;
  video: string;
  pdf?: string;
}

export interface Modulo {
  titulo: string;
  descripcion: string;
  temas: Tema[];
}

export const MODULOS: Modulo[] = [
  {
    titulo: "Módulo 1: Fundamentos de Educación Financiera",
    descripcion: "Aprende los principios esenciales de la educación financiera...",
    temas: [
      {
        titulo: "¿Qué es la educación financiera y por qué es importante?",
        descripcion: "La educación financiera es clave para tomar decisiones económicas inteligentes...",
        video: "https://youtu.be/th56_4lLHXA?si=Lb7dfWLstgNEQJYg",
        pdf: "https://www.uala.com.mx/assets/legales/introduccion-a-las-finanzas-personales.pdf"
      },
      {
        titulo: "Conceptos básicos: ingresos, gastos, ahorro e inversión",
        descripcion: "Descubre los pilares fundamentales de las finanzas personales...",
        video: "https://youtu.be/2VyDg5cyJQY?si=fh8RbdwWzTtzHwWI",
        pdf: "https://formacion.intef.es/tutorizados_2013_2019/pluginfile.php/110188/mod_resource/content/2/FINANZAS_15_31_03_B2_T1_Conceptos1.pdf"
      }
    ]
  },
  {
    titulo: "Módulo 2: Gestión del Dinero y Presupuesto",
    descripcion: "Este módulo se enfoca en estrategias prácticas para administrar tu dinero...",
    temas: [
      {
        titulo: "Cómo hacer un presupuesto personal o familiar",
        descripcion: "Un presupuesto es la clave para el control financiero...",
        video: "https://youtu.be/f2O4Q-T12FI?si=kosrg3GE8DHCbNC6",
        pdf: "https://www.cfn.fin.ec/wp-content/uploads/2018/08/2-MODULO-II.pdf"
      }
    ]
  }
];
