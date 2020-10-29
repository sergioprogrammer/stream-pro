import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.page.html',
  styleUrls: ['./search-modal.page.scss'],
})
export class SearchModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
