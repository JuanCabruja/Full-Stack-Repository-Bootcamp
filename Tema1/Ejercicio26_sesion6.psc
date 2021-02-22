Algoritmo sin_titulo
	Definir N, Cubo, contador, value Como Entero;
	contador = 0;
	
	para N = 1 hasta 10 con paso 1 hacer
		Escribir 'Introduce un número ', N;
		Leer value;
		cubo = value*value*value;
		Escribir 'El cubo de ',value,' es ', cubo,'.';
		contador = contador+1;
		
		
	FinPara
	
	Escribir 'El número total de operaciones realizadas es ', contador,'.';
FinAlgoritmo
