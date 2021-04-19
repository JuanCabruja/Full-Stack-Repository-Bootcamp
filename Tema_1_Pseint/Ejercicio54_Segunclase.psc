Funcion resultado = es_primo( n )
	definir i Como Entero;
	definir resultado como logico;
	
	resultado = Verdadero;
	
	para i = 2 hasta N-1 Hacer
		si n mod i == 0 Entonces
			resultado = falso;
		FinSi
	FinPara
FinFuncion

Algoritmo Ejercicio54_segunclase
	//Diseñar un algoritmo que lea el numero N e imprima y
	//cuente todos los numeros primos menores que N.
	
	definir n, i, contador_primos Como Entero;;
	Escribir 'Introduce el número N';
	Leer n; 
	contador_primos=0;
	
	para i = 2 hasta n con paso 1 hacer
		si es_primo(i) Entonces
			escribir i, ' es primo.';
			contador_primos = contador_primos+1;
		FinSi
	FinPara
	
	
FinAlgoritmo

