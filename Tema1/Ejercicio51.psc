
Algoritmo sin_titulo
	definir N, array, i, j Como Entero;
	definir valido como l�gico;
	
	Escribir 'introduce un n�mero.';
	Leer n; 
	valido = Verdadero;
	
	Mientras n <= 1 Hacer
		escribir 'Los n�meros 1 o menores que 1 no se consideran primos. Por favor, ingrese otro n�mero:';
		leer n;
	FinMientras
	
	dimension array[n];
	
	para i = 0 hasta N-1 ; 
		array[i] = i+1; 
		escribir array[i];
	FinPara
	
	para i = 1 hasta N-2 con paso 1 hacer; 
		escribir N,'/', array[i], '=',n/array[i];
		si n mod array[i] = 0 Entonces
			valido = Falso;
		FinSi
		
	FinPara
	
	si valido Entonces
		escribir 'El n�mero ',n,' es primo.';
	SiNo
		escribir 'El n�mero ', n,' no es primo.';
	FinSi
	
FinAlgoritmo
