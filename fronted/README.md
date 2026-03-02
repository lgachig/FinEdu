# Frontend - FinEdu 🎨

## 📝 Descripción

Aplicación web frontend para la plataforma FinEdu, desarrollada con Angular 19. Proporciona una interfaz moderna e intuitiva para acceder a contenidos de educación financiera, comparar instituciones bancarias, y aprender sobre bancarización y seguridad financiera.

## 🛠️ Tecnologías

- **Angular** v19.0.0 - Framework frontend
- **Angular Material** v19.1.2 - Componentes UI
- **Angular Forms** - Gestión de formularios
- **Angular Router** - Navegación
- **RxJS** v7.8.0 - Programación reactiva
- **Bootstrap** v5.3.3 - Estilos y grid system
- **TypeScript** v5.6.2 - Lenguaje de programación
- **SCSS** - Preprocesador CSS

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Modo desarrollo
ng serve
# o
npm start

# La aplicación estará disponible en http://localhost:4200
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── app.component.*        # Componente raíz
│   ├── app.config.ts          # Configuración de la app
│   └── app.routes.ts          # Definición de rutas
├── components/
│   ├── header/
│   │   └── navbar/            # Barra de navegación
│   ├── footer/
│   │   └── foot/              # Pie de página
│   ├── seguridad/
│   │   ├── login/             # Inicio de sesión
│   │   ├── registrar/         # Registro de usuarios
│   │   └── seguirdad.service.ts # Servicio de autenticación
│   └── Paginas/
│       ├── home/              # Página de inicio
│       ├── about-us/          # Acerca de nosotros
│       ├── edu-fina/          # Educación financiera
│       ├── com-banco/         # Comparador de bancos
│       ├── ban-segu/          # Bancarización y seguridad
│       ├── recursos/          # Recursos
│       └── curso/             # Vista de curso individual
├── service/
│   └── entity.service.ts      # Servicio genérico de entidades
├── environments/
│   └── environment.ts         # Variables de entorno
└── styles.scss                # Estilos globales
```

## 🎨 Características

### ✨ Diseño Moderno
- Animaciones suaves y transiciones
- Diseño responsive (mobile-first)
- Paleta de colores consistente
- Componentes Material Design

### 🔐 Autenticación
- Sistema de login y registro
- Gestión de tokens JWT
- Rutas protegidas
- Sesión persistente con localStorage

### 📱 Páginas Principales

#### Home
- Carrusel de imágenes con información destacada
- Sección "Acerca de nosotros" con misión y visión

#### Educación Financiera
- Lista de cursos disponibles
- Videos embebidos de YouTube
- PDFs descargables
- Interfaz con cards modernas

#### Comparador de Bancos
- Tabla interactiva con Material Table
- Filtros de búsqueda
- Pestañas por categorías
- Información detallada de cada institución

#### Bancarización y Seguridad
- Acordeón con Material Expansion Panels
- Contenido organizado por temas
- Listas expandibles de información

#### Recursos
- Enlaces a instituciones financieras oficiales
- Calculadoras (próximamente)
- Material descargable

## ⚙️ Configuración

### Variables de Entorno

Editar `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5009/api',
};
```

Para producción, crear `environment.prod.ts` con los valores apropiados.

## 🚀 Scripts Disponibles

```bash
# Servidor de desarrollo
npm start
# o
ng serve

# Build de producción
ng build

# Build de producción optimizado
ng build --configuration production

# Ejecutar tests
ng test

# Ejecutar linter
ng lint

# Servidor SSR (Server-Side Rendering)
npm run serve:ssr:frontEnd
```

## 📊 Rutas de la Aplicación

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | HomeComponent | Página de inicio |
| `/login` | LoginComponent | Inicio de sesión |
| `/registrar` | RegistrarComponent | Registro de usuarios |
| `/home` | HomeComponent | Página principal |
| `/edu-fina` | EduFinaComponent | Educación financiera |
| `/com-banco` | ComBancoComponent | Comparador de bancos |
| `/ban-segu` | BanSeguComponent | Bancarización y seguridad |
| `/recursos` | RecursosComponent | Recursos y herramientas |
| `/curso` | CursoComponent | Vista de curso |

## 🎨 Paleta de Colores

Variables CSS definidas en `styles.scss`:

```css
--color-primary: #468189    /* Teal oscuro */
--color-secondary: #77aca2  /* Teal claro */
--color-dark: #031a26       /* Azul muy oscuro */
--color-light: #f4e9cd      /* Beige claro */
```

## 📦 Construcción para Producción

```bash
# Build optimizado para producción
ng build --configuration production

# Los archivos se generan en dist/front-end/
```

### Optimizaciones Incluidas:
- Minificación de código
- Tree-shaking
- Lazy loading de módulos
- Compilación AOT (Ahead-of-Time)
- Optimización de imágenes

## 🌐 Server-Side Rendering (SSR)

El proyecto incluye soporte para SSR usando Angular Universal:

```bash
# Build SSR
npm run build:ssr

# Ejecutar servidor SSR
npm run serve:ssr:frontEnd
```

## 🧪 Testing

```bash
# Ejecutar tests unitarios
ng test

# Ejecutar tests con cobertura
ng test --code-coverage

# Ver reporte de cobertura
open coverage/index.html
```

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (< 768px)
- 📱 Tablets (768px - 992px)
- 💻 Desktop (> 992px)

## 🔧 Desarrollo

### Generar Componentes

```bash
# Generar nuevo componente
ng generate component components/Paginas/nuevo-componente

# Generar servicio
ng generate service services/nuevo-servicio

# Generar modelo
ng generate interface models/nuevo-modelo
```

### Convenciones de Código

- Usar PascalCase para nombres de clases
- Usar camelCase para variables y métodos
- Usar kebab-case para nombres de archivos
- Seguir las guías de estilo de Angular

## 🐛 Debugging

```bash
# Modo desarrollo con source maps
ng serve --source-map

# Modo desarrollo con configuración específica
ng serve --configuration development
```

## 📦 Dependencias Principales

```json
{
  "@angular/core": "^19.0.0",
  "@angular/material": "^19.1.2",
  "@angular/router": "^19.0.0",
  "@angular/forms": "^19.0.0",
  "bootstrap": "^5.3.3",
  "rxjs": "~7.8.0"
}
```

## 🚀 Despliegue

### Netlify
1. Conectar repositorio
2. Configurar build command: `ng build --configuration production`
3. Directorio de publicación: `dist/front-end/browser`

### Firebase Hosting
```bash
ng build --configuration production
firebase deploy
```

### Vercel
1. Importar proyecto
2. Framework preset: Angular
3. Build command: `ng build --configuration production`

## 📝 Notas Importantes

- Asegúrate de que el backend esté corriendo en el puerto 5009
- Las imágenes deben estar en `public/assets/`
- Los estilos globales se definen en `src/styles.scss`
- Material Design requiere importar el tema en `styles.scss`

## 🤝 Contribuir

Por favor lee las guías de contribución en el README principal del proyecto.

## 📖 Recursos Adicionales

- [Documentación de Angular](https://angular.dev)
- [Angular Material](https://material.angular.io)
- [Bootstrap](https://getbootstrap.com)
-[RxJS](https://rxjs.dev)

## 📞 Soporte

Para problemas o preguntas, crear un issue en el repositorio.

