//Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”

const miLista = ["velma", "exploradora", "jane", "john", "harry"];

//Forma de recorrer la lista con for
console.log("Usando la estructura for para recorrer la lista, obtenemos:");
for (let i=0;  i < miLista.length; i++) {
    console.log(miLista[i]);
}

//Forma de recorrer la lista con for...of
console.log("\nUsando la estructura for...of para recorrer la lista, obtenemos:");
for (const elementos of miLista) {
	console.log(elementos);
}

//Forma de recorrer la lista con el método forEach
console.log("\nA pesar de no se run bucle for sintácticamente, también podemos usar la estructura forEach para recorrer la lista, obtenemos:");
miLista.forEach(elementos => console.log(elementos));

