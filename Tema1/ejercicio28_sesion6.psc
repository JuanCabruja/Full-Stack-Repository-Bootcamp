Algoritmo sin_titulo
	Definir N, contador, factorial como real;
	Escribir 'Introduce el n�mero para hacer su operaci�n factorial';
	Leer N;
	
	factorial = 1;
	
	para contador = 1 hasta N hacer
		factorial = factorial * contador;
		
		
	FinPara
	
		Escribir 'El factorial de N ', factorial;
		
		//si cada bucle es N-1 �que m�s nos va a quedar?
FinAlgoritmo
