import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tttboard',
  templateUrl: './tttboard.component.html',
  styleUrls: ['./tttboard.component.css']
})
export class TttboardComponent implements OnInit {
  square!: any[];
  xMove!: boolean;
  winner!: string;

  constructor() {};
  
  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame(){
    this.square = Array(9).fill(null);
    this.xMove = true;
    this.winner = "";
  }

  get player(){
    return this.xMove ? 'X' : 'O';
  }

  makeMove(posid: number) {if(this.square[2] == 'X' && this.square[4] == 'X' && this.square[6] == 'X'){
  }
    if(!this.square[posid]){
        this.square.splice(posid, 1, this.player);
        this.checkForWIn();
        this.xMove = !this.xMove;
    }
  }

  checkForWIn(): boolean {
    // poziome
    for (let i = 0; i < 9; i += 3){
      let mark = this.square[i];
      for (let j = 1; j < 3; j ++){
        if(mark != this.square[i+j]){
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
    for (let i = 1; i < 3; i ++){    
      let mark = this.square[i];
      for (let j = 0; j < 9; j += 3){
        if(mark != this.square[i+j]){
          break;
        }
        else{
          if(j==2){
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
