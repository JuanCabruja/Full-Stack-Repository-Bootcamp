Algoritmo sin_titulo
	definir ARRAY1, ARRAY2, indice, indice2, entrada, size Como Entero;;
	size = 5; 
	dimension ARRAY1[size], ARRAY2[size];
	
	para indice = 0 hasta size-1 Hacer
		ARRAY1[indice] = indice+1;
		Escribir ARRAY1[indice], ' ', Sin Saltar;
			
	FinPara
	
	Escribir ' ';
	
	//Inicializar array segundo
	para indice = 0 hasta size-1 hacer 
		ARRAY2[indice] = ARRAY1[size-1-indice];
		escribir ARRAY2[indice], ' ', Sin Saltar;
	FinPara
	
	//Al parecer esto da, pero no es la forma en la que deberíamos conseguirlo.
	
	Escribir '';
	
	//¿Y por qué este último no nos sirve como ejemplo? ah, creo que lo veo, porque el ARRAY 
	//2 que estamos imprimiendo sale primero, pero no porque sea el 1
	//sino que se imprime primero el 5.
	para indice = size-1 hasta 0 hacer 
		ARRAY2[indice] = ARRAY1[indice];
		escribir ARRAY2[indice], ' ', Sin Saltar;
	FinPara
	
	
FinAlgoritmo
