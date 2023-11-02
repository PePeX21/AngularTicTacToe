import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SocketMessage } from './socket-message';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: WebSocket;

  move$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  playerType$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private playerType!: string;
  private move!: string;
  constructor() { }

  closeSocket(){
    this.socket.close();
  }
  startSocket() {
    this.socket = new WebSocket('ws://localhost:5252/ws');
    this.socket.addEventListener("open", (ev => {
      console.log('opened')
    }));
    this.socket.addEventListener("message", (ev => {
      var messageBox: SocketMessage = JSON.parse(ev.data);
      console.log('message object', messageBox);
      switch (messageBox.MessageType) {
        case "startNewGame":
          this.playerType= messageBox.Payload;
          this.playerType$.next(this.playerType);
          break;
        case "move":
          this.move= messageBox.Payload;
          this.move$.next(this.move);
          
          break;
        default:
          break;

      }
    }));
  }

  makeMove(posid: number): void{
    var msg: SocketMessage = {
      Payload: posid, 
      MessageType: "move"
    };
    this.socket.send(JSON.stringify(msg));
  }

}