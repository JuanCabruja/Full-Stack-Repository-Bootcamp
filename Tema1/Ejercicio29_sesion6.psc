Algoritmo Ejercicio29
	Definir Tiempo, contador como entero;
	
	Escribir 'Introduce el tiempo de espera.';
	Leer contador;
	Para tiempo = 0 hasta contador con paso 1 Hacer
		Escribir contador-tiempo;
		Esperar 1 Segundos;
		si tiempo+1 = contador  Entonces
			Escribir '��Ring!!';
			Escribir 'En 4 segundos se borrar� esto y volver� a poder introducir un n�mer';
		FinSi
	
	FinPara
	
	
	
	
FinAlgoritmo
