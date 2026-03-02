/**
 * MODELO: Cursos de Educación Financiera - CursosEduFin.js
 * ========================================================
 * 
 * Define la estructura de datos para cursos sobre educación financiera.
 * Incluyenúltiplos temas y formatos de aprendizaje (videos, artículos, etc)
 */

const mongoose = require('mongoose');

/**
 * Esquema de Formato de Curso
 * Define los diferentes formatos en que se puede acceder al curso
 * 
 * @property {String} type - Tipo de formato (ej: "video", "artículo", "webinar")
 * @property {String} link - Enlace al recurso del curso
 */
const formatSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  link: {
    type: String,  // URL para acceder al contenido
    required: true
  }
});

/**
 * Esquema de Curso
 * 
 * @property {String} title - Título del curso (requerido)
 * @property {String} description - Descripción general del curso (requerido)
 * @property {Array<String>} topics - Lista de temas que cubre el curso (requerido)
 * @property {String} duration - Duración estimada del curso (ej: "4 horas", "2 semanas")
 * @property {Array<formatSchema>} formats - Array de formatos disponibles para el curso
 */
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  topics: {
    type: [String],  // Array de temas (ej: ["ahorros", "inversión", "presupuesto"])
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  formats: [formatSchema]  // Array de objetos con tipo de formato y enlace
});

module.exports =  mongoose.model('Course', courseSchema);