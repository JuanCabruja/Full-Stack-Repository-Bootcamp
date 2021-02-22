Algoritmo ejercicio41
	definir ARRAY1, INPUT, PLUS, SUMATOTAL, PROMEDIOTOTAL, NEG, index Como Entero;
	
	Escribir 'Ingrese el número de Arrays que quiere calcular: ';
	leer INPUT;
	plus = 0;
	PROMEDIOTOTAL= 0;
	SUMATOTAL = 0;
	
	dimension array1[INPUT];
	
	// Apartado A
	para index=0 hasta input-1 Hacer
		array1[index] = Aleatorio(-50, 50);
		si array1[index]>0 Entonces
			PLUS = plus + 1;
			SUMATOTAL = array1[index] + SUMATOTAL;
		FinSi
		PROMEDIOTOTAL = array1[index] + PROMEDIOTOTAL;
		Escribir 'El array ', index,' es ', array1[index],'.';
	FinPara
	
	escribir '';
	Escribir plus, ' números son mayores que 0. ';
	Escribir 'El promedio de los números positivos es: ',SUMATOTAL/plus;
	escribir 'El promedio del total de arrays es: ', PROMEDIOTOTAL/input;
	
	
	
FinAlgoritmo
