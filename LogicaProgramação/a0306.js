class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca= marca
        this.modelo= modelo
        this.ano= ano
    }
    ligar() {
        console.log("o veiculo esta ligado")
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, potencia) {
        super(marca, modelo, ano)
        this.potencia= potencia
    }
    abrirCapo() {
        console.log(`o capo do ${this.modelo} esta aberto`)
    }
}

const meuCarro = new Carro("citroen", "DS3", 2013, "254wHP")
console.log(meuCarro.marca);
console.log(meuCarro.modelo);
console.log(meuCarro.ano);
console.log(meuCarro.potencia);
meuCarro.ligar()
meuCarro.abrirCapo()