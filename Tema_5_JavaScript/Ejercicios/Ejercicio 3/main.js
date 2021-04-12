// -- Ejercicio 3 

// -- Apartado 1 -- Generación del Array

let employees = [];

for (let i = 1; i <= 100; i++) {
    const newEmployee = {
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: Math.floor(Math.random() * (4000 - 1250) + 1250),
    }
    employees.push(newEmployee);
}

console.log(employees);

// Referente al Apartado 1, podríamos guardar la lógica de la función salario en una función aparte para abstraernos de la lógica. 
// Como también podríamos quitar el newEmployee e ir haciendo push de un objeto nuevo cada vez direcctamente al objeto. 
// No era necesario crear un constructor dado que solo estamos utilizando 1 array. 

console.log("** Apartado 1 - v2**");

function Employee (cargo, rendimiento, salario) {
    this.cargo = cargo,
    this.rendimiento = rendimiento,
    this.salario = salario;
}

employees = [];
for (let i = 1; i <= 100; i++) {
    employees.push( (new Employee(
        `Empleado ${i}`, 
        Number(Math.random().toFixed(2)), 
        Math.floor(Math.random() * (4000 - 1250) + 1250))
    ))
}

console.log(employees);

// Apartado 2 -- Ordenar Array por rendimiento e imprimirlo, Usar una función anónima. 

console.log("** Apartado 2 **");

employees.sort(function (employee1, employee2){
    return employee1.rendimiento - employee2.rendimiento

});

console.log(employees);

// Apartado 3 -- Ordenar por Salario e Imprimirlo

console.log("** Apartado 3 **");

employees.sort((employee1, employee2) => (employee1.salario - employee2.salario) );


console.log(employees);

// Apartado 4 -- Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará
// dentro del string Cargo. Usar una función nombrada como callback.

// En esta primera función, no tenemos que poner el constructor Number porque JS por su naturaleza
// Al restar los dos strings que quedan después de aplicar el slice, asume que son números.

//Agrego según clase, diferentes formas de hacer el ejercicio donde la segunda es la más flexible. 

console.log("** Apartado 4 **");

function callback (employee1, employee2){
    return employee2.cargo.slice(9) - employee1.cargo.slice(9);
    return employee2.cargo.split(" ")[1] - employee1.cargo.split(" ")[1];
    return employee2.cargo.replace("Empleado ", "") - employee1.cargo.replace("Empleado ", "");
};

employees.sort(callback);

console.log(employees);

// Apartado 5 -- Usando filter: imprimir el cargo y salario de los que cobren más de 2500€

console.log("** Apartado 5 **");

// let employeeSalaryAbove2500 = employees.filter((employees) => employees.salario >= 2500);

// employeeSalaryAbove2500.forEach(employees => console.log(employees.cargo, employees.salario));

employees
    .filter(employees => employees.salario > 2500)
    .forEach(employees => console.log(employees.cargo, employees.salario))
;


// Apartado 6 -- . Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5.

console.log("** Apartado 6 **");

employees = employees.map( employees => {
    if (employees.salario < 1500 ) {
        employees.salario = employees.salario * 1.25;
        return employees
    } 
    return employees
    
});

console.log(employees);

// employees = employees.map ( employees => {
//     employees.filter(employees => employees.salario < 1500)
// })

// Apartado 7 -- Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que
// a la empresa le cuesta tener un empleado su sueldo más un 15% por impuestos. 

console.log("** Apartado 7 **");

let totalCost = employees.reduce((salarySum, employees) => {
    return salarySum += employees.salario * 1.15;   
}, 0);

console.log(totalCost);

// Apartado 8 -- Usar el método o métodos (reduce / map / filter / sort) que determinemos oportuno e imprimir en cada apartado:

// Despedir a los que tengan un rendimiento menor a 0.3.

console.log("** Apartado 8.1 **");

employees = employees.filter(employee => employee.rendimiento >= 0.3);

console.log(employees);

// Calcular el sueldo medio de la empresa.
console.log("** Apartado 8.2 **");

let mediumWage = employees.reduce((salarySum, employee) =>  salarySum + employee.salario, 0) / employees.length;

console.log("El sueldo medio de la empresa es :", mediumWage);

// • Subir el sueldo de los que tengan un rendimiento superior a 0.7.

console.log("** Apartado 8.3 **");

console.log(employees);

employees = employees.map( employees => {
    if (employees.rendimiento > 0.7 ) {
        employees.salario = employees.salario * 1.25;
        console.log("Subido el sueldo del ", employees.cargo);
        return employees
    } 
    return employees
    
});

console.log(employees);

console.log("Apartado 8, explicación con ForEach");



