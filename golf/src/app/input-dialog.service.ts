import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TournamentService } from './tournament.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(private alertController: AlertController, private dataService: TournamentService ) { }

  async showPrompt(Player?, index?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: Player ? 'Edit Player' : 'Add Player',
      message: Player ? "Please edit player name." : "Please enter Player to add to tournament.",
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name',
          value: Player ? Player.name : null
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: Player => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: Player => {
            console.log('Save clicked', Player);
            if (index !== undefined) {
              this.dataService.editPlayer(Player, index)
            }
            else {
              this.dataService.addPlayer(Player);
            }

          }
        }
      ]
    });
    await alert.present();
  }

}