import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  player = [];


  constructor() { }

  getPlayer() {
    return this.player;
  }

  addPlayer(player) {
    this.player.push(player);
  }

  removePlayer(index) {
    this.player.splice(index, 1);
  }

  editPlayer(player, index) {
    this.player[index] = player;
  }

}