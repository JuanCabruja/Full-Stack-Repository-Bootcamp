Algoritmo sin_titulo
	Definir N, contador, suma, maximo, minimo Como Entero;
	Definir  media como real;
	
	Escribir 'Introduzca una serie de n�meros naturales para hacer una ecuaci�n';
	Leer N;
	
	Si N == 0 Entonces
		Escribir 'numero no permitido, por favor ingrese otro n�mero';
		Leer N;
	FinSi

	suma = 0;
	contador = 0;
	maximo = N;
	minimo = N;
	
	
	Mientras N <> 0 hacer 
		suma = N + suma;
		leer N; 
		contador = contador +1;
		si maximo <= N Entonces
			maximo = N;
		FinSi
		 si minimo >= N Y N > 0 Entonces
			minimo = N;
		FinSi
	FinMientras
	
	media = suma/contador;
	
	Escribir 'La media es ' media, ', el m�ximo es ' maximo,' y m�nimo es ', minimo,'.';
FinAlgoritmo
