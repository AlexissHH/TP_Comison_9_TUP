# Configuración de Base de Datos

## Inicializar la Base de Datos

Ejecuta el archivo `init.sql` en tu servidor MySQL para crear las tablas y datos de prueba.

```bash
mysql -u root -p < init.sql
```

O desde MySQL Workbench, ejecuta el contenido de `init.sql`.

## Variables de Entorno

Crea un archivo `.env` en la raíz del backend con:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=tu_password
DB_NAME=peluqueria
```

## Usuarios de Prueba

- **Admin**: usuario: `admin`, password: `1234`, rol: `admin`
- **Empleado**: usuario: `empleado`, password: `1234`, rol: `empleado`

## Notas

- Las contraseñas están en texto plano para simplicidad. En producción, usa hashes (ej. bcrypt).
- Asegúrate de que el usuario de DB tenga permisos para crear bases y tablas.