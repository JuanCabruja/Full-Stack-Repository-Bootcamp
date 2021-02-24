Algoritmo While
	Definir num Como Entero;
	Definir resultado Como Caracter;
	Escribir 'Por favor ingresa un número.';
	Leer num;
	Si  num == 0 Entonces
		Escribir 'El Numero es Nulo';
	SiNo
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
	FinSi

FinAlgoritmo
