# Backend - FinEdu API 🚀

## 📝 Descripción

API REST para la plataforma FinEdu. Proporciona endpoints para gestión de usuarios, cursos de educación financiera, comparación de instituciones bancarias y contenido sobre bancarización y seguridad.

## 🛠️ Tecnologías

- **Node.js** v18+
- **Express.js** v4.21.2 - Framework web
- **MongoDB** v8.10.0 - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** (jsonwebtoken) v9.0.2 - Autenticación
- **bcrypt** v5.1.1 - Hash de contraseñas
- **CORS** - Soporte para peticiones cross-origin
- **dotenv** - Gestión de variables de entorno
- **Morgan** - Logger HTTP

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo con nodemon
npm run dev

# Modo producción
npm start
```

## ⚙️ Configuración

Crear un archivo `config/config.env` con las siguientes variables:

```env
NODE_ENV=development
PORT=5009
MONGO_URI=tu_cadena_de_conexion_mongodb
SECRET=tu_secreto_jwt
```

### Variables de Entorno

| Variable | Descripción | Requerida |
|----------|-------------|-----------|
| `NODE_ENV` | Entorno de ejecución (development/production) | ✅ |
| `PORT` | Puerto del servidor | ✅ |
| `MONGO_URI` | URL de conexión a MongoDB | ✅ |
| `SECRET` | Secreto para firmar tokens JWT | ✅ |

## 📚 API Endpoints

### 🔐 Autenticación y Usuarios

#### POST `/api/register`
Registrar un nuevo usuario

**Request Body:**
```json
{
  "name": "Juan",
  "lname": "Pérez",
  "age": 25,
  "mail": "juan@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "...",
    "name": "Juan",
    "lname": "Pérez",
    "age": 25,
    "mail": "juan@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### POST `/api/login`
Iniciar sesión

**Request Body:**
```json
{
  "mail": "juan@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "...",
    "name": "Juan",
    "lname": "Pérez",
    "mail": "juan@example.com"
  },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### GET `/api/usu`
Obtener todos los usuarios (solo para desarrollo)

**Response:**
```json
{
  "success": true,
  "data": [...]
}
```

### 📚 Educación Financiera

#### GET `/api/eduFin/courses`
Obtener todos los cursos de educación financiera

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "title": "Introducción a las Finanzas",
      "description": "...",
      "topics": ["..."],
      "formats": [...]
    }
  ]
}
```

#### POST `/api/eduFin/courses`
Crear un nuevo curso (privado)

**Request Body:**
```json
{
  "title": "Nuevo Curso",
  "description": "Descripción del curso",
  "topics": ["Tema 1", "Tema 2"],
  "formats": [
    {
      "type": "Video tutorial",
      "link": "https://..."
    }
  ]
}
```

### 🏦 Comparador de Bancos

#### GET `/api/combanco/inspes`
Obtener pestañas e instituciones financieras

**Response:**
```json
{
  "success": true,
  "dataPes": [...],
  "dataInst": [
    {
      "institucion": "Banco Pichincha",
      "tipo": "Banco",
      "tarifa": "$5/mes",
      "beneficios": ["..."],
      "requisitos": ["..."],
      "enlace": "https://..."
    }
  ]
}
```

#### POST `/api/combanco/bancos`
Agregar institución financiera

**Request Body:**
```json
{
  "institucion": "Nombre del Banco",
  "tipo": "Banco/Cooperativa",
  "tarifa": "$X/mes",
  "beneficios": ["Beneficio 1", "Beneficio 2"],
  "requisitos": ["Requisito 1"],
  "enlace": "https://..."
}
```

#### POST `/api/combanco/pestanias`
Agregar pestaña de categoría

**Request Body:**
```json
{
  "categoria": "Nuevo en el sistema",
  "titulo": "...",
  "descripcion": "...",
  "lista": ["Item 1", "Item 2"]
}
```

### 🔒 Bancarización y Seguridad

#### GET `/api/combanco/ban-segu`
Obtener contenido de bancarización y seguridad

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "titulo": "¿Qué es la bancarización?",
      "descripcion": "...",
      "subapartados": [
        {
          "titulo": "Beneficios",
          "items": ["..."]
        }
      ]
    }
  ]
}
```

#### POST `/api/ban-segu`
Agregar contenido de bancarización

**Request Body:**
```json
{
  "titulo": "Nuevo Tema",
  "descripcion": "Descripción del tema",
  "subapartados": [
    {
      "titulo": "Subtema",
      "items": ["Item 1", "Item 2"]
    }
  ]
}
```

## 📊 Modelos de Datos

### Usuario
```javascript
{
  name: String (required),
  lname: String (required),
  age: Number (required),
  mail: String (required, unique),
  password: String (required, min: 7),
  createdAt: Date
}
```

### Curso de Educación Financiera
```javascript
{
  title: String,
  description: String,
  topics: [String],
  formats: [{
    type: String,
    link: String
  }]
}
```

### Institución Bancaria
```javascript
{
  institucion: String,
  tipo: String,
  tarifa: String,
  beneficios: [String],
  requisitos: [String],
  enlace: String
}
```

## 🔒 Seguridad

- Las contraseñas se hashean con bcrypt antes de almacenarlas
- JWT tokens para autenticación
- CORS habilitado para peticiones del frontend
- Validación de datos en todos los endpoints

## 🚨 Manejo de Errores

Todos los endpoints devuelven respuestas consistentes:

**Éxito:**
```json
{
  "success": true,
  "data": {...}
}
```

**Error:**
```json
{
  "success": false,
  "error": "Mensaje de error"
}
```

## 🧪 Testing

```bash
# Ejecutar en modo test
npm test
```

## 📈 Despliegue

El backend está configurado para despliegue en Railway:

1. Crear cuenta en Railway
2. Conectar repositorio
3. Configurar variables de entorno
4. Railway detectará automáticamente el proyecto Node.js

## 🐛 Debugging

Para modo desarrollo con logs detallados:

```bash
NODE_ENV=development npm start
```

## 📝 Notas

- El puerto por defecto es 5009 (configurable en `.env`)
- MongoDB debe estar corriendo antes de iniciar el servidor
- Para producción, asegúrate de configurar `NODE_ENV=production`

## 🤝 Contribuir

Por favor lee las guías de contribución en el README principal del proyecto.

## 📞 Soporte

Para problemas o preguntas, crear un issue en el repositorio.

