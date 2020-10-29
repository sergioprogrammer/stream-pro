import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab4Page } from './tab4.page';


import { StarRatingModule } from 'ionic5-star-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    Tab4PageRoutingModule,
    StarRatingModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
