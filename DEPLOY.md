# Guía de Despliegue - TiltUp Learn en Hostinger

## Estructura del Proyecto

```
├── php-backend/              # Backend en PHP
│   ├── config/
│   │   └── db.php           # Configuración de BD
│   ├── api/
│   │   ├── modules.php      # Endpoints de módulos
│   │   └── sections.php     # Endpoints de secciones
│   ├── uploads/
│   │   ├── pdfs/
│   │   │   └── modulo1/     # PDFs de módulos
│   │   └── images/          # Imágenes de módulos
│   └── schema.sql           # Script SQL para crear BD
│
├── client/                   # Frontend React
│   ├── src/
│   ├── dist/               # Generado con npm run build
│   └── package.json
│
└── attached_assets/
    ├── pdfs/
    │   └── modulo1/        # PDFs originales
    └── generated_images/   # Imágenes originales
```

## Paso 1: Preparar React para Producción

```bash
cd /path/to/TiltUpLearn
npm run build
```

Esto genera la carpeta `client/dist/` con archivos estáticos listos para producción.

## Paso 2: Estructura en Hostinger

Tu dominio en Hostinger debería tener esta estructura:

```
public_html/
├── index.html              # Archivo principal de React
├── assets/                 # Carpeta de React (CSS, JS)
├── api/                    # Backend PHP
│   ├── modules.php
│   ├── sections.php
│   └── config/
│       └── db.php
├── uploads/
│   ├── pdfs/
│   │   └── modulo1/
│   └── images/
└── generated_images/       # Imágenes de módulos
```

## Paso 3: Subir Archivos a Hostinger

### 3.1 Usar FTP o Gestor de Archivos de cPanel

1. **Conectar por FTP:**
   - Usuario: tu_usuario_ftp
   - Contraseña: tu_contraseña
   - Servidor: ftp.tudominio.com

2. **Subir archivos:**
   ```
   Sube la carpeta dist/ → public_html/
   Sube php-backend/api/ → public_html/api/
   Sube php-backend/uploads/ → public_html/uploads/
   Sube attached_assets/generated_images/ → public_html/generated_images/
   Sube attached_assets/pdfs/modulo1/ → public_html/uploads/pdfs/modulo1/
   ```

### 3.2 Archivo .htaccess (IMPORTANTE)

Crea este archivo en `public_html/.htaccess`:

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    
    # Redirigir todas las rutas a index.html (para React Router)
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} !^/api/
    RewriteCond %{REQUEST_URI} !^/uploads/
    RewriteCond %{REQUEST_URI} !^/generated_images/
    RewriteRule ^ index.html [QSA,L]
</IfModule>
```

Este archivo es crucial para que React Router funcione correctamente.

## Paso 4: Crear Base de Datos MySQL en Hostinger

1. **En cPanel → MySQL Databases:**
   - Nombre BD: `tiltuplearn`
   - Usuario: `tiltup_user`
   - Contraseña: genera una segura

2. **Ejecutar SQL:**
   - Ve a phpMyAdmin
   - Selecciona la BD `tiltuplearn`
   - Ve a "Importar"
   - Carga el archivo `php-backend/schema.sql`
   - Haz clic en "Continuar"

## Paso 5: Configurar Credenciales de BD

Edita `public_html/api/config/db.php`:

```php
<?php
define('DB_HOST', 'localhost');
define('DB_USER', 'tiltup_user');
define('DB_PASS', 'tu_contraseña_mysql');
define('DB_NAME', 'tiltuplearn');
// ... resto del archivo
?>
```

## Paso 6: Actualizar URLs de API en React

Antes de hacer `npm run build`, actualiza `client/src/lib/queryClient.ts`:

```typescript
// Cambiar esto:
const queryKey = [...];

// Por esto (según tu dominio):
const API_BASE = 'https://tudominio.com/api';

// Todas las URLs de API apuntarán a:
// https://tudominio.com/api/modules
// https://tudominio.com/api/modules/:id/sections
```

Luego ejecuta:
```bash
npm run build
```

## Paso 7: Verificar Permiso de Carpetas

En cPanel, asegúrate que estas carpetas tengan permisos 755:

```
public_html/uploads/        (permisos 755)
public_html/api/            (permisos 755)
public_html/generated_images/ (permisos 755)
```

Los archivos dentro deben tener permisos 644.

## Paso 8: Probar Endpoints

Abre en tu navegador:

```
https://tudominio.com/api/modules.php
```

Deberías ver JSON con los 4 módulos.

```
https://tudominio.com/api/sections.php?module_id=modulo-1
```

Deberías ver las 5 secciones del módulo 1.

## Paso 9: Acceder a la Aplicación

```
https://tudominio.com
```

¡Listo! Tu aplicación debería estar funcionando.

## Troubleshooting

### Error: "Cannot GET /"
- Verifica que `.htaccess` está en `public_html/`
- Asegúrate que mod_rewrite está habilitado en Hostinger

### Error: "API connection failed"
- Verifica que `api/config/db.php` tiene las credenciales correctas
- Prueba la conexión a BD en phpMyAdmin

### Imágenes/PDFs no cargan
- Verifica que las carpetas están en el lugar correcto
- Comprueba los permisos (755)
- Verifica que las rutas en la BD son correctas

### React no carga
- Verifica que `client/dist/index.html` está en `public_html/`
- Comprueba la consola del navegador (F12) para errores

## URLs de Endpoints PHP

```
GET    /api/modules.php                  → Obtener todos los módulos
GET    /api/modules.php?id=modulo-1      → Obtener módulo específico
POST   /api/modules.php                  → Crear módulo
PUT    /api/modules.php?id=modulo-1      → Actualizar módulo

GET    /api/sections.php?module_id=modulo-1  → Obtener secciones
POST   /api/sections.php                      → Crear sección
POST   /api/sections.php?action=complete&id=sec-1-1 → Completar sección
```

## Soporte

Si tienes problemas, verifica:
1. Los logs de error de PHP en cPanel
2. La consola del navegador (F12)
3. Los permisos de las carpetas
4. Las credenciales de BD
