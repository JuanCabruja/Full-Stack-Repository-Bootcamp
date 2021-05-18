//Configuramos la variable de entorno "PORT"
// Para que coja una ya existente o le asigne el 3000 si no existe

process.env.PORT = process.env.PORT || 3000;