//Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”

const miLista = ["velma", "exploradora", "jane", "john", "harry"];

//Forma de recorrer con while
console.log("\nUsando la estructura while para recorrer la lista, obtenemos:");
let i = 0;
while (i < miLista.length) {
    console.log(miLista[i]);
    i++;
}

//Forma de recorrer con do...while
console.log("\nUsando la estructura do...while para recorrer la lista, obtenemos:");
let j = 0;
do {
    console.log(miLista[j]);
    j++;
} while (j < miLista.length);
