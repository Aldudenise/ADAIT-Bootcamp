// // Ejercicios:

// // 1) Equinos
// // Definir una clase Equino junto con las características comúnes de los equinos
// // Agregarle un método galopar que retorne "Soy un " + tipo de equino + " y estoy galopando libre por la pradera"
// // Crear a partir de ella objetos Unicornios / Caballos / Ponys

class Equino {
  constructor(patas, pelo, tipo) {
    this.patas = patas;
    this.pelo = pelo;
    this.tipo = tipo;
  }
  galopar() {
    return "Soy un " + this.tipo + " y estoy galopando libre por la pradera";
  }
}

const miPony = new Equino(4, "corto", "Pony");
console.log(miPony.galopar());

// // 2) Animales
// // Definir una clase Animal
// // Asignarle tipo, sonidoCaracteristico y un método hacerSonido
// // Instanciar una vaca (muuuu), un perro (wuf) y un gato (meow)
// // Llamar al sonido caracteristico de cada Animal

class Animal {
  // Esto es lo primero que se ejecuta cuando instancio un obj
  constructor(tipo, sonidoCaracteristico) {
    this.tipo = tipo;
    this.sonidoCaracteristico = sonidoCaracteristico;
  }

  hacerSonido() {
    console.log(this.sonidoCaracteristico);
  }
}

// 7) Como instancio un objeto
var perro = new Animal("perro", "wuf");
perro.hacerSonido();

var pony = new Animal("equino", "relinche");
pony.hacerSonido();

// // Ejercicios relacionados entre sí
// // 1) Crear un objeto que represente un Auto
// // 	•	Debera tener las propiedades color,
// //       modelo, patente, marca, prendido,
// //       velocidad y velocidad maxima, peso
// // 	•	Debera tener los metodos encender,
//  //      acelerar, mostrar velocidad actual, frenar y apagar
// // 	•	Por lo tanto mediante el metodo acelerar tendra que
// //       ir aumentando la propiedad velocidad hasta llegar
// //       a la velocidad maxima.

var auto = {
  modelo: "2018",
  patente: "ABC118",
  marca: "AUDI",
  prendido: false,
  velocidadActual: 0,
  velocidadMax: 250,
  peso: 200,
  encender: function() {
    this.prendido = true;
  },
  apagar: function() {
    this.prendido = false;
  },
  acelerar: function() {
    for (
      this.velocidadActual;
      this.velocidadActual <= this.velocidadMax;
      this.velocidadActual++
    ) {
      console.log("Estamos acelerandoooo!! - ", this.velocidadActual);
    }
  },
  frenar: function() {
    for (
      this.velocidadActual;
      this.velocidadActual >= 0;
      this.velocidadActual--
    ) {
      console.log("Estamos frenandoooo!! - ", this.velocidadActual);
    }
  },
  prendidoApagado: function() {
    // Caso 1 - Auto prendido necesito que se apague
    // prendido = true => !prendido = !true => false
    // Caso 2 - Auto apagado necesito que se prenda
    // prendido = false => !prendido = !false => true
    // el operador ! niega la condicion
    this.prendido = !this.prendido;
  }
};

// //    Crear una función para cargar un auto a un camion
// // 	•	El camion tiene un peso maximo de carga
// // 	•	El objeto camion Debera validar con cada auto
// //       ingresado si esta por debajo del peso
// //       o si ya no lo puede agregar
// // 	•	Ademas de almacenar los autos debe tener
// //       la posibilidad de validar que no tenga
// //       patentes repetidas y que me devuelva todas
// //       las patentes que tiene a bordo.

var camionConBug = {
  pesoMaximo: 200,
  pesoAcumulado: 0,
  patentesGuardadas: [],
  cargarAuto: function(autoQueRecibo) {
    // 0) validar si el peso del auto recibido es MENOR o IGUAL a mi peso maximo
    var pesoDisponible = this.pesoMaximo - this.pesoAcumulado;
    if (autoQueRecibo.peso <= pesoDisponible) {
      this.pesoAcumulado = this.pesoAcumulado + autoQueRecibo.peso;
      console.log("Peso acumulado", this.pesoAcumulado);
    }
    // 1) Me guardo la patente del auto SI y SOLO SI no la tengo
    if (this.patentesGuardadas.length === 0) {
      // Guardo mi primer patente
      this.patentesGuardadas.push(autoQueRecibo.patente);
    } else {
      for (var i = 0; i <= this.patentesGuardadas.length - 1; i++) {
        // BUG: patentes guardadas = ["BB", "AA"]
        // Si ingreso nuevamente la patente AA
        // como la primer patente que verifico es BB entonces pasa y guarda
        if (autoQueRecibo.patente !== this.patentesGuardadas[i]) {
          // Como guardo algo en un array ? PUSH
          this.patentesGuardadas.push(autoQueRecibo.patente);
        }
      }
    }
  }
};

var auto1 = {
  peso: 20
};
var auto2 = {
  peso: 30
};
var auto3 = {
  peso: 300
};
camionConBug.cargarAuto(auto1);

// Todas las resoluciones tiene un BUG chiquito que quiero que encuentren y resuelvan
// 1) Búsqueda lineal
var camion3 = {
  pesoMaximo: 200,
  pesoAcumulado: 0,
  patentesGuardadas: [],
  cargarAuto: function(autoQueRecibo) {
    // 0) validar si el peso del auto recibido es MENOR o IGUAL a mi peso maximo
    var pesoDisponible = this.pesoMaximo - this.pesoAcumulado;
    if (autoQueRecibo.peso <= pesoDisponible) {
      this.pesoAcumulado = this.pesoAcumulado + autoQueRecibo.peso;
    }
    this.puedoAgregarPatente(autoQueRecibo.patente) &&
      this.patentesGuardadas.push(autoQueRecibo.patente);

    console.log("Peso acumulado", this.pesoAcumulado);
    console.log("Patentes guardadas", this.patentesGuardadas);
  },
  puedoAgregarPatente: function(patente) {
    for (var i = 0; i < this.patentesGuardadas.length; i++) {
      if (this.patentesGuardadas[i] === patente) return false;
    }
    return true;
  }
};

// // 2) Usando indexOf
// // IndexOf es un método que me devuelve la posición en el array donde se encuentra aquello que estoy buscando
// // Si no existe en el array aquello que busco, devuelve -1
var camionIndexOf = {
  pesoMaximo: 200,
  pesoAcumulado: 0,
  patentesGuardadas: [],
  cargarAuto: function(autoQueRecibo) {
    // 0) validar si el peso del auto recibido es MENOR o IGUAL a mi peso maximo
    var pesoDisponible = this.pesoMaximo - this.pesoAcumulado;
    if (autoQueRecibo.peso <= pesoDisponible) {
      this.pesoAcumulado = this.pesoAcumulado + autoQueRecibo.peso;
    }
    // 1) Me guardo la patente del auto SI y SOLO SI no la tengo
    if (this.patentesGuardadas.length === 0) {
      // Guardo mi primer patente
      this.patentesGuardadas.push(autoQueRecibo.patente);
    } else {
      // Si indexOf devuelve -1 no pushea la patente al array
      this.puedoAgregarPatente(autoQueRecibo.patente) &&
        this.patentesGuardadas.push(autoQueRecibo.patente);
    }
    console.log("Peso acumulado", this.pesoAcumulado);
    console.log("Patentes guardadas", this.patentesGuardadas);
  },
  puedoAgregarPatente: function(patente) {
    return this.patentesGuardadas.indexOf(patente);
  }
};

// // 3) Usando find
// // Find es un método de arrays agregado en ES6
// // Devuelve el valor del primer elemento del array que cumple la función de prueba que le paso
var camionConFind = {
  pesoMaximo: 200,
  pesoAcumulado: 0,
  patentesGuardadas: [],
  cargarAuto: function(autoQueRecibo) {
    // 0) validar si el peso del auto recibido es MENOR o IGUAL a mi peso maximo
    var pesoDisponible = this.pesoMaximo - this.pesoAcumulado;
    if (autoQueRecibo.peso <= pesoDisponible) {
      this.pesoAcumulado = this.pesoAcumulado + autoQueRecibo.peso;
    }
    // 1) Me guardo la patente del auto SI y SOLO SI no la tengo
    if (this.patentesGuardadas.length === 0) {
      // Guardo mi primer patente
      this.patentesGuardadas.push(autoQueRecibo.patente);
    } else {
      this.puedoAgregarPatente(autoQueRecibo.patente) &&
        this.patentesGuardadas.push(autoQueRecibo.patente);
    }
    console.log("Peso acumulado", this.pesoAcumulado);
    console.log("Patentes guardadas", this.patentesGuardadas);
  },
  puedoAgregarPatente: function(patente) {
    // find se para en cada uno de los elementos del array
    // ["AA", "BB"] => la primera vez p es igual a "AA", la segunda p es igual a "BB" y asi...
    // recorre todos los elementos de mi array hasta encontrar alguno que sea ""=== patente"
    const resultadoBusqueda = this.patentesGuardadas.find(p => p === patente);
    // si resultado es IGUAL a undefined quiere decir que la patente no existe
    // si resultado es IGUAL a undefined retorna TRUE
    // caso contrario retorna FALSE
    return resultadoBusqueda === undefined; // hermoso <3
  }
};
