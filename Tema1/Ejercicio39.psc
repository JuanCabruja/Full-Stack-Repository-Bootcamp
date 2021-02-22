Algoritmo sin_titulo
	definir ARRAY1, ARRAY2, indice, size, input Como Entero;
	size = 10;
	dimension ARRAY1[size], ARRAY2[size];
	check = Verdadero;
	
	para indice = 0 hasta size-1 Hacer
		escribir 'Escribe el valor ', indice, ' del primer array';
		leer input;
		ARRAY1[indice] = input;
		escribir 'Escribe el valor ', indice, ' del segundo array';
		leer input;
		ARRAY2[indice] = input;
		
		si ARRAY1[indice] <> ARRAY2[indice] Entonces
			check = Falso;
		FinSi
	FinPara
	
	
	si check = Verdadero
		Escribir 'Los arrays son iguales.';
	SiNo
		escribir 'Los arrays son distintos.';
	FinSi
	
	
FinAlgoritmo
