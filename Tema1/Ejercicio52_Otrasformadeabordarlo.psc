Algoritmo sin_titulo
	//ejemplo de coo terminar un PARA si el array encuentra la validaci�n �nica que buscamos.
	definir i, tama�o, n, array, index Como Entero;
	tama�o = 10;
	dimension array[tama�o];
	
	
	Escribir 'Introduce un n�mero para buscarlo: ';
	Leer n;
	
	
	para index= 0 hasta tama�o-1 Hacer
		array[index] = Aleatorio(1,15);
		escribir array[index],' ', sin saltar;
	FinPara
	
	escribir '';
	
	para i = 0 hasta tama�o-1 Hacer
		si N == array[i] Entonces
			indice = 1;
			i = tama�o -1;
		FinSi
	FinPara
	
	
	//Otra forma
	i=0;
	
	
	
	
	mientras i<tama�o Y array[i] <> N Hacer
		i = i+1;
	FinMientras
	
	Si i < tama�o Entonces
		escribir 'La primera coincidencia de ',N,' es en el �ndice ',i;
	SiNo
		Escribir N, 'No est� presente en el array';
	FinSi
FinAlgoritmo
