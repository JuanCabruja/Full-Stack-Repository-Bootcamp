Algoritmo Ejercicio19
	Definir N, contador, suma Como Entero;
	Escribir 'Ingresa por favor una secuencia de n�meros, de 1 en 1 que termine en -1,'
	contador = 0
	
	mientras N > -1 Hacer
		Leer N;
		suma = N + suma;
		contador = contador +1;
	FinMientras
	
	Escribir 'La media aritm�tica es ', suma/contador;

FinAlgoritmo
