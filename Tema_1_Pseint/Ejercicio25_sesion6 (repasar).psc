Algoritmo Ejercicio25
	definir columnas, columnas_dos, filas, minimo, maximo como entero;
	definir tama�o_lado como entero;
	
	Escribir 'Ingresa las dimensiones que quieres para el cuadrado';
	Leer tama�o_lado;
	
	Escribir '';


	para filas = 1 hasta tama�o_lado Hacer
		para columnas = 1 hasta tama�o_lado Hacer
			si filas == 1 o filas == tama�o_lado o columnas==1 o columnas== tama�o_lado Entonces
				escribir '* ', Sin Saltar;
			SiNo
				escribir '  ' sin saltar;
			
			FinSi

		FinPara
		Escribir '';
	FinPara
	
	

	Escribir '';
	
	
FinAlgoritmo
