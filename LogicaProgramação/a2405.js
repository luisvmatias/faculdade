function Carro(marca, modelo, ano, motor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.motor = motor;
}

console.log()

var car = new Carro ("Citroen", "DS3", 2013, "1.6 turbo")
console.log("marca: " + car.marca)
console.log("modelo: " + car.modelo)
console.log("ano: " + car.ano)
console.log("motor: " + car.motor)

console.log()

var car2 = new Carro ("Fiat", "Uno Mille", 2010, "1.0")
console.log("marca: " + car2.marca)
console.log("modelo: " + car2.modelo)
console.log("ano: " + car2.ano)
console.log("motor: " + car2.motor)

console.log()

var car3 = new Carro ("Mercedes-Benz", "C-280", 1996, "2.8")
console.log("marca: " + car3.marca)
console.log("modelo: " + car3.modelo)
console.log("ano: " + car3.ano)
console.log("motor: " + car3.motor)