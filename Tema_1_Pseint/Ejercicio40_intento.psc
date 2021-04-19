Algoritmo sin_titulo
	definir ARRAY1, ARRAY2, indice, size, input, check, n, valido Como Entero;
	definir iguales Como Logico;
	size = 20;
	dimension ARRAY1[size], ARRAY2[size];
	
	para indice = 0 hasta size-1 Hacer
		ARRAY1[indice]= Aleatorio(1, 20);
	FinPara
	
	para valido = 0 hasta size-1 Hacer
		Repetir
		iguales = falso;
		n = Aleatorio(1, 20);
		para indice = 0 hasta valido
			si ARRAY1[valido] == ARRAY1[indice] Entonces
				iguales = verdadero;
				ARRAY1[valido] = Aleatorio(1, 20);
				Escribir ARRAY1[valido];
			FinSi
		FinPara
	Mientras que iguales
	
	FinPara
	
	
	para valido = 0 hasta size-1 
		Escribir ARRAY1[valido];
	FinPara
	
FinAlgoritmo

