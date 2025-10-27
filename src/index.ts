class Carro {
    modelo: string;
    marca: string;
    cor: string;
    ano: number;

    constructor(modelo: string, marca: string, cor: string, ano: number){
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
    }

    public consultarDados1(){
        console.log(`Modelo: ${this.modelo}
Marca: ${this.marca}
Cor: ${this.cor}
Ano: ${this.ano}`)
    }
}

const carro1 = new Carro("Celta", "Chevrolet", "Vermelho", 2008)

// carro1.consultarDados()
class Moto extends Carro {
    potencia: string;

    constructor(modelo: string, marca: string, cor: string, ano: number, potencia: string, ){
        super(marca, modelo, cor, ano);
        this.potencia = potencia;
    }

    public consultarDados2(){
        console.log(`Modelo: ${this.modelo}
Marca: ${this.marca}
Cor: ${this.cor}
Ano: ${this.ano}
Potência: ${this.potencia}`)
    }
}

const moto1 = new Moto("CG 150", "YAMAHA", "Vermelha", 2010, "150cc")

moto1.consultarDados2()
