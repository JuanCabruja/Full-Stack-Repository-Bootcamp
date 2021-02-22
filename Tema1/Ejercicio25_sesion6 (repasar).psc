Algoritmo Ejercicio25
	definir columnas, columnas_dos, filas, minimo, maximo como entero;
	definir tamaño_lado como entero;
	
	Escribir 'Ingresa las dimensiones que quieres para el cuadrado';
	Leer tamaño_lado;
	
	Escribir '';


	para filas = 1 hasta tamaño_lado Hacer
		para columnas = 1 hasta tamaño_lado Hacer
			si filas == 1 o filas == tamaño_lado o columnas==1 o columnas== tamaño_lado Entonces
				escribir '* ', Sin Saltar;
			SiNo
				escribir '  ' sin saltar;
			
			FinSi

		FinPara
		Escribir '';
	FinPara
	
	

	Escribir '';
	
	
FinAlgoritmo
