Algoritmo Ejercicio59
	
	Definir n_centros, n_cursos, n_alumnos, centro, curso, alumno, centro_de_pertenencia Como Entero;
	definir suma_cursos, curso_pertenencia Como Entero;
	definir notas, Media_Max Como Real;
	n_centros = 5;
	n_cursos = 4;
	n_alumnos = 10;
	
	Dimension notas[n_centros, n_cursos, n_alumnos];
	
	Media_Max=0;
	para centro = 0 hasta n_centros-1 Hacer
		Escribir 'Centro ', centro,': ';
		para curso = 0 hasta n_cursos-1 Hacer
			Escribir 'Curso ',curso,': ', Sin Saltar;
			suma_cursos = 0;
			para alumno = 0 hasta n_alumnos-1 hacer
				notas[centro, curso, alumno] = Aleatorio(1, 10) ;
				Escribir notas[centro, curso, alumno], ' ', Sin Saltar;
				suma_cursos= suma_cursos+notas[centro, curso, alumno];
			FinPara
			
			escribir ' Media del curso: ',suma_cursos/n_alumnos;
			escribir '';
			
			Si suma_cursos/n_alumnos > Media_Max Entonces
				Media_Max = suma_cursos/n_alumnos;
				centro_de_pertenencia = centro;
				curso_pertenencia = curso;
			FinSi
		FinPara
	FinPara
	
	Escribir 'La nota media máxima fué: ', Media_Max,' en el centro: ',centro_de_pertenencia,' en el curso: ', curso_pertenencia,'.';
FinAlgoritmo
