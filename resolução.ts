interface IJogadorState{
  turnOn(context: Jogador):void
  turnOff(context: Jogador):void
  onGame(context: Jogador):void
  pause(context: Jogador):void
  resumeGame(context: Jogador):void
  disconnect(context: Jogador):void
}

class Jogador{}