Algoritmo Ejercicio34
	definir lectura, numaleatorio Como entero;
	
	Escribir 'Introduce un n�mero entre 1 y 10, intentalo hasta acertar.';
	numaleatorio = Aleatorio(1, 100);
	
	Repetir
		Leer lectura; 
		si lectura=numaleatorio entonces 
		escribir '�Correcto!';
	Sino 
		escribir 'Has fallado, vuelve a intentarlo';
		si lectura>numaleatorio Entonces
			Escribir 'Pero casi lo tienes, el n�mero es m�s bajo';
		FinSi
		si lectura<numaleatorio entonces
			escribir 'Pero casi lo tienes, el n�mero es m�s m�s alto.';
		FinSi
	FinSi
Hasta Que lectura = numaleatorio;
	
FinAlgoritmo
