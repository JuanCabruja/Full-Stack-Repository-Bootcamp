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