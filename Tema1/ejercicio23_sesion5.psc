Algoritmo Ejercicio23
	Definir dia, mes, año como entero;
	Definir Cmes como caracter;
	
	Escribir 'Introduce el día';
	Leer dia;
	Escribir 'introduce el mes';
	Leer mes;
	Escribir 'introduce el año';
	Leer año;
	
	si (dia > 0 Y dia <= 31) y (mes >0 Y mes <= 12) Y año > 0 Entonces
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
		escribir ' del año ', año,'.';
	FinSi

	
FinAlgoritmo

