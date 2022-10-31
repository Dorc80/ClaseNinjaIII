class Ninja {

    constructor(nombre, vida = 100, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.vida = vida;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log('El nombre de mi ninja es ' + this.nombre);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, vida: ${this.vida}, velocidad: ${this.velocidad}, fuerza: ${this.fuerza}`)
    }

    drinkSake() {
        this.vida += 10;
    }

}

class Sensei extends Ninja {

    constructor(nombre, vida = 200, velocidad = 10, fuerza = 10, sabiduria) {
        super(nombre, vida, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        this.drinkSake();
        console.log('Lo que puede hacer un programador en un mes, dos programadores lo pueden hacer en dos meses');
    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();