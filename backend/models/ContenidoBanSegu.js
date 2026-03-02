/**
 * MODELO: Contenido de Seguridad Bancaria - ContenidoBanSegu.js
 * ===========================================================
 * 
 * Define la estructura de datos para contenido educativo sobre 
 * seguridad bancaria. Organizado en apartados con subapartados 
 * que contienen items informativos.
 */

const mongoose = require('mongoose');

/**
 * Esquema de Subapartado
 * Representa un subapartado dentro de un apartado principal
 * 
 * @property {String} titulo - Título del subapartado (requerido)
 * @property {Array<String>} items - Lista de items informativos (requerido)
 */
const SubapartadoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  items: { type: [String], required: true }
});

/**
 * Esquema de Contenido de Seguridad Bancaria
 * 
 * @property {String} titulo - Título principal del apartado (requerido)
 * @property {String} descripcion - Descripción general del contenido (requerido)
 * @property {Array<SubapartadoSchema>} subapartados - Array de subapartados con items (requerido)
 */
const ContenidoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  subapartados: { type: [SubapartadoSchema], required: true }
});

module.exports =  mongoose.model('Contenido', ContenidoSchema);