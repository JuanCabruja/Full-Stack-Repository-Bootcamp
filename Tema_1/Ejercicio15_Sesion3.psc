Algoritmo While
	Definir num Como Entero;
	Definir resultado Como Caracter;
	Escribir 'Por favor ingresa un número.';
	Leer num;
	Mientras   num == 0 Hacer
		Escribir 'Este numero es nulo, por favor introduzca otro';
		Leer num;
	FinMientras

		Si Num Mod 2 == 1 Entonces
			Escribir 'El Numero es Impar.';
		Sino 
			Si Num Mod 2 == 0 Entonces
				Escribir 'El Numero es par.';
			SiNo
				Si Num Mod 2 == -1 Entonces
					Escribir 'El Número es Impar.';					
				
				FinSi
			FinSi
		FinSi


FinAlgoritmo
