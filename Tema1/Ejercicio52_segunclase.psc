Algoritmo sin_titulo
	definir array, N, index, contador, size, i como entero;
	
	contador = 0;
	i = 0;
	
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
		si contador == 1 Entonces
			i = contador;
		FinSi
	FinPara
	
	si i = 0 Entonces
		Escribir 'El número no ha aparecido en ningún índice.';
	SiNo
		Escribir 'La primera ocurrencia del número: ', n, ' fue en el índice: ', i, '.';
	FinSi
	
FinAlgoritmo
