# API REST NODE

Api rest creada para prueba tecnica.

## Requerimientos

- node 14v o superior: https://nodejs.org/es
- base de datos mysql

## Instalacion

Configurar base de datos con archivo adjunto en carpeta database:
 
    mysql -u root empleados < database/database.sql -p 

Configurar credenciales de base de datos en archivo .env:

    PORT=8080
    DB_HOST=''
    DB_USERNAME=''
    DB_PASSWORD=''
    DB_DATABASE=''

Instalar paquetes y correr proyecto :

    npm install
    npm run start

# ENDPOINTS

> url: http://localhost:8080/api

Listado de todos los líderes de equipo.

    GET /supervisor 

Datos del líder de equipo:

    GET /supervisor/{id} 
    
Listado de todos los empleados

    GET /employee 

Ingresar un nuevo empleado

    POST /employee 


Actualizar los datos de un empleado

    PUT /employee/{id}
