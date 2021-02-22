Algoritmo Ejercicio30
	definir columnas, filas, numerocolumnas, cantidad_de_impresiones, c como entero;
	definir tipo_columnas Como Caracter;
	definir tamaño_lado como entero;
	
	Escribir 'Ingresa las dimensiones que quieres para el cuadrado';
	Leer tamaño_lado;
	
	Escribir '';
	
tipo_columnas= '*';
cantidad_de_impresiones = 1

//Ejemplo 1 con tres PARA

	para filas = 1 hasta tamaño_lado Hacer
		para columnas = 1 hasta tamaño_lado Hacer
			para numerocolumnas = 1 hasta filas Hacer
			si numerocolumnas = columnas Entonces
				escribir tipo_columnas, Sin Saltar;
			SiNo
				escribir '' sin saltar;
			
			
			FinSi
		FinPara
		
		FinPara
		Escribir '';
	FinPara
	

	Escribir '';
	
	//Ejercicio A
	
	Escribir 'Ejercicio A: '
	
	para filas = 1 hasta tamaño_lado Hacer
		para columnas = 1 hasta filas 
			escribir columnas, Sin Saltar;
			
		FinPara
		Escribir '';
	FinPara
	
	//Ejercicio B
	
	Escribir 'Ejercicio B: '
	para filas = 1 hasta tamaño_lado Hacer
		para columnas = 1 hasta filas 
			escribir filas, Sin Saltar;
			
		FinPara
		Escribir '';
	FinPara
	
	//Ejercicio C
	
	Escribir 'Ejercicio C: '
	
	cantidad_de_impresiones = 1;
	
	para filas = 1 hasta tamaño_lado Hacer
		para columnas = 1 hasta filas Hacer
			escribir cantidad_de_impresiones,' ' Sin Saltar;
			cantidad_de_impresiones = cantidad_de_impresiones+1;
		FinPara
		Escribir '';
	FinPara
	
	
	
	
	
FinAlgoritmo
