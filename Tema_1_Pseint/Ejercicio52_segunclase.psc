Algoritmo sin_titulo
	definir array, N, index, contador, size, i como entero;
	
	contador = 0;
	i = 0;
	
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
		si contador == 1 Entonces
			i = contador;
		FinSi
	FinPara
	
	si i = 0 Entonces
		Escribir 'El n�mero no ha aparecido en ning�n �ndice.';
	SiNo
		Escribir 'La primera ocurrencia del n�mero: ', n, ' fue en el �ndice: ', i, '.';
	FinSi
	
FinAlgoritmo
