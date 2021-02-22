Algoritmo sin_titulo
	definir columnas, columnas_dos, filas como entero;
	definir tamaño_lado como entero;
	
	Escribir 'Ingresa las dimensiones que quieres para el cuadrado';
	Leer tamaño_lado;
	
	Escribir '';
	
	//encargado de dibujar columnas
	para filas = 0 hasta tamaño_lado Hacer
		para columnas = 1 hasta tamaño_lado Hacer
		Escribir '* ', Sin Saltar;
	FinPara
	Escribir '';
	fin para

	Escribir '';
	
	
FinAlgoritmo
