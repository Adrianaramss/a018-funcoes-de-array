//1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, 
//Crie uma `const triplos`, e guarde o valor do array nesta const;

const arraynumeros = [3, 56, 12, 89, 121, 45, 34, 78]

const triplos = arraynumeros.map((numero) => {
return numero * 3
})
console.log(triplos);

//2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, 
//e guarde o valor do array nesta const;

const metade = arraynumeros.map ((numero) => {
return numero/ 2
})
console.log(metade);