Algoritmo Ejercicio35
	definir my_array, random, lecturatamano, indice, suma Como Entero;
	suma = 0;
	
	Escribir 'Introduce la cantidad de indices que quieres que tenga nuestro array.';
	Leer lecturatamano;
	Dimension my_array[lecturatamano];
	
	escribir '';
	
	//rellena los array del tama�o introducido por el usuario con n�meros aleatorios.
	Para indice = 0 hasta lecturatamano-1 hacer 
		random=Aleatorio(0, 9);
		my_array[indice] = random;
	FinPara
	
	//este bucle los imprime y guarda el valor suma, todo esto podr�a hacerse en un solo bucle pero por pr�ctica lo hacemos separado.
	Para indice = 0 hasta lecturatamano-1 hacer 
		suma = my_array[indice] + suma;
		Escribir 'El valor de el Indice ', indice, ' es ', my_array[indice],'.';
	FinPara
	
	escribir '';
	
	Escribir 'La suma de todos los n�meros del array es: ', suma,'.';
FinAlgoritmo
