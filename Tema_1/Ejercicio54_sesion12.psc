Algoritmo sin_titulo
	definir array, n, i, x, primo Como Entero;
	definir valido como l�gico;
	
	Escribir 'introduce un n�mero.';
	Leer n; 
	valido = Verdadero;
	;
	
	
	Mientras n <= 1 Hacer
		escribir 'Los n�meros 1 o menores que 1 no se consideran primos. Por favor, ingrese otro n�mero:';
		leer n;
	FinMientras
	
	dimension array[n];
	
	para i = 0 hasta N-1 ; 
		array[i] = i+1; 
	FinPara
	
	
	primo = 0;
	x = 1;
	
	para i = 1 hasta N-1 con paso 1 hacer; 
		valido = verdadero;
		para x = 2 hasta i-1 con paso 1 hacer; 
			si i mod x = 0 Entonces
				valido = Falso;
			FinSi
			
		FinPara
		si valido Entonces
			Escribir i;
		FinSi
	FinPara

	
FinAlgoritmo
