class Jogador {
    private nome: string;
    protected estado: Estado;

    constructor(nome: string, estado: Estado) {
        this.nome = nome;
        this.estado = estado;
    }
}

class Estado implements acao {
    private nomeEstado: string;

    constructor(nomeEstado) {
        this.nomeEstado = nomeEstado;
    }

    acao (nomeEstado) {

    }
}

interface online {

}