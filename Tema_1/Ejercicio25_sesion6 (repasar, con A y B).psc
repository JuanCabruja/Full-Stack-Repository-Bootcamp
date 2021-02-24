Algoritmo Ejercicio25
	definir columnas, columnas_dos, filas, minimo, maximo como entero;
	definir tamaño_ladoA, tamaño_ladoB como entero;
	
	Escribir 'Ingresa las dimensiones que quieres para el cuadrado';
	Leer tamaño_ladoA, tamaño_ladoB;
	
	Escribir '';
	//filas define porque cuenta con un definir '' abajo, lo cual hace que se genere una nueva línea
	//

	para filas = 1 hasta tamaño_ladoA Hacer
		//encargado de imprimir filas
		para columnas = 1 hasta tamaño_ladoB Hacer
			//encargado de imprimir columnas
			si filas == 1 o filas == tamaño_ladoA o columnas==1 o columnas== tamaño_ladoB Entonces
				escribir '*', Sin Saltar;
			SiNo
				escribir ' ' sin saltar;
			
			FinSi

		FinPara
		Escribir '';
	FinPara
	
	

	Escribir '';
	
	
FinAlgoritmo
