Algoritmo sin_titulo
	definir filas, columnas, matriz, tama�o Como Entero;
	definir es_simetrica como l�gica;
	tama�o = 3; 
	dimension matriz[tama�o, tama�o];
	es_simetrica = Verdadero;
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	para filas = 0 hasta tama�o-1 con paso 1;
		para columnas = 0 hasta tama�o-1 con paso 1 Hacer
			escribir matriz[filas, columnas], Sin Saltar;
		FinPara
		escribir '';
	FinPara
	
	para filas = 0 hasta tama�o-1 con paso 1;
		para columnas = 0 hasta tama�o-1 con paso 1 Hacer
			si matriz[filas,columnas] <> matriz[columnas,filas]
				es_simetrica=falso;
			FinSi
		FinPara
		escribir '';
	FinPara
	
	si es_simetrica Entonces
		Escribir 'La matriz es sim�trica.';
	SiNo
		Escribir 'La matriz no es sim�trica.';
	FinSi
FinAlgoritmo
