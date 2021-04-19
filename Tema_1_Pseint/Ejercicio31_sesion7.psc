Algoritmo sin_titulo
	
	definir filas, tamaño_lado, columnas Como Entero;
	
	Escribir 'Escribe un número'
	Leer tamaño_lado;
	para filas = tamaño_lado hasta 1 Hacer
		para columnas = tamaño_lado hasta 1
			si filas < columnas entonces 
				escribir ' ' Sin Saltar;
			sino 
				escribir '*' sin saltar;
				
				
			FinSi
		
			
			
		FinPara
		Escribir '';
	FinPara
FinAlgoritmo
