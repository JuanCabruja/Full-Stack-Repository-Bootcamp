Algoritmo Ejercicio7
	Definir Precio Como Entero;
	Definir Dinero Como Entero;
	
	Escribir '�Con cuanto dinero pagar� el art�culo y cuanto cuesta el art�culo?';
	Leer Dinero, Precio;
	Si dinero == Precio Entonces
		Escribir 'El vuelto es 0.';
	Sino 
		Si Dinero > Precio Entonces
			Escribir 'Su vuelto es ', Dinero-Precio,'.';
		SiNo
			Si Dinero < Precio Entonces
				Escribir 'No es suficiente dinero, le faltan ', Precio-Dinero,'.';
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
