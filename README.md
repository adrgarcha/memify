<h1 align="center">
    Memify
    <br><br>
    <img alt="Logo de Memify" width="256" height="256" src="./src/main/resources/static/images/MemifyLogo.jpg" />
    <br>    
    <h4 align="center">Crear y viralizar memes nunca ha sido tán fácil.</h4>
</h1>

## Manual de desarrollador

Para comenzar, es necesario [crear un clúster en MongoDB Atlas](https://www.mongodb.com/docs/atlas/getting-started/) utilizando tu cuenta. Una vez creado, obtendrás el enlace de conexión junto con el nombre de la base de datos que deseas utilizar. Este enlace te permitirá establecer la conexión con la base de datos de MongoDB.

Una vez que hayas obtenido el enlace de conexión y el nombre de la base de datos, deberás crear un archivo llamado `.env` en el mismo directorio donde se encuentra el archivo `.env.example`. Este archivo contendrá el enlace de conexión y el nombre de la base de datos que has obtenido. Este paso es crucial para que la API pueda establecer la conexión con la base de datos de MongoDB de forma adecuada.

### Terminal

Para comenzar, asegúrate de tener instalados en tu sistema operativo el gestor de paquetes Maven y JDK 17+ (puedes encontrar los enlaces de descarga en la bibliografía). Al terminar, sigue estos pasos:

1. Clona el repositorio de GitHub: `git clone https://github.com/adrgarcha/memify`.
2. Abre un terminal en el directorio raíz del proyecto y ejecuta el comando `mvn clean package`.
3. Después de la construcción del proyecto, ejecuta el comando `java -jar ./target/memify-1.0.0.jar` en el terminal para iniciar la aplicación.

### IDE

Para esta alternativa también será necesario tener instalado Maven y JDK 17+. Después debe seguir los siguientes pasos:

1. Clonar el repositorio de GitHub: https://github.com/adrgarcha/memify
2. Haz clic derecho en el archivo **MemifyApplication.java** y selecciona **Run** para ejecutar la aplicación.

### Docker

En este procedimiento, no es necesario contar con ninguna instalación previa. Sin embargo, es indispensable tener Docker instalado para ejecutar los comandos necesarios en el terminal.

1. Clonar el repositorio de GitHub: https://github.com/adrgarcha/memify
2. Ejecutar el siguiente comando desde el directorio raíz del proyecto: `docker build -t memify .`.
3. Ejecutar el siguiente comando desde el mismo directorio: `docker run -p 8282:8282 memify`.

## Manual de despliegue

Para desplegar la aplicación en tu servicio de hosting preferido, se ha creado un archivo Dockerfile, que permite ejecutar la aplicación de forma sencilla en un entorno aislado y sin problemas de dependencias. Suponiendo que el servicio de alojamiento elegido admita la integración con repositorios de GitHub (una característica común en la mayoría de los servicios de hosting), podemos configurarlo para que la aplicación se despliegue automáticamente cuando se realicen cambios en la rama seleccionada.

Recuerda que debes indicar las variables de entorno en el servicio de hosting que hayas seleccionado, en este caso deberás indicar el enlace de conexión con MongoDB Atlas y el nombre de la BD. Usa como referencia el `.env.example`.

Los pasos o la configuración a seguir en el servicio de hosting serían los siguientes:

1. Indicar en el servicio de hosting seleccionado que se va a utilizar un **Dockerfile** y la ruta donde se encuentra dicho archivo.
2. Ejecutar el siguiente comando para construir el contenedor de Docker: `docker build -t memify .`.
3. Ejecutar el siguiente comando para iniciar el contenedor: `docker run -p 8282:8282 memify`.

Sin embargo, en algunos servicios de hosting, la configuración puede ser tan simple como indicar el Dockerfile que se utilizará y su ubicación para tener el proyecto completamente configurado.
