Algoritmo Ejercicio25
	definir columnas, columnas_dos, filas, minimo, maximo como entero;
	definir tama�o_ladoA, tama�o_ladoB como entero;
	
	Escribir 'Ingresa las dimensiones que quieres para el cuadrado';
	Leer tama�o_ladoA, tama�o_ladoB;
	
	Escribir '';
	//filas define porque cuenta con un definir '' abajo, lo cual hace que se genere una nueva l�nea
	//

	para filas = 1 hasta tama�o_ladoA Hacer
		//encargado de imprimir filas
		para columnas = 1 hasta tama�o_ladoB Hacer
			//encargado de imprimir columnas
			si filas == 1 o filas == tama�o_ladoA o columnas==1 o columnas== tama�o_ladoB Entonces
				escribir '*', Sin Saltar;
			SiNo
				escribir ' ' sin saltar;
			
			FinSi

		FinPara
		Escribir '';
	FinPara
	
	

	Escribir '';
	
	
FinAlgoritmo
