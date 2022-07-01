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
const totalPorCorte = [];
let totalCompra = 0;

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

if (corteCliente === "cuadril" && corteCantidad > 0 && corteCantidad != " ") {
  totalCuadril = corteCarne1.precio * corteCantidad;
  totalPorCorte.push(totalCuadril)
  console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalCuadril}`)

} else if (corteCliente === "nalga" && corteCantidad > 0 && corteCantidad != " ") {
  totalNalga = corteCarne2.precio * corteCantidad;
  totalPorCorte.push(totalNalga)
  console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalNalga}`)

} else if (corteCliente === "peceto" && corteCantidad > 0 && corteCantidad != " ") {
  totalPeceto = corteCarne3.precio * corteCantidad;
  totalPorCorte.push(totalPeceto)
  console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalPeceto}`)

} else if (corteCliente === "lomo" && corteCantidad > 0 && corteCantidad != " ") {
  totalLomo = corteCarne4.precio * corteCantidad;
  totalPorCorte.push(totalLomo)
  console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalLomo}`)

} else if (corteCliente === "costilla" && corteCantidad > 0 && corteCantidad != " ") {
  totalCostilla = corteCarne5.precio * corteCantidad;
  totalPorCorte.push(totalCostilla)
  console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalCostilla}`)

} else {
  alert(
    "Opcion incorrecta, debe colocar cuadril, nalga, peceto, lomo o costilla y en cantidad debe colocar un valor numerico"
  );
  cortesElegidos.pop(); // eliminamos los cortes mal escritos del array
  cantidadElegida.pop(); // eliminamos las cantidades mal escritas del array
}

// efectuamos el ciclo para agregar mas elementos por si el usuario desea hacerlo

while (confirm("Desea llevar algun corte mas?")) {
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
  
  if (corteCliente === "cuadril" && corteCantidad > 0 && corteCantidad != " ") {
    totalCuadril = corteCarne1.precio * corteCantidad;
    totalPorCorte.push(totalCuadril)
    console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalCuadril}`)
  
  } else if (corteCliente === "nalga" && corteCantidad > 0 && corteCantidad != " ") {
    totalNalga = corteCarne2.precio * corteCantidad;
    totalPorCorte.push(totalNalga)
    console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalNalga}`)
  
  } else if (corteCliente === "peceto" && corteCantidad > 0 && corteCantidad != " ") {
    totalPeceto = corteCarne3.precio * corteCantidad;
    totalPorCorte.push(totalPeceto)
    console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalPeceto}`)
  
  } else if (corteCliente === "lomo" && corteCantidad > 0 && corteCantidad != " ") {
    totalLomo = corteCarne4.precio * corteCantidad;
    totalPorCorte.push(totalLomo)
    console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalLomo}`)
  
  } else if (corteCliente === "costilla" && corteCantidad > 0 && corteCantidad != " ") {
    totalCostilla = corteCarne5.precio * corteCantidad;
    totalPorCorte.push(totalCostilla)
    console.log(`usted lleva ${corteCantidad}kgs de ${corteCliente} por ${totalCostilla}`)
  
  } else {
    alert(
      "Opcion incorrecta, debe colocar cuadril, nalga, peceto, lomo o costilla y en cantidad debe colocar un valor numerico"
    );
    cortesElegidos.pop(); // eliminamos los cortes mal escritos del array
    cantidadElegida.pop(); // eliminamos las cantidades mal escritas del array
  }
  
}

// realizamos la suma de los montos por corte elegido por el usuario


for (let i = 0; i < totalPorCorte.length; i++) {
    totalCompra += totalPorCorte[i]
    
}

console.log(`el total de su compra es ${totalCompra}`)
console.log("Gracias por su compra");
