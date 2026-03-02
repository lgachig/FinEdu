/**
 * RUTAS DE USUARIOS - usuarios.js
 * ===============================
 * 
 * Define las rutas para:
 * - Login de usuarios
 * - Registro de nuevos usuarios
 * - Obtención de lista de usuarios (desarrollo)
 */

const express = require('express');
const router = express.Router();
const {login, addUser, getUsers} = require('../controllers/usuarios');

/**
 * POST /api/login
 * Ruta para iniciar sesión
 */
router.route('/login').post(login)

/**
 * POST /api/register
 * Ruta para registrar un nuevo usuario
 */
router.route('/register').post(addUser)

/**
 * GET /api/usu
 * Ruta para obtener todos los usuarios (solo desarrollo)
 */
router.route('/usu').get(getUsers);
    
module.exports = router;