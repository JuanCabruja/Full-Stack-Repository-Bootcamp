Algoritmo Ejercicio32
	Definir Precio_bocadillo, Precio_refresco, Precio_cerveza, Precio_pan como real;
	definir Bocadillo_de_jamón, Refresco, Cerveza, pan Como real;
	
	Precio_bocadillo = 1.5;
	Precio_refresco = 1.05;
	Precio_cerveza = 0.75;
	Precio_pan=2;
	
	Escribir 'Cantidad de bocadillos vendidos';
	Leer Bocadillo_de_jamón
	Escribir 'Cantidad de refrescos vendidos';
	Leer Refresco
	Escribir 'Cantidad de cerveza vendidas';
	Leer cerveza;
	Escribir 'Cantidad de pan vendidos';
	Leer pan;
	
	Si Bocadillo_de_jamón >0 entonces 
		Bocadillo_de_jamón=Bocadillo_de_jamón*Precio_bocadillo;
	SiNo
		Bocadillo_de_jamón=1;
	FinSi
	
	Si Refresco>0 Entonces
		Refresco=Refresco*Precio_refresco;
	SiNo
		Refresco=1;
		
	FinSi
	Si Cerveza>0 Entonces
		Cerveza=Cerveza*Precio_cerveza;
	SiNo
		cerveza=1;
	FinSi
	Si pan>=0 Entonces
		pan=pan*Precio_pan;
	SiNo
		pan=1;
	FinSi

	
	Escribir 'El total de su cuenta es: '
	Escribir Bocadillo_de_jamón+Refresco+cerveza+pan
	
FinAlgoritmo
