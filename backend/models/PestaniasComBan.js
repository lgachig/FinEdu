/**
 * MODELO: Pestañas del Comparador de Bancos - PestaniasComBan.js
 * ==========================================================
 * 
 * Define la estructura de datos para las pestañas/categorías
 * del comparador de bancos. Permite organizar el contenido
 * por diferentes tipos de productos financieros
 */

const mongoose = require('mongoose');

/**
 * Esquema de Pestaña del Comparador
 * 
 * @property {String} categoria - Categoría principal de la pestaña (requerido)
 *                               Ej: "Tarjetas", "Cuentas", "Préstamos", "Seguros"
 * @property {String} titulo - Título descriptivo de la pestaña (requerido)
 *                             Ej: "Tarjetas de Crédito Oro", "Cuentas de Ahorro"
 * @property {String} descripcion - Descripción general de la pestaña (opcional)
 *                                  Ej: "Compara las mejores tarjetas de crédito..."
 * @property {Array<String>} lista - Lista de elementos/opciones en la pestaña
 *                                   Ej: IDs de instituciones, tipos de productos, etc
 */
const PestaniaSchema = new mongoose.Schema({
    categoria: { type: String, required: true },
    titulo: { type: String, required: true },
    descripcion: { type: String, required: false },
    lista: { type: [String], required: true }
  });

module.exports =  mongoose.model('Pestania', PestaniaSchema);