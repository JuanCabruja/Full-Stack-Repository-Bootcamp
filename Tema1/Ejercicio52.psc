Algoritmo sin_titulo
	definir array, N, index, contador, size como entero;
	
	contador = 0;
	
	Escribir '�Cuantos �ndices quiere crear en el array?';
	Leer size;
	Dimension array[size];
	para index= 0 hasta size-1 Hacer
		array[index] = Aleatorio(1,15);
		escribir array[index],' ', sin saltar;
	FinPara
	
	Escribir '�Que n�mero quiere comprobar si se ha generado?';
	Leer N; 
	
	para index = 0 hasta size-1 Hacer
		si N == array[index]
			Escribir 'El n�mero ha aparecido en el indice', index,'.';
			contador = contador+1;
		FinSi
	FinPara
	
	Escribir 'El n�mero ', n, ' ha aparecido ', contador, ' veces.';
FinAlgoritmo
