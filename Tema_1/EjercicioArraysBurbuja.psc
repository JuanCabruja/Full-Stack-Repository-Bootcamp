Algoritmo sin_titulo
	//Proceso array_que_intercambia_numeros
		definir array, tamano, indice, aux, J, I como entero;
		tamano = 5;
		//dimensionar el array
		dimension array[tamano];
		
		//inicializar el array.
		array[0] = 3;
		array[1] = 9;
		array[2] = 8;
		array[3] = 1;
		array[4] = 4;
		
		//para verlo por consola
		para indice = 0 hasta tamano - 1 hacer
			escribir array[indice], ' ' sin saltar;
		FinPara
		escribir ' ';
		
		para i = 0 hasta tamano - 2 hacer
			// envia el numero mayor al final
			para j = 0  hasta tamano - 2 Hacer
				si array[j] < array[j + 1] entonces
					aux = array[j];
					array[j] = array[j + 1];
					array[j + 1] = aux;
				FinSi
				
				//para verlo por consola
				para indice = 0 hasta tamano - 1 hacer
					escribir array[indice], ' ' sin saltar;
				FinPara
				escribir ' ';
				
			finpara
		FinPara
		
		ESCRIBIR ' ';
FinAlgoritmo
