/*
Offline, Online, Em Jogo, Pausado, Desconectado

Todo jogador começa no estado "Offline".

O jogador "Offline" pode mudar para "Online".
Um jogador "Online" pode entrar em "Em Jogo" ou ir para "Offline".
Um jogador "Em Jogo" pode ir para "Pausado" ou "Desconectado".
Um jogador "Pausado" pode voltar para "Em Jogo" ou ir para "Desconectado".
Um jogador "Desconectado" volta para "Offline".
*/

interface EstadoJogador {
    ficarOnline() : EstadoJogador;
    ficarOffline() : EstadoJogador;
    entrarNoJogo() : EstadoJogador;
    pausarJogo() : EstadoJogador;
    desconectar() : EstadoJogador;
    reconectar() : EstadoJogador;
}

class Offline implements EstadoJogador{
    ficarOnline(): EstadoJogador {
        return new Online();
    }
    ficarOffline(): EstadoJogador {
        return this;
    }
    entrarNoJogo(): EstadoJogador {
        return this;
    }
    pausarJogo(): EstadoJogador {
        return this;
    }
    desconectar(): EstadoJogador {
        return this;
    }
    reconectar(): EstadoJogador {
        return this;
    }
}

class Online implements EstadoJogador {
    ficarOnline(): EstadoJogador {
        return this;
    }
    ficarOffline(): EstadoJogador {
        return new Offline();
    }
    entrarNoJogo(): EstadoJogador {
        return new EmJogo();
    }
    pausarJogo(): EstadoJogador {
        return this;
    }
    desconectar(): EstadoJogador {
        return new Desconectado();
    }
    reconectar(): EstadoJogador {
        return this;
    }
}

class EmJogo implements EstadoJogador {
    ficarOnline(): EstadoJogador {
        return this;
    }
    ficarOffline(): EstadoJogador {
        return this;
    }
    entrarNoJogo(): EstadoJogador {
        return this;
    }
    pausarJogo(): EstadoJogador {
        return new Pausado();
    }
    desconectar(): EstadoJogador {
        return new Desconectado();
    }
    reconectar(): EstadoJogador {
        return this;
    }
}

class Pausado implements EstadoJogador {
    ficarOnline(): EstadoJogador {
        return this;
    }
    ficarOffline(): EstadoJogador {
        return this;
    }
    entrarNoJogo(): EstadoJogador {
        return new EmJogo();
    }
    pausarJogo(): EstadoJogador {
        return this;
    }
    desconectar(): EstadoJogador {
        return new Desconectado();
    }
    reconectar(): EstadoJogador {
        return this;
    }
}

class Desconectado implements EstadoJogador {
    ficarOnline(): EstadoJogador {
        return this;
    }
    ficarOffline(): EstadoJogador {
        return this;
    }
    entrarNoJogo(): EstadoJogador {
        return this;
    }
    pausarJogo(): EstadoJogador {
        return this;
    }
    desconectar(): EstadoJogador {
        return this;
    }
    reconectar(): EstadoJogador {
        return new Offline();
    }
}

class Jogador {
    estado: EstadoJogador;
    constructor() {
        this.estado = new Offline();
    }
}

const jogador = new Jogador();
jogador.estado = jogador.estado.ficarOnline();
console.log(jogador.estado);
