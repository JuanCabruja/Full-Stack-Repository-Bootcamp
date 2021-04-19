Algoritmo Array
	
	Definir my_array, size, indice, my_array2 Como Entero;
	size = 5;
	Dimension my_array[size];
	//Los array empiezan en 0, por norma general, por tanto es necesario recordar que el número máximo del Array
	//siempre será su tamaño máximo-1
	
	my_array[0] = 10;
	my_array[1] = 20;
	my_array[2] = 30;
	my_array[3] = 40;
	my_array[4] = 50;
	
	Escribir my_array[0], ' ', my_array[1], ' ', my_array[2], ' ', my_array[3], ' ', my_array[4];
	
	//Imprime el array completo.
	Para indice <-0 Hasta size-1 Hacer
		escribir my_array[indice], ' ' Sin Saltar;
	Fin Para
	
	escribir ' ';
	escribir ' ';
	
	//Inicializa array con todos los elementos a 5. 
	
	dimension my_array2[size];
	Para indice <-0 Hasta size-1 Hacer
		my_array2[indice] = indice *2;
		escribir 'Indice', indice, '; ', my_array2[indice];
	Fin Para
	
	escribir ' ';
	escribir ' ';
	
	Para indice <-0 Hasta size-1 Hacer
		escribir my_array2[indice], ' ', Sin Saltar;
	Fin Para
	
	escribir ' ';
	
FinAlgoritmo
