Algoritmo sin_titulo
	Definir N, Por2, Por3, Max, ContadorMultiplo2, ContadorMultiplo3 como entero;
	Max = 1000;
	N= 1;
	Por2 = 2;
	Por3 = 1;
	ContadorMultiplo2 = 0;
	ContadorMultiplo3 = 0;
	// Tal y como he escrito este código sucede lo siguiente, no me imprime todos los múltiplos
	//Porque asignará el múltiplo al que haga la primera validación

	Mientras N <= Max Hacer
		N = N+1;
		Si N mod Por2 = 0 Entonces//He realido el cambio de un Si y SiNo a dos Si para que se generen ambas respuestas.
			Escribir N;
			ContadorMultiplo2 = ContadorMultiplo2 +1;
		FinSi
	
			si N mod Por3 = 0 Entonces
				Escribir N;
				ContadorMultiplo3 = ContadorMultiplo3 +1;
			FinSi
		
	FinMientras
	
	Escribir 'Numero total de Múltiplos de 2 es ', ContadorMultiplo2,'.';
	Escribir 'Numero total de Múltiplos de 3 es ', ContadorMultiplo3,'.';
	
FinAlgoritmo
