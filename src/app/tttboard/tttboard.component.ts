import { Component, OnInit } from '@angular/core';
import { gameType } from '../model/gametype.enum';
import { SharedService } from '../services/shared.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { WebSocketService } from '../services/websocket.service';
@Component({
  selector: 'app-tttboard',
  templateUrl: './tttboard.component.html',
  styleUrls: ['./tttboard.component.css']
})
export class TttboardComponent implements OnInit {
  columns = [0,1,2];
  rows = [0,1,2];
  square!: any[];
  xMove!: boolean;
  winner!: string;
  gametype!: gameType;
  name!: string;
  constructor(private sharedService: SharedService, private http: HttpClient, private toastr: ToastrService, private socketService: WebSocketService) {
    this.socketService.announcement$.subscribe(announcement => {
      if (announcement) {
        //this.messages.unshift(announcement);
      }
    });
    this.socketService.name$.subscribe(n => {
      this.name = "";
    });
  };
  
  ngOnInit(): void {
   this.startNewGame(); 
    this.sharedService.getGameTypeEvent().subscribe((gType: gameType) => {
      console.log(gameType.toString());
      this.gametype = gType
      this.startNewGame()
      if(this.gametype == gameType.online){
        console.log("startwebSocket")
        this.socketService.startSocket();

        // this.http.post<any>('wss://localhost:5252/wsCreateRoom', {}, { withCredentials: true }).subscribe(
        //   (error) => {
        //     this.toastr.error('Error LOGING user :<:', error)
        //     console.error('Error logining user:', error);
        //   }
        // )
      }
    })
  }

  startNewGame(){
    this.square = Array(9).fill(null);
    this.xMove = true;
    this.winner = "";
  }
  
  get player(){
    return this.xMove ? 'X' : 'O';
  }

  makeMove(posid: number) {
    console.log("im in")
    switch(this.gametype){
      case gameType.sameHost:
        console.log("sameHost working on make move")
        if(!this.square[posid]){
          this.square.splice(posid, 1, this.player);
          if(this.checkForWIn()){
            this.startNewGame();
            return
          };
          this.xMove = !this.xMove;
        }
        break
      case gameType.online:
        
        break
      case gameType.vsAI:
        break
      default:
        return
    }    
  }


  checkForWIn(): boolean {
    // poziome
    for (let i = 0; i < 9; i += 3){
      let mark = this.square[i];
      for (let j = 1; j < 3; j ++){
        if(mark != this.square[i+j] || mark == null){
          break;
        }
        else{
          if(j==2){
            return true;
          }
        }
      }
    }
    // pionowo
    for (let i = 0; i < 3; i ++){    
      let mark = this.square[i];
      for (let j = 3; j < 9; j += 3){
        if(mark != this.square[i+j] || mark == null){
          break;
        }
        else{
          if(j==6){
            return true;
          }
        }
      }
    }
    // ma ukos
    if(this.square[0] == 'X' && this.square[4] == 'X' && this.square[8] == 'X'){
      return true;
    }
    if(this.square[0] == 'O' && this.square[4] == 'O' && this.square[8] == 'O'){
      return true;
    }
    if(this.square[2] == 'X' && this.square[4] == 'X' && this.square[6] == 'X'){
      return true;
    }
    if(this.square[2] == 'O' && this.square[4] == 'O' && this.square[6] == 'O'){
      return true;
    }
    return false;
  }
}
