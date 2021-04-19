Algoritmo sin_titulo
	Definir clave como caracter;
	definir contador como entero;
	Escribir 'Escriba su clave, recuerde que solo tiene tres intentos.';
	Leer clave;
	contador = 1;
	
	Mientras clave <> 'eureka' Y contador <3 hacer
	
		Escribir 'La clave que ha introducido es incorrecta, vuelva a intentarlo.';
			Leer clave;
			contador = contador+1;
			Si contador == 3 Entonces
				Escribir 'ha alcanzado el límite de intentos, Usuario Bloqueado';
			FinSi
	FinMientras
	
	si clave == 'eureka' Entonces
		Escribir 'Bienvenido a la plataforma.';
	FinSi

FinAlgoritmo