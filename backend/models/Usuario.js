/**
 * MODELO: Usuario - Usuario.js
 * ============================
 * 
 * Define la estructura de datos para usuarios registrados en el sistema.
 * Incluye métodos para:
 * - Encriptación de contraseñas (bcryptjs)
 * - Generación de JWT para autenticación
 * - Validación de contraseñas
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Esquema de Usuario
 * 
 * @property {String} name - Nombre del usuario (requerido)
 * @property {String} lname - Apellido del usuario (requerido)
 * @property {Number} age - Edad del usuario (requerido)
 * @property {String} mail - Email del usuario (requerido, único)
 * @property {String} password - Contraseña encriptada (requerido)
 */
const UsuarioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lname: { type: String, required: true },
    age: { type: Number, required: true },
    mail: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

/**
 * Hook pre-save: Encripta la contraseña antes de guardar el usuario
 * Usa bcryptjs con salt de 8 rondas para mayor seguridad
 */
UsuarioSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
}
);

/**
 * Método: crearJwt()
 * Genera un token JWT válido por 3600 segundos (1 hora)
 * 
 * @returns {String} Token JWT firmado
 */
UsuarioSchema.methods.crearJwt = function() {
    return jwt.sign({ name: this.name }, process.env.SECRET, {
        expiresIn: 3600
    });
}

/**
 * Método: matchPassword()
 * Valida una contraseña ingresada contra la contraseña encriptada en BD
 * 
 * @async
 * @param {String} password - Contraseña a validar
 * @returns {Promise<Boolean>} true si las contraseñas coinciden, false si no
 */
UsuarioSchema.methods.matchPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('Usuarios', UsuarioSchema);