Funcion resultado = Promedio(array, tama�o)
	definir i, suma Como Entero;
	definir media Como Entero;
	suma = 0;

	
	para i = 0 hasta tama�o-1 Hacer
		suma = array[i] + suma;

	FinPara
	
	media = suma/tama�o;
FinFuncion

Algoritmo Ejercicio53
	definir  NumeroIngresados, i, lista, size Como Entero;
	Escribir 'Ingrese el tama�o que desea para el array: ';
	leer size;
	dimension lista[size];
	para i = 0 hasta size-1 Hacer
		Escribir 'Ingrese un valor para asignar al �ndice ', i, ' del array: ';
		Leer NumeroIngresados;
		lista[i] = NumeroIngresados;
	FinPara
	
	Escribir 'El promedio de los n�meros ingresados es: ', Promedio(lista, size);
	escribir promedio(lista, size-1);
	escribir promedio(lista, size-2);

	
FinAlgoritmo
