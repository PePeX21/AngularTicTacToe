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

  makeMove(posid: number) {
    if(!this.square[posid]){
        this.square.splice(posid, 1, this.player);
        this.xMove = !this.xMove;
    }
  }

}
