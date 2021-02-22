Algoritmo Ejercicio33
	Definir my_array, indice, size, ingresado Como Entero;
	size=10;
	Dimension my_array[size];
	
	para indice = 0 hasta size-1 Hacer
		Escribir 'Por favor, ingresa un número para asignar al Indice ', indice,'.';
		Leer ingresado;
		my_array[indice] = ingresado;
		
	FinPara
	
	para indice = 0 hasta size-1 Hacer
		escribir 'El valor asignado a Indice ', indice, ' es: ', my_array[indice],'.';
	FinPara
	
	
FinAlgoritmo
