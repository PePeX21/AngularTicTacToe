import { Component, OnInit } from '@angular/core';

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



}
