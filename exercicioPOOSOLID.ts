/* Você é um desenvolvedor em uma plataforma de streaming de jogos online. Uma
funcionalidade central do sistema é a capacidade de um jogador entrar em diferentes estados de jogo. Os estados possíveis são: Offline, Online, Em Jogo, Pausado, Desconectado conforme as seguintes regras de negócio:
Todo jogador começa no estado "Offline".

    O jogador "Offline" pode mudar para "Online".
    Um jogador "Online" pode entrar em "Em Jogo" ou ir para "Offline".
    Um jogador "Em Jogo" pode ir para "Pausado" ou "Desconectado".
    Um jogador "Pausado" pode voltar para "Em Jogo" ou ir para "Desconectado".
    Um jogador "Desconectado" volta para "Offline".

Este código viola o Princípio de Responsabilidade Única, pois a classe Jogador está tentando lidar com a lógica de cada estado possível. Além disso, viola o Princípio Aberto-Fechado, pois se quisermos adicionar um novo estado, teríamos que modificar a classe Jogador.

Utilizando os princípios SOLID, desenvolva uma solução que corrija essas violações.
*/

class Jogador {
    private estado: Estado;

    constructor() {
        this.estado = new Offline(this);
    }

    mudarEstado(estado: Estado): void {
        this.estado = estado;
    }

    getEstado(): Estado {
        return this.estado;
    }

    mostrarEstado(): void {
        this.estado.mostrarEstado();
    }
}

interface Estado {
    mostrarEstado(): void;
    entrarOnline(): void;
    entrarEmJogo(): void;
    pausarJogo(): void;
    desconectar(): void;
    voltarOffline(): void;


}

class Offline implements Estado {
    private jogador: Jogador;

    constructor(jogador: Jogador) {
        this.jogador = jogador;
    }

    mostrarEstado(): void {
        console.log("O jogador está offline.");
    }

    entrarOnline(): void {
        console.log("Mudando para online...");
        this.jogador.mudarEstado(new Online(this.jogador));
    }

    entrarEmJogo(): void {
        console.log("Não é possível entrar em jogo estando offline.");
    }

    pausarJogo(): void {
        console.log("Não é possível pausar o jogo estando offline.");
    }

    desconectar(): void {
        console.log("O jogador já está desconectado.");
    }

    voltarOffline(): void {
        console.log("O jogador já está offline.");
    }
}

class Online implements Estado {
    private jogador: Jogador;

    constructor(jogador: Jogador) {
        this.jogador = jogador;
    }

    mostrarEstado(): void {
        console.log("O jogador está online.");
    }

    entrarOnline(): void {
        console.log("O jogador já está online.");
    }

    entrarEmJogo(): void {
        console.log("Entrando em jogo...");
        this.jogador.mudarEstado(new EmJogo(this.jogador));
    }

    pausarJogo(): void {
        console.log("Não é possível pausar o jogo estando online.");
    }

    desconectar(): void {
        console.log("Não é possível desconectar o jogo estando online.");
    }

    voltarOffline(): void {
        console.log("Voltando para offline...");
        this.jogador.mudarEstado(new Offline(this.jogador));
    }
}

class EmJogo implements Estado {
    private jogador: Jogador;

    constructor(jogador: Jogador) {
        this.jogador = jogador;
    }

    mostrarEstado(): void {
        console.log("O jogador está em jogo.");
    }

    entrarOnline(): void {
        console.log("O jogador já está em jogo.");
    }

    entrarEmJogo(): void {
        console.log("O jogador já está em jogo.");
    }

    pausarJogo(): void {
        console.log("Pausando o jogo...");
        this.jogador.mudarEstado(new Pausado(this.jogador));
    }

    desconectar(): void {
        console.log("Desconectando...");
        this.jogador.mudarEstado(new Desconectado(this.jogador));
    }

    voltarOffline(): void {
        console.log("Não é possível voltar para offline estando em jogo.");
    }
}

class Pausado implements Estado {
    private jogador: Jogador;

    constructor(jogador: Jogador) {
        this.jogador = jogador;
    }

    mostrarEstado(): void {
        console.log("O jogador está com o jogo pausado.");
    }

    entrarOnline(): void {
        console.log("O jogador já está em jogo.");
    }

    entrarEmJogo(): void {
        console.log("Voltando para o jogo...");
        this.jogador.mudarEstado(new EmJogo(this.jogador));
    }

    pausarJogo(): void {
        console.log("O jogo já está pausado.");
    }

    desconectar(): void {
        console.log("Desconectando...");
        this.jogador.mudarEstado(new Desconectado(this.jogador));
    }

    voltarOffline(): void {
        console.log("Não é possível voltar para offline estando com o jogo pausado.");
    }
}

class Desconectado implements Estado {
    private jogador: Jogador;

    constructor(jogador: Jogador) {
        this.jogador = jogador;
    }

    mostrarEstado(): void {
        console.log("O jogador está desconectado.");
    }

    entrarOnline(): void {
        console.log("Não é possível voltar para online estando desconectado.");
    }

    entrarEmJogo(): void {
        console.log("Não é possível entrar em jogo estando desconectado.");
    }

    pausarJogo(): void {
        console.log("Não é possível pausar o jogo estando desconectado.");
    }

    desconectar(): void {
        console.log("O jogador já está desconectado.");
    }

    voltarOffline(): void {
        console.log("Voltando para offline...");
        this.jogador.mudarEstado(new Offline(this.jogador));
    }
}

// Exemplo de uso
const jogador = new Jogador();
jogador.mostrarEstado();

jogador.getEstado().entrarOnline();
jogador.mostrarEstado();

jogador.getEstado().entrarEmJogo();
jogador.mostrarEstado();

jogador.getEstado().pausarJogo();
jogador.mostrarEstado();

jogador.getEstado().desconectar();
jogador.mostrarEstado();

jogador.getEstado().voltarOffline();
jogador.mostrarEstado();