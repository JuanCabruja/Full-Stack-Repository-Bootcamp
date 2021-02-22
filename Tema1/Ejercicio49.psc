Algoritmo sin_titulo
	definir j, i, x, aux, conservas, dulces, bebidas, size, min, max, mes Como Entero;
	size = 12; 
	dimension conservas[size], dulces[size], bebidas[size];
	
	Escribir 'Libro Mayor: Conservas, Dulces y Bebidas: ';
	
	para j = 0 hasta size-1 Hacer
		conservas[j] = Aleatorio(100, 500);
		dulces[j] = Aleatorio(100, 500);
		bebidas[j] = Aleatorio(100, 500);
		
		si j+1 < 10 Entonces
			Escribir ' Mes 0', j+1,' ', conservas[j],' ',dulces[j],' ', bebidas[j];
		SiNo
			Escribir ' Mes ', j+1,' ', conservas[j],' ',dulces[j],' ', bebidas[j];
		FinSi
		
	FinPara
	
	max = 0;
	mes = 0;
	min = 0;
	
	//Ejercicio A. 
	
	para i = 0 hasta size-1 Hacer
		si dulces[i]>max Entonces
			max = dulces[i];
			mes = i+1;
		FinSi
	FinPara
	escribir '';
	Escribir 'El coste máximo mensual es: ', max,'.';
	Escribir 'Que se generó en el mes: ',mes,'.';
	
	escribir '';
	
	
	//Ejercicio B.
	
	aux = 0;
	
	para i = 0 hasta size-1 Hacer
		aux = bebidas[i]+aux;
	FinPara
	
	Escribir 'El promedio anual de coste de producción en bebida es: ', aux/size;
	
	//Ejercicio C. 
	definir mesmin, mesmax Como Entero;
	
	max = 0;
	mesmin = 0;
	mesmax = 0;
	min = 0;
	
	para i = 0 hasta size-2 Hacer
		si bebidas[i]>max Entonces
			max = bebidas[i];
			mesmax = i+1;
		FinSi
	
		si i = 0 o bebidas[i]<min Entonces
			min = bebidas[i];
			mesmin = i+1;
		FinSi
	FinPara
	
	Escribir '';
	Escribir 'Mayor coste de producción de bebidas  en el mes: ',mesmax,' este valor es: ', max,'.';
	Escribir 'Menor coste de producción de bebidas en el mes: ', mesmin,' este valor es: ', min,'.';
	
	//Ejercicio D. 
	
	definir mayorgasto como entero;
	
	si dulces[11] < bebidas[11] y dulces[11]< conservas[11] entonces 
		Escribir 'El departamento de menor coste en diciembre ha sido: Dulces.';
	sino 
		si bebidas[11] < conservas[11] Entonces
			escribir 'El departamento de menor coste en diciembre ha sido: Bebidas.';
		sino 
			escribir 'El departamento de menor coste en diciembre ha sido: Conservas.';
		FinSi
	FinSi
	
FinAlgoritmo

