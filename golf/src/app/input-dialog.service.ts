import { Tournament } from './tournament/tournament.model';
import { Subscription } from 'rxjs';
import { Injectable, OnDestroy, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TournamentService } from './tournament/tournament.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService implements OnInit, OnDestroy {
  inputs: Tournament[];
  private tournamentSub: Subscription;

  constructor(
    private dataService: TournamentService,
    private alertController: AlertController) { }
  
    ngOnInit() {
      this.tournamentSub = this.dataService.tournament.subscribe(tournament => {
        this.inputs = tournament;
      });
    }

  async showPrompt(Tournament?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: Tournament ? 'Edit Tournament' : 'Add Tournament',
      message: Tournament ? "Please edit player name." : "Please enter Tournament to add to tournament.",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name',
          value: Tournament ? Tournament.name : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: Tournament => {
            console.log(this.tournamentSub);
          }
        }, {
          text: 'Save',
          handler: Tournament => {
            console.log('Save clicked', Tournament);
            if (index !== undefined) {
              this.dataService.editTournament(Tournament, index)
            }
            else {
              this.dataService.addTournament(Tournament)
            }
          }
        }
      ]
    });
    await alert.present();
  }
  ngOnDestroy() {
    if (this.tournamentSub) {
      this.tournamentSub.unsubscribe();
    }
  }

}