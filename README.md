# README #

Web con las itinerancias del museo en los últimos años. Basada en leaflet.

### ¿Qué hay en este repositorio? ###

* Configuración de Grunt, Bower y bundler para construir un entorno de desarrollo completo
* Código del proyecto

### ¿Qué necesito? ###

Para que el entorno funcione tienes que tener instalado [bundler](http://bundler.io/), [npm](https://www.npmjs.org/)
y [bower](http://bower.io/) con todas sus dependencias

### ¿Cómo monto mi entorno? ###

Para comenzar a trabajar tienes que hacerte un clone de este proyecto:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ .bash
git clone git@github.com:mncars/itinerancias.git
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

una vez terminado el clone ejecutar la instalación de bundle, npm y bower:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~ .bash
bundle install
npm install
bower install
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

una vez instalado todo esto, para lanzar el entorno:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~ .bash
grunt serve  (esto va a lanzar las tareas de compilación)

en la carpeta: "app" hay que lanzar el jekyll:
jekyll s
~~~~~~~~~~~~~~~~~~~~~~~~~~~~


### ¿Cómo creo una distribución? ###

Grunt está preparado para generar paquetes distribuibles en la carpeta dist de la siguiente manera:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~ .bash
primero generamos el jekyll en la carpeta app
jekyll b
grunt build (desde el raiz)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Este comando genera el paquete en la carpeta dist