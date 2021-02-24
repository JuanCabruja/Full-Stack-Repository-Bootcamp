Algoritmo sin_titulo
	definir letra, frase Como Caracter;
	definir indice, contador como entero;
	
	contador = 0;
	
	Escribir 'Introduce una frase';
	leer frase;
	
	Escribir 'Introduce una letra';
	Leer letra;
	
	Para indice = 0 hasta Longitud(frase)-1 con paso 1 Hacer
		si subcadena(frase, indice, indice) == letra Entonces
			contador = contador+1;
		FinSi
	FinPara
	
	escribir 'La letra ', letra, ' aparece ', contador, ' veces.';
FinAlgoritmo
