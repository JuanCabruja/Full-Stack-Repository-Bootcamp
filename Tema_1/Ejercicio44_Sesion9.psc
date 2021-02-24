Algoritmo Ejercicio44
	Definir Lectura1, Lectura, eleccion, Contador Como Entero;
	
	
	Escribir 'Por favor, introduce dos numeros para hacer ĺa ecuacion que escojas.';
	Leer Lectura1, Lectura;
	
	Escribir 'Ahora por favor escoje un número de los siguientes para decidir la operación que hacer:';
	
	Escribir 'Para Sumar, escoja 1.';
	Escribir 'Para Restar, escoja 2.';
	Escribir 'Para Multiplicar, escoja 3.';
	Escribir 'Para Dividir, escoja 4.';
	Escribir 'Para Salir del programa, escoja 5.';
	Leer eleccion;
	
	Segun eleccion Hacer
		1:
			Escribir 'el resultado es: ', Lectura1+Lectura,'.';
		2:
			Escribir 'el resultado es: ', Lectura1-Lectura,'.';
		3:
			Escribir 'el resultado es: ', Lectura1*Lectura,'.';
		4:
			Escribir 'el resultado es: ', Lectura1/Lectura,'.';
		5:
			Escribir 'Muchas gracias, cerrando sesión.';
	Fin Segun

FinAlgoritmo
