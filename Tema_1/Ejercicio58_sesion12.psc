Algoritmo ejercicio_58
	Definir filas, columnas, páginas, contador, tamaño_páginas, array Como Entero;
	definir tamaño_filas, tamaño_columnas Como Entero;;
	

	tamaño_páginas = 3;
	tamaño_filas = 4;
	tamaño_columnas = 5;
	contador = 0;
	dimension array[tamaño_páginas, tamaño_filas, tamaño_columnas];
	
	para páginas = 0 hasta tamaño_páginas-1 Hacer
		Escribir 'Página: ', páginas;
		para filas = 0 hasta tamaño_filas-1 Hacer
			Escribir 'Fila ', filas,': ' Sin Saltar;
			para columnas = 0 hasta tamaño_columnas-1
				array[páginas, filas, columnas] = contador;
				si contador<10 Entonces
					escribir '0',array[páginas, filas, columnas], ' ', Sin Saltar;
				SiNo
					escribir array[páginas, filas, columnas], ' ', Sin Saltar;
				FinSi
			
				contador = contador+1;
				
			FinPara
			escribir '';
		FinPara
		escribir '';
	FinPara
FinAlgoritmo
