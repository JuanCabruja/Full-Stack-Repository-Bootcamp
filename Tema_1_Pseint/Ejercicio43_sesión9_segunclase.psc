
	Algoritmo Ejercicio43
		Definir horas, minutos, segs Como Entero;
		definir arranque como logico;
		definir c Como Caracter;
		
		//Puedo usar una variable C que se dispare en caso de que la variable sea menor que 10.
		c = '0';
		arranque = Verdadero;
		horas = 0;
		minutos = 0;
		segs = 0;
		
		mientras arranque
			Limpiar Pantalla;
			si horas<10 Entonces
				escribir c,  horas,':', Sin Saltar;
			SiNo
				Escribir horas,':', Sin Saltar;
			FinSi
			si minutos<10 Entonces
				escribir c, minutos,':', Sin Saltar;
			SiNo
				escribir minutos, ':', Sin Saltar;
			FinSi
			si segs<10 Entonces
				escribir c, segs sin saltar;
			SiNo
				escribir segs;
			FinSi
			
			Esperar 1 Segundos;;
			segs = segs+1;
			
			si segs > 50 Entonces
				segs = 0;
				minutos = minutos+1;
			FinSi
			si minutos > 59 Entonces
				minutos = 0;
				horas = horas+1;
			FinSi
			si horas > 23 Entonces
				horas = 0;
			FinSi
		FinMientras
FinAlgoritmo
