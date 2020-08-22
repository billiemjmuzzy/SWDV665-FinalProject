
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { TournamentService } from './tournament.service';
import { switchMap } from 'rxjs/operators';;

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
})
export class TournamentPage implements OnInit {
  form: FormGroup;

  constructor(
    private tournamentService: TournamentService,
    private router: Router,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup({
      player: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onAddTournament() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl
    .create({
      message: 'Creating tournament...'
    })
      .then(loadingEl => {
        loadingEl.present();
        return this.tournamentService.addTournament(
          this.form.value.player,
          this.form.value.startDate,
          this.form.value.startTime

        )
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(['/play']);
        })
      
    })
  }
}
