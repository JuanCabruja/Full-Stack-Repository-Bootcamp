Algoritmo Ejercicio_55
	definir matriz, tamaño_columnas, tamaño_filas,filas, columnas, i Como Entero;
	tamaño_filas = 4;
	tamaño_columnas = 5; 
	dimension matriz[tamaño_filas, tamaño_columnas]; //en Pseint los arrays de 2 dimensiones se escriben así en otros lenguajes a veces es matriz[indice][indice2]
	
	
	para filas = 0 hasta tamaño_filas-1 con paso 1;
		para columnas = 0 hasta tamaño_columnas-1 con paso 1 Hacer
			matriz[filas, columnas] = Aleatorio(1, 100);
			escribir matriz[filas, columnas],' ', Sin Saltar;
		FinPara
		escribir '';
	FinPara
	
FinAlgoritmo
