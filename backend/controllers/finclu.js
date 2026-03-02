/**
 * CONTROLADOR DE EDUCACIÓN FINANCIERA Y COMPARADOR DE BANCOS (finclu.js)
 * =====================================================================
 * 
 * Este módulo contiene todas las funciones para manejar:
 * - Contenido de bancarización y seguridad
 * - Comparador de instituciones bancarias
 * - Cursos de educación financiera
 */

const contenidoBanSegu = require('../models/ContenidoBanSegu');
const cursosEduFin = require('../models/CursosEduFin');
const institucionComBanco = require('../models/InstitucionComBan');
const pestaniasComBanco = require('../models/PestaniasComBan');

/**
 * @api {get} /api/combanco/ban-segu Obtener Contenido de Bancarización
 * @apiName ObtenerBanseguContenido
 * @apiGroup Bancarización
 * @apiDescription Retorna todo el contenido sobre bancarización y seguridad
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Array} data Array de contenido de bancarización
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X GET http://localhost:5009/api/combanco/ban-segu
 */
exports.getBanseguContenido = async (req, res) => {
  try {
    // Obtiene todos los documentos de contenido de bancarización
    const contenido = await contenidoBanSegu.find();
    res.status(200).json({
      success: true,
      data: contenido
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}

/**
 * @api {post} /api/ban-segu Crear Contenido de Bancarización
 * @apiName CrearBanseguContenido
 * @apiGroup Bancarización
 * @apiDescription Crea nuevo contenido sobre bancarización y seguridad (administrador)
 * 
 * @apiParam {String} titulo Título del contenido (requerido)
 * @apiParam {String} descripcion Descripción general (requerido)
 * @apiParam {Array} subapartados Array de subtemas con items (requerido)
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Object} data Contenido creado
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X POST http://localhost:5009/api/ban-segu \
 *   -H "Content-Type: application/json" \
 *   -d '{"titulo":"Nuevo Tema","descripcion":"...","subapartados":[...]}'
 */
exports.addBanseguContenido = async (req, res) => {
  try {
    // Crea un nuevo documento de contenido de bancarización
    const contenido = await contenidoBanSegu.create(req.body);
    res.status(201).json({
      success: true,
      data: contenido
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}

/**
 * @api {post} /api/combanco/bancos Crear Institución Bancaria
 * @apiName CrearInstitucionBancaria
 * @apiGroup ComparadorBancos
 * @apiDescription Agrega una nueva institución bancaria al comparador (administrador)
 * 
 * @apiParam {String} institucion Nombre de la institución (requerido)
 * @apiParam {String} tipo Tipo de institución (Banco/Cooperativa) (requerido)
 * @apiParam {String} tarifa Tarifa de mantenimiento (requerido)
 * @apiParam {Array} beneficios Array de beneficios ofrecidos (requerido)
 * @apiParam {Array} requisitos Array de requisitos (requerido)
 * @apiParam {String} enlace URL del sitio web (requerido)
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Object} data Institución creada
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X POST http://localhost:5009/api/combanco/bancos \
 *   -H "Content-Type: application/json" \
 *   -d '{"institucion":"Banco Pichincha","tipo":"Banco","tarifa":"$5/mes",...}'
 */
exports.addCombancoInstitucion = async (req, res) => {
  try {
    // Crea una nueva institución bancaria
    const institucion = await institucionComBanco.create(req.body);
    res.status(201).json({
      success: true,
      data: institucion
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}

/**
 * @api {get} /api/combanco/inspes Obtener Instituciones y Pestañas
 * @apiName ObtenerCombancoInfo
 * @apiGroup ComparadorBancos
 * @apiDescription Retorna pestañas de categorías e instituciones bancarias
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Array} dataPes Array de pestañas/categorías
 * @apiSuccess {Array} dataInst Array de instituciones bancarias
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X GET http://localhost:5009/api/combanco/inspes
 */
exports.getCombancoPestaniasInstituciones = async (req, res) => {
  try {
    // Obtiene las pestañas de categorías
    const pestanias = await pestaniasComBanco.find();
    // Obtiene todas las instituciones bancarias
    const instituciones = await institucionComBanco.find();
    res.status(200).json({
      success: true,
      dataPes: pestanias,
      dataInst: instituciones
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}

/**
 * @api {post} /api/combanco/pestanias Crear Pestaña de Categoría
 * @apiName CrearCombancoPestania
 * @apiGroup ComparadorBancos
 * @apiDescription Crea una nueva categoría/pestaña en el comparador (administrador)
 * 
 * @apiParam {String} categoria Nombre de la categoría (requerido)
 * @apiParam {String} titulo Título de la pestaña (requerido)
 * @apiParam {String} descripcion Descripción general (requerido)
 * @apiParam {Array} lista Array de ítems de la lista (requerido)
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Object} data Pestaña creada
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X POST http://localhost:5009/api/combanco/pestanias \
 *   -H "Content-Type: application/json" \
 *   -d '{"categoria":"Nuevo","titulo":"...","descripcion":"...","lista":[...]}'
 */
exports.addCombancoPestanias = async (req, res) => {
  try {
    // Crea una nueva pestaña de categoría
    const pestanias = await pestaniasComBanco.create(req.body);
    res.status(201).json({
      success: true,
      data: pestanias
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}

/**
 * @api {get} /api/eduFin/courses Obtener Cursos de Educación Financiera
 * @apiName ObtenerCursos
 * @apiGroup EducaciónFinanciera
 * @apiDescription Retorna la lista de todos los cursos disponibles
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Array} data Array de cursos disponibles
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X GET http://localhost:5009/api/eduFin/courses
 */
exports.getEduFinCourses = async (req, res) => {
  try {
    // Obtiene todos los cursos de educación financiera
    const cursos = await cursosEduFin.find();
    res.status(200).json({
      success: true,
      data: cursos
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}

/**
 * @api {post} /api/eduFin/courses Crear Curso de Educación Financiera
 * @apiName CrearCurso
 * @apiGroup EducaciónFinanciera
 * @apiDescription Crea un nuevo curso de educación financiera (administrador)
 * 
 * @apiParam {String} title Título del curso (requerido)
 * @apiParam {String} description Descripción del curso (requerido)
 * @apiParam {Array} topics Array de temas del curso (requerido)
 * @apiParam {Array} formats Array de formatos (video, PDF, etc.) (requerido)
 * @apiParam {String} duration Duración del curso en horas (requerido)
 * 
 * @apiSuccess {Boolean} success Indicador de éxito
 * @apiSuccess {Object} data Curso creado
 * 
 * @apiExample {curl} Ejemplo de solicitud:
 * curl -X POST http://localhost:5009/api/eduFin/courses \
 *   -H "Content-Type: application/json" \
 *   -d '{"title":"Nuevo Curso","description":"...","topics":[...],...}'
 */
exports.addEduFinCourses = async (req, res) => {
  try {
    // Crea un nuevo curso de educación financiera
    const cursos = await cursosEduFin.create(req.body);
    res.status(201).json({
      success: true,
      data: cursos
    });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
}

