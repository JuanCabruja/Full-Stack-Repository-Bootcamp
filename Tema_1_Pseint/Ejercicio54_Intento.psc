Algoritmo sin_titulo
	definir array, n, i, x, primo Como Entero;
	definir valido como l�gico;
	
	Escribir 'introduce un n�mero.';
	Leer n; 
	valido = Verdadero;
	;
	
	dimension array[n];
	
	Mientras n <= 1 Hacer
		escribir 'Los n�meros 1 o menores que 1 no se consideran primos. Por favor, ingrese otro n�mero:';
		leer n;
	FinMientras
	
	para i = 0 hasta N-1 ; 
		array[i] = i+1; 
	FinPara
	
	primo = 0;
	x = 1;
	
	para i = 1 hasta N-1 con paso 1 hacer; 
		valido = verdadero;
		para x = 1 hasta i-2 con paso 1 hacer; 
			si i mod array[x] = 0 Entonces
				valido = Falso;
			FinSi
			si valido Entonces
				primo = i;
			FinSi
			
		FinPara
		si valido Entonces
			Escribir primo;
		FinSi
	FinPara

	
FinAlgoritmo
