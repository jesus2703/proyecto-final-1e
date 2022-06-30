// Creamos objetos de los cortes que vamos a consultar

const corteCarne1 = {
  nombre: "cuadril",
  precio: 1180,
};
const corteCarne2 = {
  nombre: "nalga",
  precio: 1200,
};
const corteCarne3 = {
  nombre: "peceto",
  precio: 1300,
};
const corteCarne4 = {
  nombre: "lomo",
  precio: 1500,
};
const corteCarne5 = {
  nombre: "costilla",
  precio: 1080,
};

// Creamos array vacios para incluir los cortes elegidos por el usuario

const cortesElegidos = [];
const cantidadElegida = [];

// realizamos la consulta al usuario

let corteCliente = prompt(
  "Escriba el corte de carne que desee llevar: cuadril, nalga, peceto, lomo o costila"
);
corteCliente.toLowerCase();
cortesElegidos.push(corteCliente);

let corteCantidad = parseInt(
  prompt("Escriba la cantidad de kilos que desea llevar. Como minimo 1 kg")
);
cantidadElegida.push(corteCantidad);

// creamos el condicional en funcion de lo que escriba el usuario

if (corteCliente === "cuadril") {
  totalCuadril = corteCarne1.precio * corteCantidad;
  alert(
    `usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalCuadril}`
  );
} else if (corteCliente === "nalga") {
  totalNalga = corteCarne2.precio * corteCantidad;
  alert(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalNalga}`);
} else if (corteCliente === "peceto") {
  totalPeceto = corteCarne3.precio * corteCantidad;
  alert(
    `usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalPeceto}`
  );
} else if (corteCliente === "lomo") {
  totalLomo = corteCarne4.precio * corteCantidad;
  alert(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalLomo}`);
} else if (corteCliente === "costilla") {
  totalCostilla = corteCarne5.precio * corteCantidad;
  alert(
    `usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalCostilla}`
  );
} else {
  alert(
    "Opcion incorrecta, debe colocar cuadril, nalga, peceto, lomo o costilla"
  );
  cortesElegidos.pop(); // eliminamos los cortes mal escritos del array
  cantidadElegida.pop(); // eliminamos las cantidades mal escritas del array
}

// efectuamos el ciclo para agregar mas elementos por si el usuario desea hacerlo

while (confirm("Desea llevar algun corte mas?")) {
  let corteCliente = prompt(
    "Escriba el corte de carne que desee llevar: cuadril, nalga, peceto, lomo o costila"
  );
  cortesElegidos.push(corteCliente);
  let corteCantidad = parseInt(
    prompt("Escriba la cantidad de kilos que desea llevar. Minimo 1 kg")
  );
  cantidadElegida.push(corteCantidad);

  if (corteCliente === "cuadril") {
    totalCuadril = corteCarne1.precio * corteCantidad;
    alert(
      `usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalCuadril}`
    );
  } else if (corteCliente === "nalga") {
    totalNalga = corteCarne2.precio * corteCantidad;
    alert(
      `usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalNalga}`
    );
  } else if (corteCliente === "peceto") {
    totalPeceto = corteCarne3.precio * corteCantidad;
    alert(
      `usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalPeceto}`
    );
  } else if (corteCliente === "lomo") {
    totalLomo = corteCarne4.precio * corteCantidad;
    alert(
      `usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalLomo}`
    );
  } else if (corteCliente === "costilla") {
    totalCostilla = corteCarne5.precio * corteCantidad;
    alert(
      `usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalCostilla}`
    );
  } else {
    alert(
      "Opcion incorrecta, debe colocar cuadril, nalga, peceto, lomo o costilla"
    );
    cortesElegidos.pop();
    cantidadElegida.pop();
  }
}

console.log(cortesElegidos);
console.log(cantidadElegida);

for (const corteCliente of cortesElegidos) {
  console.log(`usted esta comprando ${corteCliente}`);
}

console.log("Gracias por su compra");
