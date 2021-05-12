# Consigna GET-POST

### Configuración básica de servidor con recepción de datos de formulario mediante POST

En esta configuracion recibimos mediante metodo **GET** el primer request del path /, para devolver el archivo **INDEX.JS**, en el cual se emplea un formulario el cual al realizar el **submit** dispara el action **/saludar** mediante el metodo **POST** al servidor, el cual mediante un **middleware** de express, nos permite utilizar los datos enviados por el formulario en el **body**, en este caso retornamos un mensaje con **SEND** para mostar el mensaje recibido.
