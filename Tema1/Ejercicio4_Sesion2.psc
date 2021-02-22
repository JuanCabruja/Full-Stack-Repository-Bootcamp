Algoritmo Ejercicio4_Sesion2
	Definir num1, num2, num3 Como Entero;
	Definir resultado Como Logico;
	Escribir 'Por favor ingresa 3 números.';
	Leer num1, num2, num3;
	resultado = num1 < 0;
	Si resultado Entonces
		
		Escribir 'el resultado es ', (num1 * num2 * num3);
	SiNo
		Escribir 'El resultado es ', num1-num2-num3,'.';
	FinSi
	
FinAlgoritmo
