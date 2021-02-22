Algoritmo sin_titulo
	Definir contador, contador_uno, contador_dos como entero;
	
	//Bucle que imprima del 100 al 0 de 2 en 2
	Para contador = 1 Hasta 10 con paso 1 Hacer
		escribir '*', sin saltar;
	FinPara
	Escribir '';
	
	Para contador_uno = 1 Hasta 5 con Paso 1 Hacer
		escribir 'Iteración ', contador_uno, ' del bucle externo.';
		Para contador_dos = 1 hasta 2 con paso 1 Hacer
			escribir 'contador_uno: ', contador_uno '; contador_dos: ', contador_dos;
		FinPara
		escribir '';
	FinPara
	

FinAlgoritmo
