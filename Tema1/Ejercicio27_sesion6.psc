Algoritmo Ejercicio27
	definir N, Multiplicacion, contador Como Entero;
	Escribir 'Escriba un n�mero para mostrar su tabla de multiplicar.';
	Leer N;
	
	//asignamos valor a N con el Leer y multiplicacion es el'n�mero que ir� subiendo con los conteos.
	Para contador = 1 hasta 10 con paso 1 hacer
		para Multiplicacion = 1 Hasta 10 con paso 1 hacer
			Escribir N ' * ' Multiplicacion ' = ', N*Multiplicacion;
		FinPara
		
	FinPara
FinAlgoritmo
