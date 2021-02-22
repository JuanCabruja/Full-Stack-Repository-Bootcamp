Algoritmo sin_titulo
	
	
	//Almacenar una lista de nombres en un array y luego
	//ordenarlos alfabeticamente. Para la entrada de datos se
	// utiliza una estructura mientras, sin saber a priori la
	// cantidad de datos que se ingresaran.
	//Pista: los datos alfanumericos (strings) también se
	//pueden comparar con los operadores < y >
	
	definir lista_nombres, aux, name, names Como Caracter;
	definir lenght, index, index_dos, i, j, contador Como Entero;
	
	lenght = 100; 
	
	dimension lista_nombres[lenght]; 
	
	contador = 0;
	
	Escribir 'Introduce un nombre';
	Leer name;
	
	si name <> ' ' Entonces
		lista_nombres[contador] = name;
		contador = contador +1;
	FinSi
	
	
	mientras name <> ' '
		Escribir 'Introduce un nombre';
		leer name;
		lista_nombres[contador]= name;
		contador = contador+1;
	FinMientras
	
	//Odena el array con el método de la burbuja
	
	j = 0;
	para i = 0 hasta contador - 2 hacer //repite el ordenamiento
		para j = 0 hasta contador - 2 hacer //ordena un único nombre
			si lista_nombres[j]>lista_nombres[j+1]
				aux = lista_nombres[j];
				lista_nombres[j]=lista_nombres[j+1];
				lista_nombres[j+1] = aux;
			FinSi
		FinPara
	FinPara
	
	
	para i = 0 hasta contador -1 Hacer
		escribir lista_nombres[i], Sin Saltar;
	FinPara
	
	escribir '';
FinAlgoritmo
