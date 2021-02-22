Algoritmo sin_titulo
	definir array, N, index, contador, size como entero;
	
	contador = 0;
	
	Escribir '¿Cuantos índices quiere crear en el array?';
	Leer size;
	Dimension array[size];
	para index= 0 hasta size-1 Hacer
		array[index] = Aleatorio(1,15);
		escribir array[index],' ', sin saltar;
	FinPara
	
	Escribir '¿Que número quiere comprobar si se ha generado?';
	Leer N; 
	
	para index = 0 hasta size-1 Hacer
		si N == array[index]
			Escribir 'El número ha aparecido en el indice', index,'.';
			contador = contador+1;
		FinSi
	FinPara
	
	Escribir 'El número ', n, ' ha aparecido ', contador, ' veces.';
FinAlgoritmo
