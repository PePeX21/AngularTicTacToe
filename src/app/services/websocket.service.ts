import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SocketMessage } from './socket-message';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: WebSocket;

  announcement$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  name$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private name!: string;
  constructor() { }

  startSocket() {
    this.socket = new WebSocket('ws://localhost:5252/ws');
    this.socket.addEventListener("open", (ev => {
      console.log('opened')
    }));
    this.socket.addEventListener("message", (ev => {
      var messageBox: SocketMessage = JSON.parse(ev.data);
      console.log('message object', messageBox);
      switch (messageBox.MessageType) {
        case "name":
          this.name = messageBox.Payload;
          this.name$.next(this.name);
          break;
        case "announce":
          this.announcement$.next(messageBox.Payload);
          break;
        default:
          break;
      }
    }));
  }

}