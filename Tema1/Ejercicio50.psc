Algoritmo Ejercicio50
	
	definir lectura Como Caracter;
	definir N, cadena_letras, cadena_letras2, i, j Como entero;
	
	Escribir 'Ingresa una palabra:';
	leer lectura;
	escribir Longitud(lectura);
	N = Longitud(lectura);
	dimension cadena_letras[N], cadena_letras2[N];
	
	
	escribir subcadena(lectura, 0, N);
	
FinAlgoritmo