/**
 * MODELO: Instituciones para Comparador de Bancos - InstitucionComBan.js
 * ===================================================================
 * 
 * Define la estructura de datos para instituciones bancarias
 * en el comparador de bancos. Almacena información sobre 
 * tarjetas, préstamos, cuentas, etc de diferentes entidades
 */

const mongoose = require('mongoose');

/**
 * Esquema de Institución Bancaria
 * 
 * @property {String} institucion - Nombre de la institución bancaria (requerido)
 *                                  Ej: "Banco Santander", "BBVA", "Banco Mexicano"
 * @property {String} tipo - Tipo de producto financiero (requerido)
 *                           Ej: "Tarjeta de Crédito", "Cuenta Corriente", "Préstamo"
 * @property {String} tarifa - Tarifa o costo asociado al producto
 *                             Ej: "$50 anual", "Sin comisión", "0.5% mensual"
 * @property {Array<String>} beneficios - Lista de beneficios del producto
 *                                        Ej: ["Cashback", "Puntos", "Seguro de viaje"]
 * @property {Array<String>} requisitos - Requisitos para obtener el producto
 *                                        Ej: ["Salario mínimo de $2000", "Edad >= 18", "Documento de identidad"]
 * @property {String} enlace - URL de la institución o del producto
 *                             Ej: "https://www.banco.com/tarjetas/gold"
 */
const InstitucionSchema = new mongoose.Schema({
  institucion: { type: String, required: true },
  tipo: { type: String, required: true },
  tarifa: { type: String, required: true },
  beneficios: { type: [String], required: true },
  requisitos: { type: [String], required: true },
  enlace: { type: String, required: true }
});

module.exports =  mongoose.model('Institucion', InstitucionSchema);