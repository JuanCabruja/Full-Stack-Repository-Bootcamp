Algoritmo sin_titulo
	//ejemplo de coo terminar un PARA si el array encuentra la validación única que buscamos.
	definir i, tamaño, n, array, index Como Entero;
	tamaño = 10;
	dimension array[tamaño];
	
	
	Escribir 'Introduce un número para buscarlo: ';
	Leer n;
	
	
	para index= 0 hasta tamaño-1 Hacer
		array[index] = Aleatorio(1,15);
		escribir array[index],' ', sin saltar;
	FinPara
	
	escribir '';
	
	para i = 0 hasta tamaño-1 Hacer
		si N == array[i] Entonces
			indice = 1;
			i = tamaño -1;
		FinSi
	FinPara
	
	
	//Otra forma
	i=0;
	
	
	
	
	mientras i<tamaño Y array[i] <> N Hacer
		i = i+1;
	FinMientras
	
	Si i < tamaño Entonces
		escribir 'La primera coincidencia de ',N,' es en el índice ',i;
	SiNo
		Escribir N, 'No está presente en el array';
	FinSi
FinAlgoritmo
