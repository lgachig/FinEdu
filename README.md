# FinEdu - Plataforma de Educación Financiera 📊

## 📝 Descripción

**FinEdu** es una plataforma web moderna dedicada a la educación financiera e inclusión financiera en Ecuador. El proyecto proporciona herramientas educativas, comparadores de servicios bancarios, información sobre bancarización y seguridad, y recursos prácticos para mejorar la cultura financiera de los usuarios.

## ✨ Características Principales

- 🎓 **Educación Financiera**: Cursos y módulos interactivos con videos y guías descargables
- 🏦 **Comparador de Bancos**: Herramienta para comparar instituciones financieras y sus servicios
- 🔒 **Bancarización y Seguridad**: Información sobre seguridad financiera y buenas prácticas
- 📚 **Recursos**: Biblioteca de recursos, calculadoras y enlaces útiles
- 👤 **Sistema de Usuarios**: Registro y autenticación con JWT
- 🎨 **Diseño Moderno**: Interfaz responsive con Angular Material

## 🏗️ Arquitectura del Proyecto

El proyecto está dividido en dos partes principales:

```
portafolio/
├── backend/         # API REST con Node.js, Express y MongoDB
└── fronted/        # Aplicación web con Angular 19
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js v18 o superior
- MongoDB (local o Atlas)
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd portafolio
```

2. **Configurar el Backend**
```bash
cd backend
npm install
# Configurar variables de entorno (ver README del backend)
npm start
```

3. **Configurar el Frontend**
```bash
cd fronted
npm install
npm start
```

La aplicación estará disponible en:
- Frontend: `http://localhost:4200`
- Backend: `http://localhost:5009`

## 📦 Estructura del Proyecto

### Backend
- **Express.js**: Framework de servidor
- **MongoDB**: Base de datos NoSQL
- **JWT**: Autenticación y autorización
- **bcrypt**: Hash de contraseñas

### Frontend
- **Angular 19**: Framework frontend
- **Angular Material**: Componentes UI
- **RxJS**: Programación reactiva
- **Bootstrap 5**: Estilos y layout

## 🎨 Paleta de Colores

- **Primary**: #468189 (Teal oscuro)
- **Secondary**: #77aca2 (Teal claro)
- **Dark**: #031a26 (Azul muy oscuro)
- **Light**: #f4e9cd (Beige claro)

## 📖 Documentación

- [README del Backend](./backend/README.md) - Documentación detallada de la API
- [README del Frontend](./fronted/README.md) - Guía del frontend

## 👨‍💻 Autor

**Luis Achig**