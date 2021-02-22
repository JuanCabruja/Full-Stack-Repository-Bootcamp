Algoritmo sin_titulo
	definir array, n, i, x, primo Como Entero;
	definir valido como lógico;
	
	Escribir 'introduce un número.';
	Leer n; 
	valido = Verdadero;
	;
	
	
	Mientras n <= 1 Hacer
		escribir 'Los números 1 o menores que 1 no se consideran primos. Por favor, ingrese otro número:';
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
