Algoritmo Ejercicio37
	Definir size,numdni,resultado como entero;
	definir array_DNI como caracter;
	
	size = 23;
	
	Dimension array_DNI[size];
	
	array_DNI[0] = "T"; 
	array_DNI[1] = "R";
	array_DNI[2] = "W";
	array_DNI[3] = "A";
	array_DNI[4] = "G";
	array_DNI[5] = "M";
	array_DNI[6] = "Y";
	array_DNI[7] = "F";
	array_DNI[8] = "P";
	array_DNI[9] = "D";
	array_DNI[10] = "X";
	array_DNI[11] = "B";
	array_DNI[12] = "N";
	array_DNI[13] = "J";
	array_DNI[14] = "Z";
	array_DNI[15] = "S";
	array_DNI[16] = "Q";
	array_DNI[17] = "V";
	array_DNI[18] = "H";
	array_DNI[19] = "L";
	array_DNI[20] = "C";
	array_DNI[21] = "K";
	array_DNI[22] = "E";
	
	Escribir 'Introduce los números de tu DNI: ';
	leer numdni;
	
	resultado = numdni mod 23; 
	
	Escribir 'Su DNI es: ',array_DNI[resultado],'-',numdni, '.';
	
FinAlgoritmo
