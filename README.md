# Resolução do exercício utilizando de princípios do SOLID

Questão: Você é um desenvolvedor em uma plataforma de streaming de jogos online. Uma
funcionalidade central do sistema é a capacidade de um jogador entrar em diferentes estados de jogo. Os estados possíveis são: Offline, Online, Em Jogo, Pausado, Desconectado conforme as seguintes regras de negócio:
Todo jogador começa no estado "Offline".

O jogador "Offline" pode mudar para "Online".
Um jogador "Online" pode entrar em "Em Jogo" ou ir para "Offline".
Um jogador "Em Jogo" pode ir para "Pausado" ou "Desconectado".
Um jogador "Pausado" pode voltar para "Em Jogo" ou ir para "Desconectado".
Um jogador "Desconectado" volta para "Offline".

`Resolução feita por Rafael`