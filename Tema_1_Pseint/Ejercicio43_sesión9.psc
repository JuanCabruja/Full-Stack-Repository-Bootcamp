Algoritmo Ejercicio43
	Definir horas, minutos, segs, arranque Como Entero;
	definir c Como Caracter;
	arranque = 2;
	
	//Puedo usar una variable C que se dispare en caso de que la variable sea menor que 10.
	c = '0';
	
	mientras arranque <> 1 Hacer
	Para Horas = 0 hasta 23 hacer 
		Para minutos = 0 hasta 59 hacer
			Para segs = 00 hasta 59 hacer
				esperar 1 Segundos;
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
			FinPara
		FinPara
		
		
	FinPara
FinMientras



//bucle mientras que no termino de ver.

//Apartado de máximos y mínimos
si segs < 10 y minutos <10 y horas <10 entonces
	escribir '0', horas, ':0',minutos,':0',segs;
FinSi
si horas >= 10 y minutos >=10 y segs>=10 Entonces
	escribir  horas, ':',minutos,':',segs;
FinSi

// Otros apartdos
si segs < 10 y minutos >10 y horas <10 entonces
	escribir '0', horas, ':',minutos,':0',segs;
FinSi
si segs < 10 y minutos >10 y horas >10 entonces
	escribir  horas, ':',minutos,':0',segs;
FinSi

si horas < 10 y minutos <10 y segs>=10 Entonces
	escribir '0', horas, ':0',minutos,':',segs;
FinSi
si horas < 10 y minutos >10 y segs <10 entonces
	escribir '0', horas, ':',minutos,':0',segs;
FinSi

si horas < 10 y minutos >=10 y segs>=10 Entonces
	escribir '0', horas, ':',minutos,':',segs;
FinSi

mientras segs<10 Hacer
	Mientras minutos<10 Hacer
		mientras horas<10 Hacer
			escribir '0',horas,':0',minutos,':0',segs;
			Limpiar Pantalla;
		FinMientras
		escribir horas,':0',minutos,':0',segs;
		Limpiar Pantalla;
	FinMientras
	Limpiar Pantalla;
	escribir horas, ':',minutos,':0',segs;
FinMientras
FinAlgoritmo
