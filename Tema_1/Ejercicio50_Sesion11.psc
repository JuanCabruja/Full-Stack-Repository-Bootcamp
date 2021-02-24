Algoritmo ejercicio50
	
	definir array, N, X, i, cantidad_letras, contador_letras Como Entero;
	definir array_caracteres, lectura Como Caracter;
	
	Escribir 'Escribe una palabra'; 
	Leer lectura;
	
	N = Longitud(lectura);
	Escribir SUBCADENA(lectura, 0, 0);
	
	dimension array[N], array_caracteres[N];
	contador_letras=1;
	
	para i = 0 hasta N-1 con paso 1 hacer 
		array_caracteres[i] = Subcadena(Lectura, contador_letras, contador_letras);
		escribir array_caracteres[i];
		para x = 0 hasta i Hacer
			si array_caracteres[x] = array_caracteres[i] Entonces
				
			FinSi
		FinPara
		contador_letras = contador_letras+1;
	FinPara
	
	
FinAlgoritmo

