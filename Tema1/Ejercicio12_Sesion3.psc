Algoritmo Ejercicio_12
	definir N, T Como Real;
	Escribir 'Calcularemos la temperatura teniendo en cuenta el número de sonidos emitidos por un grillo, ¿cuantos sonidos ha hecho el grillo?'; 
	Leer N;
	T = N/4+40;
	Si N <= 0 Entonces
		Escribir 'Ha abido un error en la lectura.'
	SiNo
		Escribir 'La temperatura es ', T,'º.'
	FinSi
	
FinAlgoritmo
