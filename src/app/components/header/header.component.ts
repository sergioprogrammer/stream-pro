import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { FilterPopoverComponent } from '../filter-popover/filter-popover.component';
import { SearchModalPage } from '../search-modal/search-modal.page';
import { UserModalPage } from '../user-modal/user-modal.page';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
    public modalController: ModalController,
    public popoverController: PopoverController) { }

  ngOnInit() {}
  
  async showSearchModal() {
    const modal = await this.modalController.create({
      component: SearchModalPage
    });
    return await modal.present();
  }
  
  async showUserModal() {
    const modal = await this.modalController.create({
      component: UserModalPage
    });
    return await modal.present();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterPopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
