import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.page.html',
  styleUrls: ['./user-modal.page.scss'],
})
export class UserModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  closeModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  
  }
}
