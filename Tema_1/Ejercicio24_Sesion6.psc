Algoritmo sin_titulo
	definir nombre como caracter;
	definir practica, problema, teoria, resultado, contador, media, aprobado, suspendido como real;
	
	Nombre = 'Alumno';
	contador = 0;
	aprobado = 0;
	suspendido = 0;
	escribir 'Introduce el nombre del alumno';
	Leer nombre;
	mientras nombre <> '' Hacer
		escribir 'introduce las notas del alumno';
		Leer practica, problema, teoria;
		si (practica >= 0 y practica <= 10) y (problema >= 0 y problema <= 10) y (teoria >= 0 y teoria <= 10)
			practica = practica * 0.1;
			problema = problema * 0.5;
			teoria   = teoria * 0.4;
			resultado = practica+problema+teoria;
			contador = contador +1;
			Escribir 'La nota final de ' ,nombre,' es: ', resultado,'.';
			si resultado >= 5 entonces
				aprobado = aprobado+1;
			sino
				suspendido = suspendido+1;
			FinSi
		SiNo
			Escribir 'Las notas introducidas no son correctas';
		FinSi
		escribir 'Introduce el nombre del siguiente alumno.';
		leer nombre;
	FinMientras
	
Escribir 'El número de alumnos contados es: ', contador,'.';
Escribir 'El número de aprobados es: ', aprobado,'.';
Escribir 'El número de suspensos es: ', suspendido,'.';
Escribir 'La media de aprobados es: ' (aprobado/contador)*100,'%.';



FinAlgoritmo
