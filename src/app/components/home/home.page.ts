import { Component, OnInit, ViewChild } from '@angular/core';

import { AuthicationService } from '../../services/authication.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ListBuy } from 'src/app/interfaces/list-buy';
import { AddListBuyService } from 'src/app/services/add-list-buy.service';
import { Subscription } from 'rxjs';

import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  private limit: number = 10;
  private loading: any;
  private listBuys = new Array<ListBuy>();
  private listBuysLoaded = new Array<ListBuy>();
  private listBuysSuscription = Subscription;
  private page: number = 0;

  constructor(
    private authService: AuthicationService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private listService: AddListBuyService,
    private router: Router,

  ) {
    this.getListsBuys();
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.listBuysSuscription.EMPTY.unsubscribe;
  }

  async getListsBuys() {
    this.listBuysSuscription.EMPTY = this.listService.getListsBuy().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].createAt == this.authService.getAuthentication().currentUser.email) {
          console.log(data[i]);
          this.listBuys.push(data[i]);
        }
      }

    });
  }

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
      this.router.navigate(['/login'])
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Saliendo...' });
    return this.loading.present();
  }



  loadData(event) {
  }
}
