Algoritmo sin_titulo
	definir columnas, columnas_dos, filas como entero;
	definir tama�o_lado como entero;
	
	Escribir 'Ingresa las dimensiones que quieres para el cuadrado';
	Leer tama�o_lado;
	
	Escribir '';
	
	//encargado de dibujar columnas
	para filas = 0 hasta tama�o_lado Hacer
		para columnas = 1 hasta tama�o_lado Hacer
		Escribir '* ', Sin Saltar;
	FinPara
	Escribir '';
	fin para

	Escribir '';
	
	
FinAlgoritmo
