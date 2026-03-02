/**
 * RUTAS DE EDUCACIÓN FINANCIERA - finclu.js
 * ========================================
 * 
 * Define las rutas para:
 * - Seguridad Bancaria (contenido educativo)
 * - Comparador de Bancos (instituciones y pestañas)
 * - Cursos de Educación Financiera
 */

const { Router } = require('express');
const express = require('express');
const router = express.Router();

// Importar controladores para GET (obtener información)
const {getBanseguContenido, getCombancoPestaniasInstituciones, getEduFinCourses} = require('../controllers/finclu');

// Importar controladores para POST (agregar información)
const {addBanseguContenido, addCombancoInstitucion, addEduFinCourses, addCombancoPestanias} = require('../controllers/finclu');

// ==================== RUTAS GET ====================
/**
 * GET /api/combanco/ban-segu
 * Obtiene contenido educativo sobre seguridad bancaria
 */
router.route('/combanco/ban-segu').get(getBanseguContenido);

/**
 * GET /api/combanco/inspes
 * Obtiene lista de instituciones bancarias y sus pestañas
 */
router.route('/combanco/inspes').get(getCombancoPestaniasInstituciones);

/**
 * GET /api/eduFin/courses
 * Obtiene lista de cursos de educación financiera
 */
router.route('/eduFin/courses').get(getEduFinCourses);

// ==================== RUTAS POST ====================
/**
 * POST /api/ban-segu
 * Agregar nuevo contenido de seguridad bancaria (admin)
 */
router.route('/ban-segu').post(addBanseguContenido);

/**
 * POST /api/combanco/bancos
 * Agregar nueva institución bancaria (admin)
 */
router.route('/combanco/bancos').post(addCombancoInstitucion);

/**
 * POST /api/combanco/pestanias
 * Agregar nueva pestaña a institución (admin)
 */
router.route('/combanco/pestanias').post(addCombancoPestanias);

/**
 * POST /api/eduFin/courses
 * Agregar nuevo curso de educación financiera (admin)
 */
router.route('/eduFin/courses').post(addEduFinCourses);
    
module.exports = router;