Algoritmo ejercicio_58
	Definir filas, columnas, p�ginas, contador, tama�o_p�ginas, array Como Entero;
	definir tama�o_filas, tama�o_columnas Como Entero;;
	

	tama�o_p�ginas = 3;
	tama�o_filas = 4;
	tama�o_columnas = 5;
	contador = 0;
	dimension array[tama�o_p�ginas, tama�o_filas, tama�o_columnas];
	
	para p�ginas = 0 hasta tama�o_p�ginas-1 Hacer
		Escribir 'P�gina: ', p�ginas;
		para filas = 0 hasta tama�o_filas-1 Hacer
			Escribir 'Fila ', filas,': ' Sin Saltar;
			para columnas = 0 hasta tama�o_columnas-1
				array[p�ginas, filas, columnas] = contador;
				si contador<10 Entonces
					escribir '0',array[p�ginas, filas, columnas], ' ', Sin Saltar;
				SiNo
					escribir array[p�ginas, filas, columnas], ' ', Sin Saltar;
				FinSi
			
				contador = contador+1;
				
			FinPara
			escribir '';
		FinPara
		escribir '';
	FinPara
FinAlgoritmo
