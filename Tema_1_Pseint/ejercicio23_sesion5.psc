Algoritmo Ejercicio23
	Definir dia, mes, a�o como entero;
	Definir Cmes como caracter;
	
	Escribir 'Introduce el d�a';
	Leer dia;
	Escribir 'introduce el mes';
	Leer mes;
	Escribir 'introduce el a�o';
	Leer a�o;
	
	si (dia > 0 Y dia <= 31) y (mes >0 Y mes <= 12) Y a�o > 0 Entonces
		escribir dia, ' de ', Sin Saltar;
		segun mes hacer
			1:
				escribir 'Enero' Sin Saltar;
			2:
				escribir 'Febrero' Sin saltar;
			3: 
				escribir 'Marzor' Sin Saltar;
			4:
				escribir 'Abril' Sin Saltar;
			5:
				escribir 'Mayo' sin saltar;
			6: 
				escribir 'Junio' Sin Saltar;
			7:
				escribir 'Julio' Sin Saltar;
			8:
				escribir 'Agosto' Sin saltar;
			9:
				escribir 'Septiembre' Sin Saltar;
			10:
				escribir 'octubre' Sin Saltar;
			11:
				escribir 'noviembre' sin saltar;
			12:
				escribir 'diciembre' sin saltar;
		FinSegun
		escribir ' del a�o ', a�o,'.';
	FinSi

	
FinAlgoritmo

