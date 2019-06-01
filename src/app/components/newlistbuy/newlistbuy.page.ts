import { Component, OnInit } from '@angular/core';
import { ListBuy } from 'src/app/interfaces/list-buy';

import { AddListBuyService } from '../../services/add-list-buy.service';
import { AuthicationService } from 'src/app/services/authication.service';

import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-newlistbuy',
  templateUrl: './newlistbuy.page.html',
  styleUrls: ['./newlistbuy.page.scss'],
})
export class NewlistbuyPage implements OnInit {
  private listBuyId: string = null;
  private listBuy: ListBuy = {};
  private loading: any;
  private listBuySuscription: Subscription;



  constructor(
    private productService: AddListBuyService,
    private authenticationService: AuthicationService,
    private activatedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private router: Router

  ) {

  }

  ngOnInit() {
  }

  loadListBuy() {
    this.listBuySuscription = this.productService.getListBuy(this.listBuyId).subscribe(data => {
      this.listBuy = data;
    });
  }

  async cancel() {
    await this.presentLoading("Lista Cancelada...");
    try {
    } catch (error) {
      console.error(error);
    } finally {
      this.router.navigate(['/home'])
      this.loading.dismiss();
    }
  }

  async accept() {
    this.listBuy.id = this.authenticationService.getAuthentication().currentUser.uid;
    this.listBuy.createAt = this.authenticationService.getAuthentication().currentUser.email;
    await this.presentLoading("'Añadiendo Lista...' ");
    try {
      await this.productService.addListBuy(this.listBuy);
      await this.loading.dismiss();
      this.navCtrl.navigateBack('/home');

    } catch (error) {
      this.presentToast('Error al añadir la lista');
      this.loading.dismiss();
    }

  }

  async presentLoading(msg: string) {

    this.loading = await this.loadingCtrl.create({ message: msg });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 1000 });
    toast.present();
  }

}
