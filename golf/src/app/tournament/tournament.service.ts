import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

import { Tournament } from './tournament.model';
import { AuthService } from '../auth/auth.service';
import { Time } from '@angular/common';

interface TournamentData {
  player: string;
  startDate: string,
  startTime: string,
  userId: string;
  }

@Injectable({
  providedIn: 'root'
})


export class TournamentService {
  private _tournament = new BehaviorSubject<Tournament[]>([]);


  get tournament() {
    return this._tournament.asObservable();
  }

  constructor(private authService: AuthService, private http: HttpClient) { }

  addTournament(
    player: string,
    startDate: Date,
    startTime: Time
  ) {
    let generatedId: string;
    let fetchedUserId: string;
    let newTournament: Tournament;
    return this.authService.userId.pipe(
      take(1),
      switchMap(userId => {
        fetchedUserId = userId;
        return this.authService.token;
      }),
      take(1),
      switchMap(token => {
        if (!fetchedUserId) {
          throw new Error('No user found!');
        }
        newTournament = new Tournament(
          Math.random().toString(),
          player,
          startDate,
          startTime,
          fetchedUserId,
        );
        return this.http.post<{ name: string }>(
          `https://golf-app-66095.firebaseio.com/tournaments.json?auth=${token}`,
          {
            ...newTournament,
            id: null
          }
        );
      }),
      switchMap(resData => {
        generatedId = resData.name;
        return this.tournament;
      }),
      take(1),
      tap(tournament => {
        newTournament.id = generatedId;
        this._tournament.next(tournament.concat(newTournament));
      })
    );
  }
}