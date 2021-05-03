Preparar Proyecto

Siguiendo estos pasos y con Nodejs instalado, arrancaremos un nuevo proyecto React: 

Desde un terminal ejecutamos npx create-react-app nombre-proyecto (el nombre no puede tener espacios ni mayúsculas), este comando creará un nueva carpeta con todo el contenido del proyecto.

Accedemos a dicha carpeta con el comando cd nombre-proyecto

y arrancamos el servidor virtual con el comando npm start

Al ejecutar el último comando nos abrirá la pantalla del navegador con una página de ejemplo del proyecto que hemos creado en la ruta. 


con .gitignore retiramos las carpetas que no queremos que se suban a Git, para ello cuando queramos copiar el repositorio podemos bajarlo de Git
y utilizar al mismo nivel que package.json utilizar el comando npm install y nos descargará las carpetas que falten. 

Con Control + C (supongo que en mac será cmd) se cancela lo que se esté ejecutando en la terminal. 

Configuración de Visual Studio Code en Settings -> buscamos Emmet y nos vamos a include a language allí en Items ponemos javascript y en el segundo campo javascriptreact para que nos haga
las recomendaciones de jsreact en los archivos JS

Los componentes en React deben empezar cada palabra con Mayúsculas para podear linkearse bien

------

Hemos visto Hooks y como estos los heredamos para manejar un estado general

-----

useContext para pasar un contexto y no tener que utilizar props para modificar en diferentes instancias

----

Router, para instalar el react-router-dom tenemos que hacer el comando npm install react-router-dom y hace rlas direcciones.

el modificador exact hace que para acceder a esa ruta tenga que ser exacta la escritura de la ruta

El NavLink nos permite crear una barra de navegación (a nivel f uncionalidad, luego podemos agregar las clases y estilos que queramos dentro)

activeClassName nos permite agregar clases a los links que estén activos (como por ejemplo darle un color para saber que está activo en ese momento)

Encadenamiento opcional, permite leer el valor de una propiedad - nos arregla el problema del error del fetch en el archivo Record.js, lo que hace es que en vez de decirnos error
nos de un undefined en caso de que no exista.  

https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining
Encadenamiento opcional - JavaScript | MDN

El operador ?. funciona de manera similar a el operador de encadenamiento ., excepto que en lugar de causar un error si una referencia es casi-nula (null o undefined), la expresión hace una evaluac...

