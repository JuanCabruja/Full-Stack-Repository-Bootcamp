Algoritmo sin_titulo
	definir my_array, my_array2, size, indice Como Entero;
	size = 10; 
	
	dimension my_array[size], my_array2[size];
	
	para indice = 0 hasta size-1 hacer 
		my_array[indice] = Aleatorio(1, 20);
		my_array2[indice] = Aleatorio(1, 20); 
		
		Escribir ' Indice ', indice,': ', my_array[indice], ' X ', my_array2[indice],' = ', Sin Saltar;
		Escribir my_array[indice]*my_array2[indice];
	FinPara
	
FinAlgoritmo
