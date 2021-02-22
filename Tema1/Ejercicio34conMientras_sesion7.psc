
	Algoritmo Ejercicio34
		definir  lectura, numaleatorio Como entero;

		
		Escribir 'Introduce un número entre 1 y 10, intentalo hasta acertar.';
		numaleatorio=Aleatorio(1, 10);
		Leer lectura;
		si lectura = numaleatorio entonces
			escribir '¡correcto, has acertado!';
		SiNo
			escribir 'Oh, has fallado, vuelve a intentarlo';
			mientras lectura <> numaleatorio hacer
				
			Leer lectura; 
			si lectura=numaleatorio entonces 
				escribir '¡Correcto!';
			Sino 
				escribir 'Oh, Has fallado, vuelve a intentarlo';
			FinSi
		FinMientras
		
	
		
		FinSi
		
		
		
		
FinAlgoritmo
