Algoritmo sin_titulo
	Definir N, contador, suma, maximo, minimo Como Entero;
	Definir  media como real;
	
	Escribir 'Introduzca una serie de n�meros naturales para hacer una ecuaci�n';	
	Leer N;
	suma = 0;
	contador = 0;
	maximo = N;
	minimo = N;
	
	
	Mientras N <> 0 hacer 
		Leer N;
		suma = N + suma;
		contador = contador +1;
		si maximo <= N Entonces
			maximo = N;
		FinSi
		 si minimo >= N Y N <> 0 Entonces
			minimo = N;
		FinSi
	
	FinMientras
	
	Si N == 0 Entonces
		Escribir 'Numero no aceptado';
	FinSi
	
	Si N <> 0 Entonces
		media = suma/contador;
		Escribir 'La media es ' media, ', el m�ximo es ' maximo,' y m�nimo es ', minimo,'.';
	
FinSi

FinAlgoritmo
