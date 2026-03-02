/**
 * CONTROLADOR DE USUARIOS (usuarios.js)
 * =====================================
 * 
 * Este módulo contiene todas las funciones para manejar autenticación y gestión de usuarios.
 * Incluye funciones para login, registro y obtención de usuarios.
 */

const Usuario = require('../models/Usuario');

/**
 * @api {post} /api/login Iniciar Sesión
 * @apiName LoginUsuario
 * @apiGroup Usuarios
 * @apiDescription Autentica un usuario con email y contraseña, retorna un token JWT
 * 
 * @apiParam {String} mail Email del usuario (requerido)
 * @apiParam {String} password Contraseña del usuario (requerido, mín 7 caracteres)
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Object} data Datos del usuario autenticado
 * @apiSuccess {String} token Token JWT para autenticación en solicitudes futuras
 * 
 * @apiError {Boolean} success false
 * @apiError {String} data Mensaje de error
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X POST http://localhost:5009/api/login \
 *   -H "Content-Type: application/json" \
 *   -d '{"mail":"usuario@ejemplo.com","password":"password123"}'
 */
exports.login = async (req, res) => {  
  try {
    // Extrae email y contraseña del request body
    const { mail, password } = req.body;
    
    // Valida que ambos campos estén presentes
    if (!mail || !password) {
      return res.status(400).json({
        success: false,
        data: "Por favor, ingrese usuario y contraseña",
        token: null
      });
    }

    // Busca el usuario en la base de datos incluyendo el campo de contraseña
    const user = await Usuario.findOne({ mail }).select('+password');
    if (!user) {
      return res.status(400).json({
        success: false,
        data: "Usuario no encontrado",
        token: null
      });
    }
    
    // Compara la contraseña proporcionada con el hash en la base de datos
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        data: "Contraseña incorrecta",
        token: null
      });
    }
    
    // Genera un token JWT para el usuario
    const token = user.crearJwt();
    res.status(200).json({
      success: true,
      data: user,
      token: token
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: err.message,
      token: null
    });
  }
}

/**
 * @api {post} /api/register Registrar Nuevo Usuario
 * @apiName RegistrarUsuario
 * @apiGroup Usuarios
 * @apiDescription Crea un nuevo usuario y retorna un token de autenticación
 * 
 * @apiParam {String} name Nombre del usuario (requerido)
 * @apiParam {String} lname Apellido del usuario (requerido)
 * @apiParam {Number} age Edad del usuario (requerido)
 * @apiParam {String} mail Email único del usuario (requerido)
 * @apiParam {String} password Contraseña del usuario (requerido, mín 7 caracteres)
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Object} data Datos del usuario creado
 * @apiSuccess {String} token Token JWT para autenticación
 * 
 * @apiError {Boolean} success false
 * @apiError {String} data Mensaje de error (ej: "El usuario ya existe")
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X POST http://localhost:5009/api/register \
 *   -H "Content-Type: application/json" \
 *   -d '{"name":"Juan","lname":"Pérez","age":25,"mail":"juan@ejemplo.com","password":"password123"}'
 */
exports.addUser = async (req, res) => {
  try {
    // Extrae el email del request body
    const { mail } = req.body;
    
    // Verifica si el usuario ya existe con ese email
    const userExists = await Usuario.findOne({ 
      mail 
    });
    if (userExists) {
      return res.status(400).json({
        success: false,
        data: "El usuario ya existe"
      });
    }
    
    // Crea un nuevo usuario en la base de datos
    const user = await Usuario.create(req.body);
    
    // Genera un token JWT para el usuario recién creado
    const token = user.crearJwt();
    res.status(201).json({
      success: true,
      data: user,
      token: token
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}

/**
 * @api {get} /api/usu Obtener Todos los Usuarios
 * @apiName ObtenerUsuarios
 * @apiGroup Usuarios
 * @apiDescription Retorna una lista de todos los usuarios registrados (solo para desarrollo)
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Array} data Array de usuarios
 * 
 * @apiError {Boolean} success false
 * @apiError {String} error Mensaje de error
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X GET http://localhost:5009/api/usu
 */
exports.getUsers = async (req, res) => {
  try {
    // Obtiene todos los usuarios de la base de datos
    const users = await Usuario.find();
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}