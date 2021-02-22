Algoritmo Ejercicio_56
	definir matriz, numero_cursos, numero_alumnos,curso, alumno, n Como Entero;
	
	numero_cursos = 5;
	numero_alumnos = 3;
	dimension matriz[numero_cursos, numero_alumnos]; //en Pseint los arrays de 2 dimensiones se escriben así en otros lenguajes a veces es matriz[indice][indice2]
	
	//Leemos y guardamos las notas.
	para curso = 0 hasta numero_cursos-1 con paso 1;
		para alumno = 0 hasta numero_alumnos-1 con paso 1 Hacer
			escribir 'Introduce la nota del Alumno ',alumno+1,' del curso ',curso+1,':';
			leer n;
			matriz[curso, alumno] = n;
		FinPara
		escribir '';
	FinPara
	
	
	para curso = 0 hasta numero_cursos-1 con paso 1;
		Escribir 'Curso ',curso+1,': ', Sin Saltar;
		para alumno = 0 hasta numero_alumnos-1 con paso 1 Hacer
			escribir matriz[curso, alumno],' ', Sin Saltar;
		FinPara
		escribir '';
	FinPara
	
FinAlgoritmo
