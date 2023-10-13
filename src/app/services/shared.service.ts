import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { gameType } from '../model/gametype.enum';
@Injectable()
export class SharedService {
  private subject = new Subject<any>();

  sendGameTypeEvent(gameType: gameType) {
    this.subject.next(gameType);
  }

  getGameTypeEvent(): Observable<gameType>{ 
    return this.subject.asObservable();
  }
}
