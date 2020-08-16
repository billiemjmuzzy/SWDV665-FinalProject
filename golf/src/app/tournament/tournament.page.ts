import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { TournamentService } from '../tournament.service';
import { InputDialogService } from '../input-dialog.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
})
export class TournamentPage implements OnInit {

  title = "Set-up Tournament";

  constructor(private toastCtrl: ToastController, private alertController: AlertController, private dataService: TournamentService, private inputDialogService: InputDialogService) {

  }

  ngOnInit() {
  }

  loadItems() {
    return this.dataService.player;
  }


  addPlayer() {
    console.log("Adding Player");
    this.inputDialogService.showPrompt();
  }


  async editPlayer(player, index) {
    console.log("Editing ", player, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing ' + player.name,
      duration: 3000,
      position: 'top'
    });

    toast.present();
    this.inputDialogService.showPrompt(player, index);
  }



  async removePlayer(player, index) {
    console.log("Removing ", player, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing ' + player.name,
      duration: 3000,
      position: 'top'
    });

    toast.present();
    this.dataService.removePlayer(index);


  }

}