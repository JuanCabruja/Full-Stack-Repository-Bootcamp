Algoritmo sin_titulo
	Definir N, Cubo, contador, value Como Entero;
	contador = 0;
	
	para N = 1 hasta 10 con paso 1 hacer
		Escribir 'Introduce un n�mero ', N;
		Leer value;
		cubo = value*value*value;
		Escribir 'El cubo de ',value,' es ', cubo,'.';
		contador = contador+1;
		
		
	FinPara
	
	Escribir 'El n�mero total de operaciones realizadas es ', contador,'.';
FinAlgoritmo
