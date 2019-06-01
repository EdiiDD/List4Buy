import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';

import { AuthicationService } from '../../services/authication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  private userLogin: User = {}
  private userRegister: User = {};
  private loading: any;


  constructor(
    private autenticationService: AuthicationService,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController,



  ) { }

  ngOnInit() {
  }

  segmentChanged(event: any) {
    if (event.detail.value == "Login") {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }
  }

  async login() {
    await this.presentLoading();
    try {
      await this.autenticationService.login(this.userLogin);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.router.navigate(['/home'])
      this.loading.dismiss();
    }

  }

  async singup() {
    await this.presentLoading();
    try {
      await this.autenticationService.register(this.userRegister);
    } catch (error) {
      this.presentToast(error.message);
    } finally {
      this.router.navigate(['/home'])
      this.loading.dismiss();
    }

  }

  async presentLoading() {
    this.loading = await this.loadingController.create({ message: 'Espere mientras cargan los datos...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({ message, duration: 3000 });
    toast.present();
  }
}
