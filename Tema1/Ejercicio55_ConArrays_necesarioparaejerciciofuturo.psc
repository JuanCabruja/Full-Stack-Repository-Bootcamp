Algoritmo Ejercicio_55
	definir matriz, tama�o_columnas, tama�o_filas,filas, columnas, i Como Entero;
	tama�o_filas = 4;
	tama�o_columnas = 5; 
	dimension matriz[tama�o_filas, tama�o_columnas]; //en Pseint los arrays de 2 dimensiones se escriben as� en otros lenguajes a veces es matriz[indice][indice2]
	
	
	para filas = 0 hasta tama�o_filas-1 con paso 1;
		para columnas = 0 hasta tama�o_columnas-1 con paso 1 Hacer
			matriz[filas, columnas] = Aleatorio(1, 100);
			escribir matriz[filas, columnas],' ', Sin Saltar;
		FinPara
		escribir '';
	FinPara
	
FinAlgoritmo
