Funcion resultado = Promedio(array, tamaño)
	definir i, suma Como Entero;
	definir media Como Entero;
	suma = 0;

	
	para i = 0 hasta tamaño-1 Hacer
		suma = array[i] + suma;

	FinPara
	
	media = suma/tamaño;
FinFuncion

Algoritmo Ejercicio53
	definir  NumeroIngresados, i, lista, size Como Entero;
	Escribir 'Ingrese el tamaño que desea para el array: ';
	leer size;
	dimension lista[size];
	para i = 0 hasta size-1 Hacer
		Escribir 'Ingrese un valor para asignar al índice ', i, ' del array: ';
		Leer NumeroIngresados;
		lista[i] = NumeroIngresados;
	FinPara
	
	Escribir 'El promedio de los números ingresados es: ', Promedio(lista, size);
	escribir promedio(lista, size-1);
	escribir promedio(lista, size-2);

	
FinAlgoritmo
