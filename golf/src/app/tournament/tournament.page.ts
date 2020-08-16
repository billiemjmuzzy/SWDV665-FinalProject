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
    return this.dataService.items;
  }


  addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }


  async editItem(item, index) {
    console.log("Editing ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Editing ' + item.name,
      duration: 3000,
      position: 'top'
    });

    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }



  async removeItem(item, index) {
    console.log("Removing ", item, index);
    const toast = await this.toastCtrl.create({
      message: 'Removing ' + item.name,
      duration: 3000,
      position: 'top'
    });

    toast.present();
    this.dataService.removeItem(index);


  }

}