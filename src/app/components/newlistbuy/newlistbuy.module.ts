import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewlistbuyPage } from './newlistbuy.page';

const routes: Routes = [
  {
    path: '',
    component: NewlistbuyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewlistbuyPage]
})
export class NewlistbuyPageModule {}
