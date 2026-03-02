/**
 * SERVIDOR PRINCIPAL - serve.js
 * =============================
 * 
 * Punto de entrada principal de la aplicación backend.
 * Configura Express, MongoDB, middleware y rutas.
 */

const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const bansegu = require('./rutas/finclu');
const usuarios = require('./rutas/usuarios');
const connectDB = require('./config/db');
const morgan = require('morgan');

// Carga las variables de entorno del archivo config.env
dotenv.config({ path: './config/config.env' });

// Conecta a la base de datos MongoDB
connectDB();

// Crea la aplicación de Express
const app = express();
app.set('trust proxy', true); 

// Middleware - Parsea JSON en los requests
app.use(express.json());

// Middleware - Habilita CORS para peticiones desde el frontend
app.use(cors());

// Middleware - Logger HTTP (solo en desarrollo)
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rutas de la API
app.use('/api', bansegu);
app.use('/api', usuarios);

// Ruta de prueba - Verifica que el servidor esté activo
app.get('/', (req, res) => {
  res.send('🚀 Backend activo desde Railway');
});

// Puerto del servidor
const PORT = process.env.PORT || 5000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log('Server running in development mode');
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Manejo de errores no capturados
process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err}`);
  process.exit(1); 
});