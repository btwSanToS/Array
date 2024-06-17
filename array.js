console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");
console.log(aprovados);

// MANEIRA E BOA PRÁTICA PARA CRIAR UM ARRAY

aprovados = ["Bia", "Ana", "Carlos"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // Como não existe o elemento 3, retorna UNDEFINED.

// Maneira de inserir em array específico
aprovados[3] = "Paulo";
console.log(aprovados[3]);

aprovados[4] = "André";
console.log(aprovados[4]);
console.log(aprovados.length);

// Maneira de inserir no último array
aprovados.push("Stela");
aprovados[10] = "Teste";

console.log(aprovados.length);
console.log(aprovados);

// SORT REORDENA O ARRAY
aprovados.sort();
console.log(aprovados);

// SPLICE MODIFICA O ARRAY
aprovados.splice(1, 2, "Elemento1", "Elemento2");
console.log(aprovados);
/*
O splice funciona da seguinte forma:
O primeiro valor, informa em qual índice será colocado os valores informados.
Nesse caso, 'Elemento1' e 'Elemento2';

O segundo valor, a quantidade de índices que serão apagados, após inserção dos valores informados.
Nesse caso, 'André' e 'Bia';

Em terceiro, os valores a serem inseridos.
*/
