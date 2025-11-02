interface state{
  online: boolean
  
  turnOn():void
  turnOff():void
  onGame():void
}

interface inGame{
  pause():void
  disconnect():void
}

interface pausado{
  resumeGame():void
  disconnect():void
}

class jogadorState implements state{
  online: boolean
  
  constructor(online: boolean){
    this.online = false
  }
  turnOn():void{
    if(this.online = false){
      this.online = true
    } else {
      console.log(`Você já está online`)
    }
  }
  turnOff():void{

  }
  onGame():void
}